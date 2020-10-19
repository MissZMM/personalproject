<template>
  <div class="about">
    <div class="header"></div>
    <div class="content">
      <el-menu
        :default-active="activeIndex"
        class="el-menu"
        mode="vertical"
        @select="handleSelect"
        background-color="#545c64"
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
      width: 100%;
      height: 60px;
      background-color: #554f55;
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
