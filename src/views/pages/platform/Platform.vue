<template>
    <div class="content">
        <div class="left">
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
      <div class="center">
          <el-button plain>图像转换</el-button>
      </div>
      <div class="right"></div>
    </div>
</template>

<script>
export default {
    name: 'platform',
    data () {
        return {
            imageUrl: ''
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
        }
    }
}
</script>

<style lang="scss" scoped>
  .content {
    display: flex;
    justify-content: space-between;
    .left {
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
    .center {
      display: flex;
      width: 20%;
      height: 100%;
      justify-content: center;
      align-items: center;
    }
    .right {
      position: relative;
      width: 40%;
      height: 100%;
    }
  }
</style>
