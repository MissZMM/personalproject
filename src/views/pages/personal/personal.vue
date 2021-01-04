<template>
  <div class="content">
    <el-card class="box-card">
      <el-form :model="userInfoForm" ref="userInfoFormRef" label-width="80px">
        <el-form-item label="用户名" prop="userName">
          <el-input v-if="handle" v-model="userInfoForm.userName" placeholder="请输入用户名"></el-input>
          <span v-else>{{userName}}</span>
        </el-form-item>
        <el-form-item label="生日" prop="phone">
          <el-input v-if="handle" v-model="userInfoForm.birth" placeholder="请输入手机号"></el-input>
          <span v-else>{{birth || '待定'}}</span>
        </el-form-item>
        <el-form-item label="性别" prop="phone">
          <el-radio v-if="handle" v-model="userInfoForm.sex" label="1">男</el-radio>
          <el-radio v-if="handle" v-model="userInfoForm.sex" label="2">女</el-radio>
          <span v-else>{{sex || '待定'}}</span>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-if="handle" v-model="userInfoForm.email" placeholder="请输入邮箱"></el-input>
          <span v-else>{{email}}</span>
        </el-form-item>
        <el-form-item label="手机号" prop="phone">
          <el-input v-if="handle" v-model="userInfoForm.phone" placeholder="请输入手机号"></el-input>
          <span v-else>{{phone}}</span>
        </el-form-item>
      </el-form>
      <div class="buttonPosition">
        <el-button type="primary" @click="handleForm" >修改</el-button>
        <el-button type="info" @click="updateForm" v-show="handle">提交</el-button>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
    name: 'personal',
    data () {
        return {
            userInfoForm: {},
            email: '',
            userName: '',
            birth: '',
            sex: '',
            phone: '',
            handle: 0
        }
    },
    mounted () {
        this.email = localStorage.getItem('email');
        this.getUserInfo();
    },
    methods: {
        async getUserInfo () {
            try {
                const { data: res } = await this.$axios({
                    method: 'post',
                    url: '/user/find',
                    params: {
                        email: this.email
                    }
                });
                this.userName = res.userInfo.userName;
                this.phone = res.userInfo.phone;
                this.sex = res.userInfo.sex;
                this.birth = res.userInfo.birth;
            } catch (e) {
                console.log(e)
            }
        },
        handleForm () {
            this.handle = 1;
            this.userInfoForm.userName = this.userName;
            this.userInfoForm.birth = this.birth;
            this.userInfoForm.sex = this.sex;
            this.userInfoForm.email = this.email;
            this.userInfoForm.phone = this.phone;
        },
        updateForm () {
            this.handle = 0;
        }
    }
}
</script>

<style lang="scss" scoped>
  .content {
      display: flex;
      justify-content: flex-start;
      padding-left: 10px;
      .box-card {
        display: flex;
        flex-direction: column;
        width: 500px;
        padding-top: 20px;
        span {
          display: inline-block;
          width: 100%;
          height: 100%;
          padding: 0 15px;
          text-align: left;
        }
        .buttonPosition {
          align-self: flex-end;
        }
      }
  }
</style>
