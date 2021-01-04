<template>
    <div class="analysis">
      <div class="statistic">
          <div class="card">
            <div class="card-head">
              <h6>近7天数据集变化</h6>
              <el-tooltip class="item" effect="dark" content="近30天数据集增减情况" placement="top">
                <i class="el-icon-question"></i>
              </el-tooltip>
            </div>
            <div class="card-body">
              <div class="num">+6</div>
              <div ref="dataChart" class="Chart"></div>
            </div>
          </div>
          <div class="card">
            <div class="card-head">
              <h6>近7天模型数目变化</h6>
              <el-tooltip class="item" effect="dark" content="近30天模型数目增减情况" placement="top">
                <i class="el-icon-question"></i>
              </el-tooltip>
            </div>
            <div class="card-body">
              <div class="num">+2</div>
              <div ref="modelChart" class="Chart"></div>
            </div>
          </div>
        <div class="card">
          <div class="card-head">
            <h6>可用内存</h6>
            <el-tooltip class="item" effect="dark" content="当前模型训练内存占用比" placement="top">
              <i class="el-icon-question"></i>
            </el-tooltip>
          </div>
          <div class="card-body">
            <div class="num">14%</div>
            <div ref="cpuChart" class="Chart"></div>
          </div>
        </div>
      </div>
      <div class="line-chart">
        <div class="card">
          <div class="card-head">
            <h6>峰值信噪比</h6>
            <el-tooltip class="item" effect="dark" content="各模型的平均峰值信噪比" placement="top">
              <i class="el-icon-question"></i>
            </el-tooltip>
          </div>
          <div ref="psnr" id="pnsr" class="card-body"></div>
        </div>
        <div class="card">
          <div class="card-head">
            <h6>结构相似性</h6>
            <el-tooltip class="item" effect="dark" content="各模型的平均结构相似性" placement="top">
              <i class="el-icon-question"></i>
            </el-tooltip>
          </div>
          <div ref="ssim" id="ssim" class="card-body"></div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    name: 'analysis',
    mounted () {
        this.getdataChart();
        this.getmodelChart();
        this.getCPUPercent();
        this.getPSNR();
        this.getSSIM();
    },
    methods: {
        getCPUPercent () {
            const chart = require('echarts')
            const mychart = chart.init(this.$refs.cpuChart);
            mychart.setOption({
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b}: {d}%'
                },
                // legend: {
                //     orient: 'vertical',
                //     left: 10,
                //     data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
                // },
                series: [
                    {
                        name: '访问来源',
                        type: 'pie',
                        radius: ['50%', '90%'],
                        avoidLabelOverlap: false,
                        label: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            label: {
                                show: true,
                                fontSize: '12',
                                fontWeight: 'bold'
                            }
                        },
                        labelLine: {
                            show: false
                        },
                        data: [
                            { value: 20, name: '本地已用' },
                            { value: 66, name: '模型训练' },
                            { value: 14, name: '剩余可用' }
                        ]
                    }
                ]
            })
        },
        getPSNR () {
            const chart = require('echarts')
            const mychart = chart.init(this.$refs.psnr);
            mychart.setOption({
                xAxis: {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {
                    type: 'value'
                },
                series: [{
                    data: [820, 932, 901, 934, 1290, 1330, 1320],
                    type: 'line'
                }],
                grid: {
                    top: 25,
                    bottom: 30
                }
            });
        },
        getSSIM () {
            const chart = require('echarts')
            const mychart = chart.init(this.$refs.ssim);
            mychart.setOption({
                xAxis: {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {
                    type: 'value'
                },
                series: [{
                    data: [820, 932, 901, 934, 1290, 1330, 1320],
                    type: 'line'
                }],
                grid: {
                    top: 25,
                    bottom: 30
                }
            });
        },
        getmodelChart () {
            const chart = require('echarts')
            const mychart = chart.init(this.$refs.modelChart);
            // const labelRight = {
            //     position: 'right'
            // };
            mychart.setOption({
                // title: {
                //     text: '交错正负轴标签',
                //     subtext: 'From ExcelHome',
                //     sublink: 'http://e.weibo.com/1341556070/AjwF2AgQm'
                // },
                // tooltip: {
                //     trigger: 'axis',
                //     axisPointer: {
                //         type: 'shadow'
                //     }
                // },
                grid: {
                    top: 20,
                    bottom: 5
                },
                xAxis: {
                    type: 'value',
                    position: 'top',
                    splitLine: {
                        show: false
                    }
                    // axisTick: {
                    //     show: false
                    // }
                    // axisLabel: {
                    //     show: false
                    // },
                    // axisLine: {
                    //     show: false
                    // }
                },
                yAxis: {
                    type: 'category',
                    axisLine: { show: true },
                    axisLabel: { show: false },
                    axisTick: { show: false },
                    splitLine: { show: false },
                    data: ['1', '-1', '0', '1', '0', '0', '1']
                },
                series: [
                    {
                        name: '生活费',
                        type: 'bar',
                        stack: '总量',
                        label: {
                            show: true,
                            formatter: '{b}'
                        },
                        data: [
                            1,
                            -1,
                            0,
                            1,
                            0,
                            0,
                            1
                        ]
                    }
                ]
            })
        },
        getdataChart () {
            const chart = require('echarts')
            const mychart = chart.init(this.$refs.dataChart);
            mychart.setOption({
                xAxis: {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    splitLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        show: false
                    },
                    axisLine: {
                        show: false
                    }
                },
                yAxis: {
                    type: 'value',
                    splitLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        show: false
                    },
                    axisLine: {
                        show: false
                    }
                },
                grid: {
                    top: 20,
                    bottom: 17
                },
                series: [{
                    data: [2, 4, 3, 5, 6, 6, 8],
                    type: 'line',
                    smooth: true,
                    symbol: 'none'
                }]
            })
        }
    }
}
</script>

<style lang="scss" scoped>
  .analysis {
    position: relative;
    width: 100%;
    .statistic {
      display: flex;
      width: 100%;
      justify-content: space-between;
      margin-top: 16px;
      .card {
        position: relative;
        width: 32%;
        height: 150px;
        background-color: #ffffff;
        border-radius: 8px;
        .card-head {
          width: 100%;
          height: 50px;
          padding: 16px 20px 0;
          box-sizing: border-box;
          text-align: left;
          line-height: 34px;
          display: flex;
          h6 {
            font-size: 14px;
            font-weight: 600;
            margin-right: 8px;
          }
          i {
            line-height: 34px;
          }
        }
        .card-body {
          width: 100%;
          height: calc(100% - 50px);
          box-sizing: border-box;
          padding: 0 20px 16px;
          display: flex;
          .num {
            width: 30%;
            height: 100%;
            color: #5e6e82;
            font-family: Poppins,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
            font-size: 24px;
            line-height: 80px;
          }
          .Chart {
            width: 70%;
            height: 100%;
          }
        }
      }
    }
    .line-chart {
      display: flex;
      width: 100%;
      margin-top: 16px;
      height: 350px;
      justify-content: space-between;
      .card {
        width: 49%;
        height: 100%;
        background-color: #fff;
        border-radius: 8px;
        .card-head {
          width: 100%;
          height: 50px;
          padding: 16px 20px 0;
          box-sizing: border-box;
          text-align: left;
          line-height: 34px;
          display: flex;
          h6 {
            font-size: 14px;
            font-weight: 600;
            margin-right: 8px;
          }
          i {
            line-height: 34px;
          }
        }
        .card-body {
          width: 100%;
          height: calc(100% - 50px);
          padding: 0 20px 16px;
          box-sizing: border-box;
        }
      }
    }
  }
</style>
