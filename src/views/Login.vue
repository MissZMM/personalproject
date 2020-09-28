<template>
    <div class="content">
      <div class="loginBox">
        <div class="title">登录</div>
        <el-form label-position='left'>
          <el-form-item prop="email" label="邮箱">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary">提交</el-button>
            <el-button>重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Login'
}
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  .loginBox {
    width: 500px;
    height: 300px;
    background-color: #EEFFCC;
    border-radius: 8px;
    box-sizing: border-box;
    padding: 8px;
    .title {
      font-weight: bold;
      font-size: 24px;
      font-family: "Microsoft Himalaya";
    }
  }
}
</style>
