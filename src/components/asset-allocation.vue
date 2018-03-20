	<template>
	<div>
		<x-header :left-options="{backText: ''}">资产配置</x-header>
		<div class="investor" ref="investor">
			<p style="font-size: 20px;">大卫史文森</p>
			<p>专业投资者&nbsp;&nbsp;&nbsp;&nbsp;稳健型</p>
			<button>风险重评</button>
		</div>
		<div class="wrapper" style="overflow: auto;">
			<div class="echarts-bar" ref="echartWrapper">
				<div v-show="isChecked" id="myChart1" ref="myChart1"></div>
				<div v-show="!isChecked" id="myChart2" ref="myChart2"></div>
				<div class="toggle-button">
					<button class="btn" :class="{'btn-checked': isChecked}" @click="toggleShowChart(1)" style="border-right: none;">金额</button>
					<button class="btn" :class="{'btn-checked': !isChecked}" @click="toggleShowChart(2)">比例</button>
				</div>
				<div class="lenged">
					<div class="lenged-item">
						<i class="original-color"></i>
						原有投资比例&nbsp;&nbsp;&nbsp;&nbsp;得分: {{originalScore}}分
					</div>
					<div class="lenged-item">
						<i class="ideal-color"></i>
						理想投资比例&nbsp;&nbsp;&nbsp;&nbsp;得分: {{idealScore}}分
					</div>
				</div>
			</div>
			<div class="score">
				<p>得分总结：新增的投资会改善您资产的<span>收益性、流动性、波动性</span>。</p>
				<div class="add-invest">
					<span>新增投资比例：</span>
					<inline-x-number v-bind:min="minNum" width="100px" v-bind:step="stepNum" v-bind:value="inputVal" @on-change="change"></inline-x-number>
					<span>万</span>
					<div class="divide-line"></div>
					<p>得分：<span class="text-plus">{{investScore}}</span>分
						<i class="icon-help_outline" style="font-size: 18px;margin-left: 5px;color: #ccc;"></i>
					</p>
				</div>
			</div>
		</div>
		<footer-button>
			<grid-item v-for="item in footerLink" :key="item.title">
        <router-link class="grid-center" :to="item.toLink">{{item.title}}</router-link>
      </grid-item>
		</footer-button>
	</div>
</template>

<script>
import { XHeader, InlineXNumber, Grid, GridItem } from 'vux'
import Recommend from './recommend'
import FooterButton from 'base/footer/footer'
import echarts from 'echarts'

