<template>
  <div class="image">
    <el-table
      :data="tableData"
      width="650px"
      :fit="true">
      <el-table-column
        label="模型编号"
        prop="id"
        width="80px">
      </el-table-column>
      <el-table-column
        label="模型名称"
        prop="name">
      </el-table-column>
      <el-table-column
        label="上传日期"
        prop="date"
        width="120px">
      </el-table-column>
      <el-table-column
        label="模型描述"
        prop="desc">
      </el-table-column>
      <el-table-column
        align="right">
        <template slot="header">
          <el-button
            size="mini" type="primary">添加本地模型</el-button>
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
    name: 'Model',
    data () {
        return {
            tableData: [{
                id: '01',
                name: 'SRCNN',
                date: '2020年1月4日',
                desc: 'SRCNN的网络结构仅仅用了三个卷积层，是深度学习用在超分辨率重建上的开山之作。'
            }, {
                id: '02',
                name: 'VDSR',
                date: '2020年1月4日',
                desc: '网络受VGG-net的启发，提出了一种高度精确的单图像超分辨率方法，使用了非常深的卷积网络对图像进行超分辨率重构。'
            }, {
                id: '03',
                name: '基于残差学习的图像超分辨率方法',
                date: '2020年1月4日',
                desc: '在FSRCNN和VDSR等方法的基础上，提出的一种基于残差学习的图像超分辨率重构方法。'
            }, {
                id: '04',
                name: '基于注意力机制的图像超分辨率方法',
                date: '2020年1月4日',
                desc: '在基于残差学习的图像超分辨率方法的基础上使用注意力机制模型，通过对各通道之间的权重进行分配，在计算能力有限的情况下，将更多的计算资源分配给任务的核心，强化图像特征的高频信息，从而协助图像超分辨率网络完成对图像高频信息的提取和恢复。'
            }, {
                id: '05',
                name: 'model-1',
                date: '2020年1月10日',
                desc: ''
            }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
