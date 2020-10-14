<template>
    <div class="content">
      <div class="loginBox">
        <div class="title">登录</div>
        <el-form v-model="loginInfoForm" ref="loginFormRef" label-width="60px">
          <el-form-item label="邮箱">
            <el-input v-model="loginInfoForm.email"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="loginInfoForm.password" type="password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="handleSubmit">提交</el-button>
            <el-button @click="handleRegist">注册</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
</template>

<script>
export default {
    name: 'Login',
    data () {
        return {
            loginInfoForm: {
                email: '',
                password: ''
            }
        }
    },
    methods: {
        handleSubmit () {
            if (this.loginInfoForm.email === 'zhangmin@abc.com' && this.loginInfoForm.password === '123456') {
                this.$router.push('/about');
            }
        },
        handleRegist () {
            this.$router.push('/register');
        }
    }
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
        padding: 16px;
        .title {
            font-weight: bold;
            font-size: 24px;
            font-family: "Microsoft Himalaya";
            margin: 16px 0;
        }
    }
}
</style>