export default {
  components: {
    XHeader,
    InlineXNumber,
    Grid,
    GridItem,
    Recommend,
    FooterButton
  },
  props: {
    min: {
      type: Number
    },
    step: {
      type: Number
    }
  },
  data () {
    return {
      isChecked: true,
      originalScore: 60,
      idealScore: 100,
      investScore: 69,
      minNum: 0,
      stepNum: 100,
      inputVal: 0,
      footerLink: [{
        title: '更精准配置',
        toLink: '/riskRating'
      }, {
        title: '查看推荐产品',
        toLink: '/recommend'
      }]
    }
  },
  mounted () {
    this._drawAsset1()
    this._setWrapperHeight()
    window.addEventListener('resize', () => {
      this._drawAsset1()
      this._drawAsset2()
      this._setWrapperHeight()
    })
  },
  methods: {
    _drawAsset1 () {
      let myChart1 = echarts.init(document.getElementById('myChart1'))
      let options1 = {
        grid: {
          left: '15%',
          top: '10%',
          containLabel: true
        },
        xAxis: {
          type: 'value',
          boundaryGap: [0],
          axisLine: {
            lineStyle: {
              color: '#ccc'
            }
          }
        },
        yAxis: {
          type: 'category',
          inverse: true,
          data: ['理财金额', '固收金额', '二级市场金额', '另类投资金额'],
          axisTick: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: '#ccc'
            }
          },
          axisLabel: {
            color: '#333'
          }
        },
        series: [{
          name: '原有投资比例  得分:60分',
          type: 'bar',
          data: [125, 200, 25, 150],
          barWidth: 8,
          itemStyle: {
            normal: {
              color: '#ffbe00',
              barBorderRadius: 10,
              label: {
                show: true,
                position: 'right',
                offset: [-25, -20],
                formatter: '{c}万',
                color: '#333',
                backgroundColor: '#ccc',
                padding: 5
              }
            }
          }
        }, {
          name: '理想投资比例  得分:100分',
          type: 'bar',
          data: [125, 125, 125, 125],
          barWidth: 8,
          itemStyle: {
            normal: {
              color: '#0083c5',
              barBorderRadius: 10
            }
          }
        }]
      }
      myChart1.setOption(options1)
    },
    _drawAsset2 () {
      this._setChartWidth()
      let myChart2 = echarts.init(document.getElementById('myChart2'))
      let options2 = {
      // legend: {
        // data: ['原有投资比例  得分:60分', '理想投资比例  得分:100分'],
        // orient: 'vertical',
        // bottom: 20,
        // left: 140,
        // itemWidth: 10,
        // itemHeight: 10
      // },
        grid: {
          left: '15%',
          top: '10%',
          containLabel: true,
          right: '10%'
        },
        xAxis: {
          type: 'value',
          boundaryGap: [0],
          axisLine: {
            lineStyle: {
              color: '#ccc'
            }
          }
        },
        yAxis: {
          type: 'category',
          inverse: true,
          data: ['理财金额', '固收金额', '二级市场金额', '另类投资金额'],
          axisTick: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: '#ccc'
            }
          },
          axisLabel: {
            color: '#333'
          }
        },
        series: [{
          // name: '原有投资比例  得分:60分',
          type: 'bar',
          data: [25, 40, 5, 30],
          barWidth: 8,
          itemStyle: {
            normal: {
              color: '#ffbe00',
              barBorderRadius: 10,
              label: {
                show: true,
                position: 'right',
                offset: [-25, -20],
                formatter: '{c}%',
                color: '#333',
                backgroundColor: '#ccc',
                padding: 5
              }
            }
          }
        }, {
          name: '理想投资比例  得分:100分',
          type: 'bar',
          data: [25, 25, 25, 25],
          barWidth: 8,
          itemStyle: {
            normal: {
              color: '#0083c5',
              barBorderRadius: 10
            }
          }
        }]
      }
      myChart2.setOption(options2)
    },
    toggleShowChart (num) {
      num === 1 ? this.isChecked = true : this.isChecked = false
      this._drawAsset2()
    },
    _setChartWidth () {
      let myChartBar1 = document.getElementById('myChart1')
      let myChartBar2 = document.getElementById('myChart2')
      let width = document.body.clientWidth
      myChartBar1.style.width = width + 'px'
      myChartBar2.style.width = width + 'px'
    },
    change (val) {
      this.investScore++
    },
    _setWrapperHeight () {
      let height1 = document.getElementsByClassName('vux-header')[0].clientHeight
      let height2 = this.$refs.investor.clientHeight
      let height3 = document.getElementsByClassName('weui-grid')[0].clientHeight
      let wrapper = document.getElementsByClassName('wrapper')[0]
      let heightBody = document.body.clientHeight
      let maxHeight = heightBody - height1 - height2 - height3
      wrapper.style.height = maxHeight + 'px'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
/*@import '../common/style/theme.less';*/
.investor {
	text-align: left;
	padding: 10px;
	background-color: #eee;
	position: relative;
	p {
		margin-top: 10px;
		margin-bottom: 0;
	}
	p:nth-child(1) {
		margin-top: 0;
	}
	button {
		position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    background: #FFFFFF;
    border: 1px solid #ccc;
	}
}
.echarts-bar {
	position: relative;
	/*width: 100%;*/
	.toggle-button {
		font-size: 0;
		position: absolute;
		top: 10px;
		right: 10px;
	}
	.btn {
		border: 1px solid #ccc;
		outline: none;
		background-color: #fff;
	}
	.btn-checked {
		background-color: #0083c5;
		color: #fff;
	}
	#myChart2, #myChart1 {
		width: 100%;
		height: 300px;
	}
	.lenged {
		position: absolute;
    bottom: 30px;
    font-size: 12px;
    left: 35%;
    text-align: left;
    .lenged-item {
      &:nth-child(1) {
        margin-bottom: 10px;
      }
      i {
        display: inline-block;
        width: 10px;
        height: 10px;
        border-radius: 3px;
        margin-right: 5px;
      }
      .original-color {
        background-color: orange;
      }
      .ideal-color {
        background-color: #0083C5;
      }
    }
	}
}
.score {
	border-top: 1px solid orange;
	background-color: blanchedalmond;
	padding: 10px;
	padding-bottom: 30px;
	> p {
		margin-top: 15px;
		text-align: left;
		font-size: 12px;
	}
	.add-invest {
		border: 1px solid orange;
		background-color: #fff;
		border-radius: 5px;
		padding: 20px;
		white-space: nowrap;
		/*.divide-line {
			width: 100%;
			background-color: #ccc;
			height: 1px;
			margin-top: 20px;
			margin-bottom: 20px;
		}*/
		> span {
			display: inline-block;
			vertical-align: super;
		}
		.x-number {
			a {
				background-color: #236282 !important;
        border-radius: 5px !important;
        > svg {
          fill: #fff;
        }
			}
			input {
				background-color: #ccc;
			}
		}
		.vux-inline-x-number {
			.vux-number-selector-sub {
				background-color: #236282 !important;
        border-radius: 5px !important;
			}
			.vux-number-selector {
				background-color: #236282 !important;
        border-radius: 5px !important;
        svg {
          fill: #fff;
        }
			}
			input {
				background-color: #ccc;
				width: 100px !important;
			}
		}
		.text-plus {
			color: #f04155;
			font-size: 25px;
			margin: 0 5px;
		}
	}
}
/*公共分割线*/
.divide-line {
	width: 100%;
	background-color: #ccc;
	height: 1px;
	margin-top: 20px;
	margin-bottom: 20px;
}
</style>
