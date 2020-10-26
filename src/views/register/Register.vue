<template>
    <div class="content">
        <div class="registBox">
            <div class="title">注册</div>
            <el-form :model="userInfoForm" :rules="userInfoFormRule" ref="userInfoFormRef" label-width="80px">
                <el-form-item label="用户名" prop="userName" required>
                  <el-input v-model="userInfoForm.userName" placeholder="请输入用户名"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password" required>
                  <el-input type="password" v-model="userInfoForm.password" placeholder="请输入密码"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="enpassword" required>
                  <el-input type="password" v-model="userInfoForm.enpassword" placeholder="请再次输入密码"></el-input>
                </el-form-item>
                <el-form-item label="邮箱" prop="email" required>
                  <el-input v-model="userInfoForm.email" placeholder="请输入邮箱"></el-input>
                </el-form-item>
                <el-form-item label="手机号" prop="phone" required>
                  <el-input v-model="userInfoForm.phone" placeholder="请输入手机号"></el-input>
                </el-form-item>
            </el-form>
            <el-button type="primary" @click="handleRegist">提交</el-button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Register',
    data () {
        const validatePass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入密码'));
            } else {
                if (this.userInfoForm.enpassword !== '') {
                    this.$refs.userInfoFormRef.validateField('enpassword');
                }
                callback();
            }
        };
        const validatePass2 = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请再次输入密码'));
            } else if (value !== this.userInfoForm.password) {
                callback(new Error('两次输入密码不一致!'));
            } else {
                callback();
            }
        };
        const validateEmail = (rule, value, callback) => {
            // eslint-disable-next-line no-useless-escape
            var reg = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
            if (value === '') {
                callback(new Error('请输入邮箱'));
            } else if (!reg.test(value)) {
                callback(new Error('请输入正确的邮箱!'));
            } else {
                callback();
            }
        };
        const validatePhone = (rule, value, callback) => {
            const reg = /^[1](([3][0-9])|([4][5-9])|([5][0-3,5-9])|([6][5,6])|([7][0-8])|([8][0-9])|([9][1,8,9]))[0-9]{8}$/;
            if (value === '') {
                callback(new Error('请输入手机号'));
            } else if (!reg.test(value)) {
                callback(new Error('请输入正确的手机号！'));
            } else {
                callback();
            }
        };
        return {
            userInfoForm: {
                userName: '',
                email: '',
                phone: '',
                password: '',
                enpassword: ''
            },
            userInfoFormRule: {
                userName: [
                    { required: true, message: '请输入用户名', trigger: 'blur' },
                    { min: 2, max: 10, message: '长度在2到10个字符', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' },
                    { min: 6, max: 15, message: '密码长度在6到15个字符之间', trigger: 'blur' },
                    { validator: validatePass, trigger: 'blur' }
                ],
                enpassword: [
                    { required: true, message: '请再次输入密码', trigger: 'blur' },
                    { validator: validatePass2, trigger: 'blur' }
                ],
                email: [
                    { required: true, message: '请输入邮箱', trigger: 'blur' },
                    { validator: validateEmail, trigger: 'blur' }
                ],
                phone: [
                    { required: true, message: '请输入手机号', trigger: 'blur' },
                    { validator: validatePhone, trigger: 'blur' }
                ]
            }
        }
    },
    methods: {
        handleRegist () {
            this.$refs.userInfoFormRef.validate(valid => {
                if (!valid) return;
                this.$axios({
                    method: 'post',
                    url: '/user/register',
                    params: {
                        userName: this.userInfoForm.userName,
                        email: this.userInfoForm.email,
                        phone: this.userInfoForm.phone,
                        password: this.userInfoForm.password
                    }
                }).then(res => {
                    console.log(res)
                });
            });
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
      .registBox {
          width: 50%;
          height: 450px;
          background-color: #eeeeee;
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
