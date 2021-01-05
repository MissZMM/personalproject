<template>
  <div class="train">
    <div class="option">
      <div id="step-1">
        <h4>数据集选择</h4>
      </div>
      <div id="step-2">
        <h4>参数设置</h4>
        <el-card class="box-card">
          <div v-for="o in 4" :key="o" class="text item">
            {{'列表内容 ' + o }}
          </div>
        </el-card>
      </div>
      <div id="step-3">
        <h4>模型训练</h4>
      </div>
    </div>
    <div class="steps">
      <div class="step-content">
        <div class="step-1 step"><a href="#step-1">1</a></div>
        <div class="step-text">数据集选择</div>
      </div>
      <div class="line"></div>
      <div class="step-content">
        <div class="step-2 step"><a href="#step-2">2</a></div>
        <div class="step-text">参数设置</div>
      </div>
      <div class="line"></div>
      <div class="step-content">
        <div class="step-3 step"><a href="#step-3">3</a></div>
        <div class="step-text">模型训练</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Reconstruction'
}
</script>

<style lang="scss" scoped>
.train {
  position: relative;
  width: 100%;
  height: 100%;
  margin-top: 16px;
  display: flex;
  .option {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    #step-1 {
    }
    #step-2 {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-top: 16px;
      .box-card {
        width: 400px;
        .el-card__body {
          .text {
            text-align: left;
          }
        }
      }
      .text {
        font-size: 14px;
      }
      .item {
        margin-bottom: 18px;
      }
    }
    #step-3 {
      margin-top: 16px;
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
      /*.step:active {*/
      /*  border: 1px solid skyblue;*/
      /*}*/
      .step-text {

      }
    }
    .line {
      width: 1px;
      height: 50px;
      background-color: #798798;
      margin-left: 15px;
    }
    .step-1 {}
  }
}
</style>
