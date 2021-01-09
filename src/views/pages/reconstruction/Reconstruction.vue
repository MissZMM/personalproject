<template>
  <div class="container">
    <div class="reconstraction">
      <div class="top" id="step-1">
        <h4>模型选择</h4>
        <el-form :model="method" ref="ruleForm">
          <el-radio-group v-model="method.resolution" placeholder="请选择">
            <el-radio-button label="SRCNN方法" value="1"></el-radio-button>
            <el-radio-button label="FSRCNN方法" value="2"></el-radio-button>
            <el-radio-button label="VDSR方法" value="3"></el-radio-button>
            <el-radio-button label="基于残差学习的图像超分辨率方法" value="4"></el-radio-button>
            <el-radio-button label="基于注意力机制的图像超分辨率方法" value="4"></el-radio-button>
            <el-radio-button label="model-1" value="5"></el-radio-button>
            <el-radio-button label="model-2" value="6"></el-radio-button>
            <el-radio-button label="model-3" value="7"></el-radio-button>
          </el-radio-group>
        </el-form>
      </div>
      <div class="image-upload" id="step-2">
        <h4>图像上传</h4>
        <el-tabs v-model="activeName" type="border-card" @tab-click="handleClick">
          <el-tab-pane label="本地上传" name="second">
            <div class="source">
              <el-upload
                :class="[imageUrl ? 'avatar-uploader-after' : 'avatar-uploader']"
                :action="$axios.defaults.baseURL + '/upload'"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload">
                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </div>
          </el-tab-pane>
          <el-tab-pane label="采集上传" name="first">
            <i class="el-icon-camera-solid" @click="startPhoto"></i>
          </el-tab-pane>
        </el-tabs>
      </div>
      <div class="image-reconstruct">
        <h4>图像重建</h4>
        <div class="translate">
          <el-button plain @click="generateImage">图像转换</el-button>
        </div>
        <div class="result">
          <img v-if="generateUrl" :src="'blob:'+generateUrl" v-loading="loading" id="imageBox">
        </div>
      </div>
    </div>
    <div class="steps">
      <div class="step-content">
        <div class="step-1 step"><a href="#step-1">1</a></div>
        <div class="step-text">模型选择</div>
      </div>
      <div class="line"></div>
      <div class="step-content">
        <div class="step-2 step"><a href="#step-2">2</a></div>
        <div class="step-text">图像上传</div>
      </div>
      <div class="line"></div>
      <div class="step-content">
        <div class="step-3 step"><a href="#step-3">3</a></div>
        <div class="step-text">图像重建</div>
      </div>
    </div>
  </div>
</template>

<script>
// import { Loading } from 'element-ui';
export default {
    name: 'Train',
    data () {
        return {
            imageUrl: '',
            generateUrl: '',
            method: {
                resolution: ''
            },
            loading: false,
            active: 0,
            radio: '',
            activeName: 'first'
        };
    },
    methods: {
        handleAvatarSuccess (res, file) {
            this.imageUrl = URL.createObjectURL(file.raw);
        },
        beforeAvatarUpload (file) {
            const isJPG = file.type === 'image/jpeg';
            const isLt2M = file.size / 1024 / 1024 < 2;

            if (!isJPG) {
                this.$message.error('上传头像图片只能是 JPG 格式!');
            }
            if (!isLt2M) {
                this.$message.error('上传头像图片大小不能超过 2MB!');
            }
            return isJPG && isLt2M;
        },
        generateImage () {
            // const loading = Loading.service({
            //     lock: false,
            //     text: 'Loading',
            //     spinner: 'el-icon-loading',
            //     background: 'rgba(0, 0, 0, 0.7)',
            //     target: document.querySelector('#imageBox')
            // });
            this.generateUrl = '';
            this.loading = true;
            this.$axios({
                method: 'post',
                url: '/image/generate',
                params: {
                    url: this.imageUrl
                }
            }).then(res => {
                this.generateUrl = res.data.url;
                this.loading = false;
            }).catch(err => {
                this.loading = false;
                console.log(err);
            })
        },
        startPhoto () {
        }
    }
}
</script>

<style lang="scss" scoped>
  .container {
    position: relative;
    width: 100%;
    height: 100%;
    margin-top: 16px;
    display: flex;
    .reconstraction {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      .top {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 700px;
        height: 140px;
        box-sizing: border-box;
        h4 {
          height: 30px;
          line-height: 30px;
          margin-bottom: 8px;
        }
        .el-form {
          margin-left: -44px;
          width: 700px;
          .el-radio-group {
            width: 700px;
          }
        }
      }
      .image-upload {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 400px;
        height: 300px;
        box-sizing: border-box;
        padding: 0;
        margin-top: 16px;
        h4 {
          height: 30px;
          line-height: 30px;
          margin-bottom: 8px;
        }
        .el-tabs {
          width: 500px;
          height: 270px;
          .el-tab-pane {
            .el-icon-camera-solid {
              font-size: 200px;
            }
            .el-tabs__content {
              margin: 0 auto;
            }
          }
          .source {
            width: 100px;
            height: 200px;
            .avatar-uploader-after {
              display: block;
            }
            .avatar-uploader {
              display: block;
              width: 200px;
              height: 200px;
              background-color: #eeeeee;
              border: 1px dashed #8c939d;
              margin-left: 135px;
            }
            .avatar-uploader .el-upload {
              border-radius: 6px;
              cursor: pointer;
              position: relative;
              overflow: hidden;
            }
            .avatar-uploader .el-upload:hover {
              border-color: #409EFF;
              margin-left: 135px;
            }
            .avatar-uploader-icon {
              font-size: 28px;
              color: #8c939d;
              width: 178px;
              height: 178px;
              line-height: 178px;
              text-align: center;
              /*margin-left: 135px;*/
            }
            .avatar {
              width: 100%;
              display: block;
              margin-left: 135px;
            }
          }
        }
        .translate {
          display: flex;
          width: 20%;
          height: 100%;
          justify-content: center;
          align-items: center;
        }
        .result {
          display: flex;
          width: 40%;
          height: 100%;
          justify-content: center;
          align-items: center;
        }
      }
      .image-reconstruct {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 500px;
        height: 400px;
        box-sizing: border-box;
        margin-top: 16px;
        h4 {
          height: 30px;
          line-height: 30px;
          margin-bottom: 8px;
        }
      }
    }
    .steps {
      width: 150px;
      height: 300px;
      .step-content {
        display: flex;
        color: #798798;
        .step {
          width: 30px;
          height: 30px;
          line-height: 30px;
          border: 1px solid #798798;
          border-radius: 50%;
          margin-right: 16px;
          a {
            text-decoration: none;
            color: #798798;
          }
          a:active {
            color: skyblue;
          }
        }
        .step-text {
        }
      }
      .line {
        width: 1px;
        height: 100px;
        background-color: #798798;
        margin-left: 15px;
      }
      .line2 {
        height: 300px;
      }
      .step-1 {}
    }
  }
</style>
