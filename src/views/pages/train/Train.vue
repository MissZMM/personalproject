<template>
    <div class="container">
        <div class="left">
          <div class="top">
            <el-form :model="method" ref="ruleForm" label-width="124px">
              <el-form-item label="图像超分辨率方法" prop="region">
                <el-select v-model="method.resolution" placeholder="请选择">
                  <el-option label="SRCNN方法" value="1"></el-option>
                  <el-option label="FSRCNN方法" value="2"></el-option>
                  <el-option label="VDSR方法" value="3"></el-option>
                  <el-option label="基于残差学习的图像超分辨率方法" value="4"></el-option>
                </el-select>
              </el-form-item>
            </el-form>
          </div>
          <div class="content">
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
            <div class="translate">
              <el-button plain @click="generateImage">图像转换</el-button>
            </div>
            <div class="result">
              <img v-if="generateUrl" :src="'blob:'+generateUrl" v-loading="loading" id="imageBox">
            </div>
          </div>
          <div class="bottom">
          </div>
        </div>
        <div class="right">
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
            active: 0
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
        }
    }
}
</script>

<style lang="scss" scoped>
  .container {
    position: relative;
    width: 100%;
    margin-top: 16px;
    display: flex;
    .left {
      position: relative;
      width: 400px;
      .top {
        width: 90px;
        height: 20%;
        box-sizing: border-box;
      }
      .content {
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 60%;
        .source {
          display: flex;
          width: 40%;
          height: 100%;
          align-items: center;
          justify-content: center;
          .avatar-uploader-after {
            display: block;
          }
          .avatar-uploader {
            display: block;
            width: 200px;
            height: 200px;
            background-color: #eeeeee;
            border: 1px dashed #8c939d;
          }
          .avatar-uploader .el-upload {
            border-radius: 6px;
            cursor: pointer;
            position: relative;
            overflow: hidden;
          }
          .avatar-uploader .el-upload:hover {
            border-color: #409EFF;
          }
          .avatar-uploader-icon {
            font-size: 28px;
            color: #8c939d;
            width: 178px;
            height: 178px;
            line-height: 178px;
            text-align: center;
          }
          .avatar {
            width: 100%;
            display: block;
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
      .bottom {
        width: 300px;
        height: 20%;
        text-align: left;
      }
    }
    .right {
      flex: 1;
      height: 100px;
      background-color: pink;
    }
  }
</style>
