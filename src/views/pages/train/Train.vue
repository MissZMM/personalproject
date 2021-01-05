<template>
  <div class="train">
    <div class="option">
      <div id="step-1">
        <h4>参数设置</h4>
        <el-card class="box-card">
          <el-form ref="form" :model="form" label-width="90px">
            <el-form-item label="任务名称">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="放大倍数">
              <el-radio-group v-model="form.scale">
                <el-radio :label="2">2</el-radio>
                <el-radio :label="3">3</el-radio>
                <el-radio :label="4">4</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="模型压缩">
              <el-switch v-model="form.compress"></el-switch>
            </el-form-item>
            <el-form-item label="学习率">
              <el-input v-model="form.rate"></el-input>
            </el-form-item>
            <el-form-item label="数据集选择">
              <el-input v-model="form.desc"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">训练</el-button>
              <el-button>重置</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Reconstruction',
    data () {
        return {
            form: {
                name: '',
                scale: '2',
                compress: false,
                rate: ''
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.train {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  .option {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    #step-1 {
    }
    #step-1 {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-top: 16px;
      .box-card {
        width: 600px;
        border-radius: 8px;
        margin-top: 8px;
        .el-card__body {
          .text {
            text-align: left;
          }
        }
        .el-form {
          .el-form-item__content {
            text-align: left!important;
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
