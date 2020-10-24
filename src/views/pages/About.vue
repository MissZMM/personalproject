<template>
  <div class="about">
    <div class="header">
        <div class="title">图像超分辨率</div>
        <div class="loginInfo">
            <el-dropdown class="drop">
                <span class="el-dropdown-link">
                  欢迎你， {{ $store.state.userInfo.userName }}<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>退出登录</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
    <div class="content">
      <el-menu
        :default-active="activeIndex"
        class="el-menu"
        mode="vertical"
        @select="handleSelect"
        background-color="#312C28"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-menu-item index="1">我的工作台</el-menu-item>
        <el-menu-item index="2">数据分析</el-menu-item>
        <el-menu-item index="3">消息中心</el-menu-item>
        <el-menu-item index="4">订单管理</el-menu-item>
        <el-menu-item index="5">个人中心</el-menu-item>
      </el-menu>
      <div class="right">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'About',
    data () {
        return {
            activeIndex: '1'
        }
    },
    methods: {
        handleSelect (key, keyPath) {
            switch (key) {
            case '1':
                this.$router.push('/platform');
                break;
            case '2':
                this.$router.push('/analysis')
                break;
            case '3':
                this.$router.push('/message')
                break;
            case '4':
                this.$router.push('/order')
                break;
            case '5':
                this.$router.push('/personal')
                break;
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.about {
  width: 100%;
  height: 100%;
  .header {
      display: flex;
      width: 100%;
      height: 60px;
      color: #FFFFFF;
      box-sizing: border-box;
      .title {
          font-size: 26px;
          width: 200px;
          line-height: 60px;
          background-color: #312C28;
      }
      .loginInfo {
          position: relative;
          width: calc(100% - 200px);
          height: 40px;
          line-height: 40px;
          background-color: rgba(242, 237, 248, 0.3);
          .drop {
              position: absolute;
              right: 10px;
              top: 0;
              .el-dropdown-link {
                cursor: pointer;
              }
              .el-icon-arrow-down {
                font-size: 12px;
              }
          }
      }
  }
  .content {
    width: 100%;
    height: calc(100% - 60px);
    display: flex;
    .el-menu {
      width: 200px;
      height: 100%;
    }
    .right {
      width: calc(100% - 200px);
      flex: 1;
    }
  }
}
</style>
