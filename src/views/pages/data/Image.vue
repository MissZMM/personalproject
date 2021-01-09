<template>
  <div class="image">
    <el-table
      :data="tableData"
      width="650px">
      <el-table-column type="expand">
        <img src="../../../assets/set5/baby_GT.png" width="100px" class="img-demo">
        <img src="../../../assets/set5/bird_GT.png" width="100px" class="img-demo">
        <img src="../../../assets/set5/butterfly_GT.png" width="100px" class="img-demo">
        <img src="../../../assets/set5/head_GT.png" width="100px" class="img-demo">
        <img src="../../../assets/set5/woman_GT.png" width="100px">
      </el-table-column>
      <el-table-column
        label="数据集编号"
        prop="id"
        width="90px">
      </el-table-column>
      <el-table-column
        label="数据集名称"
        prop="name"
        width="90px">
      </el-table-column>
      <el-table-column
        label="上传日期"
        prop="date"
        width="120px">
      </el-table-column>
      <el-table-column
        label="数据集描述"
        prop="desc"
        width="340px">
      </el-table-column>
      <el-table-column
        align="right">
        <template slot="header">
          <el-button
            size="mini" type="primary">上传数据集</el-button>
        </template>
        <template>
          <el-button
            size="mini">编辑</el-button>
          <el-button
            size="mini"
            type="danger">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
    name: 'ImageData',
    data () {
        return {
            tableData: [
                {
                    id: '01',
                    name: 'set5',
                    date: '2020年1月7日',
                    desc: '用于图像恢复的高质量图像数据集，包含800张训练图像，100张验证图像以及100张测试数据集。',
                    url: []
                },
                {
                    id: '02',
                    name: 'Set5',
                    date: '2020年1月7日',
                    desc: '由5张图片组成，是较为广泛使用的超分辨率测试数据集。',
                    url: ['../../../assets/set5/baby_GT.png', '../../../assets/set5/bird_GT.png', '../../../assets/set5/butterfly_GT.png', '../../../assets/set5/head_GT.png', '../../../assets/set5/woman_GT.png']
                },
                {
                    id: '03',
                    name: 'Set14',
                    date: '2020年1月7日',
                    desc: '由4张图片组成，是较为广泛使用的超分辨率测试数据集。',
                    url: []
                }
            ]
        }
    },
    created () {
        // this.getData();
    },
    methods: {
        // getData () {
        //     this.$axios({ method: 'post', url: '/image/imageData', params: {} }).then(res => {
        //         console.log(res)
        //     }).catch((e) => {
        //         console.log(e)
        //     })
        // }
    }
}
</script>

<style lang="scss" scoped>
.image {
  .el-table {
    margin-top: 16px;
    width: 850px!important;
    .img-demo {
      margin-right: 5px;
    }
  }
}
</style>
