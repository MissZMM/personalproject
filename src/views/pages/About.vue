<template>
  <div class="about">
    <div class="content">
      <div class="left">
        <div class="nav-header">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather align-middle mr-2 folder"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          <img src="../../assets/sr.png" alt="" class="sr-title">
        </div>
        <el-menu
          :default-active="activeIndex"
          class="el-menu"
          mode="vertical"
          @select="handleSelect"
          background-color="#edf2f9"
          text-color="#798798"
          active-text-color="#0176A4">
          <el-menu-item index="1"><svg class="svg-inline--fa fa-chart-pie fa-w-17 menu-icon" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chart-pie" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 544 512" data-fa-i2svg=""><path fill="currentColor" d="M527.79 288H290.5l158.03 158.03c6.04 6.04 15.98 6.53 22.19.68 38.7-36.46 65.32-85.61 73.13-140.86 1.34-9.46-6.51-17.85-16.06-17.85zm-15.83-64.8C503.72 103.74 408.26 8.28 288.8.04 279.68-.59 272 7.1 272 16.24V240h223.77c9.14 0 16.82-7.68 16.19-16.8zM224 288V50.71c0-9.55-8.39-17.4-17.84-16.06C86.99 51.49-4.1 155.6.14 280.37 4.5 408.51 114.83 513.59 243.03 511.98c50.4-.63 96.97-16.87 135.26-44.03 7.9-5.6 8.42-17.23 1.57-24.08L224 288z"></path></svg>统计分析</el-menu-item>
          <el-menu-item index="2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather align-middle mr-2 menu-icon"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>模型训练</el-menu-item>
          <el-menu-item index="3"><svg class="svg-inline--fa fa-copy fa-w-14 menu-icon" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="copy" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M320 448v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V120c0-13.255 10.745-24 24-24h72v296c0 30.879 25.121 56 56 56h168zm0-344V0H152c-13.255 0-24 10.745-24 24v368c0 13.255 10.745 24 24 24h272c13.255 0 24-10.745 24-24V128H344c-13.2 0-24-10.8-24-24zm120.971-31.029L375.029 7.029A24 24 0 0 0 358.059 0H352v96h96v-6.059a24 24 0 0 0-7.029-16.97z"></path></svg>图像重建</el-menu-item>
          <el-submenu index="9">
            <template slot="title">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather align-middle mr-2 menu-icon"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>
              <span>数据管理</span>
            </template>
            <el-menu-item index="4">数据集</el-menu-item>
            <el-menu-item index="5">模型</el-menu-item>
            <el-menu-item index="6">回收站</el-menu-item>
          </el-submenu>
          <el-menu-item index="7"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather align-middle mr-2 menu-icon"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>个人中心</el-menu-item>
        </el-menu>
      </div>
      <div class="right">
        <div class="header">
          <div class="search">
            <i class="el-icon-search"></i>
            <el-input clearable="clearable" placeholder="搜索" v-model="searchInput"></el-input>
          </div>
          <div class="loginInfo">
            <i class="el-icon-bell"></i>
            <el-dropdown class="drop" @command="handleCommand">
                <div class="avatar"><img src="../../assets/zm.png"></div>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item> <span class="el-dropdown-link">
                  欢迎你， {{ getUserName }}
                </span></el-dropdown-item>
                <el-dropdown-item command="logout">退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>
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
            activeIndex: '1',
            searchInput: ''
        }
    },
    computed: {
        getUserName () {
            return localStorage.getItem('userName');
        }
    },
    methods: {
        handleSelect (key, keyPath) {
            switch (key) {
            case '1':
                this.$router.push('/analysis');
                break;
            case '2':
                this.$router.push('/train')
                break;
            case '3':
                this.$router.push('/reconstruction')
                break;
            case '4':
                this.$router.push('/image')
                break;
            case '5':
                this.$router.push('/model')
                break;
            case '6':
                this.$router.push('/recycle')
                break;
            case '7':
                this.$router.push('/personal')
                break;
            }
        },
        handleCommand (command) {
            switch (command) {
            case 'logout':
                this.$router.push('/login');
                localStorage.removeItem('userName');
                localStorage.removeItem('token')
                break;
            }
        }
    }
}
</script>

<style lang="scss">
.about {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #edf2f9;
  margin: 0 auto;
  .content {
    position: relative;
    width: 75%;
    height: 100%;
    display: flex;
    padding: 0 16px;
    margin: 0 auto;
    .left {
      position: relative;
      width: 200px;
      .nav-header {
        position: relative;
        width: 150px;
        height: 56px;
        display: flex;
        align-items: center;
        /*justify-content: space-between;*/
        .folder {
          /*margin-right: 10px;*/
        }
        .sr-title {
          position: absolute;
          right: -50px;
          height: 30px;
        }
      }
      .el-menu {
        width: 200px;
        .menu-icon {
          width: 16px;
          margin-right: 10px;
        }
        .el-submenu__title {
          font-size: 16px;
          text-align: left;
        }
        .el-menu-item {
          font-size: 16px;
          text-align: left;
        }
        .el-submenu .el-menu-item {
          min-width: 200px;
          margin-left: 10px;
        }
      }
    }
    .right {
      position: relative;
      flex: 1;
      box-sizing: border-box;
      margin-left: 48px;
      .header {
        width: 100%;
        height: 50px;
        line-height: 50px;
        display: flex;
        align-items: center;
        .search {
          display: flex;
          width: 40%;
          height: 32px;
          background-color: #fff;
          border-radius: 16px;
          padding-left: 12px;
          overflow: hidden;
          i {
            margin: auto 0;
          }
          .el-input {
            margin-top: -8px;
          }
          .el-input__inner {
            height: 32px;
            border: 0;
          }
        }
        .loginInfo {
          position: absolute;
          width: 200px;
          height: 50px;
          line-height: 50px;
          right: 0px;
          margin: auto 0;
          text-align: right;
          .el-icon-bell {
            margin-right: 10px;
            font-size: 24px;
          }
          .drop {
            margin: auto 0;
            .avatar {
              width: 32px;
              height: 32px;
              display: inline-block;
              overflow: hidden;
              border-radius: 50%;
              margin-top: 9px;
              img {
                width: 32px;
              }
            }
            .el-dropdown-item {
              font-size: 10px;
            }
          }
        }
      }
    }
  }
}
</style>
