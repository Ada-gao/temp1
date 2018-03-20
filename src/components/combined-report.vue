<template>
	<div style="height: 100%;">
		<x-header :left-options="{backText: ''}">推荐产品</x-header>
		<div class="wrapper">
      <tab :animate="false" :line-width=2 active-color="#333" bar-active-color='#0083c5' v-model="index">
        <tab-item class="vux-center" :selected="demo2 === item" v-for="(item, index) in titleList" @on-item-click="onItemClick" :key="index">{{item}}</tab-item>
      </tab>
      <!--<swiper v-model="index" height="100px" :show-dots="false">-->
        <!--<swiper-item v-for="(item, index) in contentList" :key="index">-->
          <!--<div class="tab-swiper vux-center">{{item}} Container</div>-->
        <!--</swiper-item>-->
      <!--</swiper>-->
      <ul class="wrapper-ul">
        <li v-for="(item, contentIndex) in contentList" v-show="contentIndex == index" :key="contentIndex">
          <div>
          	<div class="content1">
          		<div :id="item.chartName[0]" style="width: 100%; height: 250px;"></div>
          	</div>
          	<div class="space"></div>
          	<div class="content2">
          		<div :id="item.chartName[1]" style="width: 100%; height: 350px;"></div>
          	</div>
          	<div class="space"></div>
          	<div class="content3">
          		<div :id="item.chartName[2]" style="width: 100%; height: 400px;"></div>
          	</div>
          	<div class="space" style="height: 50px;"></div>
          </div>
        </li>
      </ul>
		</div>
    <footer-button>
      <grid-item v-for="item in footerLink" :key="item.title">
        <router-link class="grid-center" :to="item.toLink">{{item.title}}</router-link>
      </grid-item>
    </footer-button>
	</div>
</template>

<script>
import { XHeader, GridItem, Tab, TabItem, Swiper, SwiperItem } from 'vux'
import FooterButton from 'base/footer/footer'
import echarts from 'echarts'
import 'echarts-gl'

export default {
  components: {
    XHeader,
    FooterButton,
    GridItem,
    Tab,
    TabItem,
    Swiper,
    SwiperItem
  },
  data () {
    return {
      footerLink: [{
        title: '更精准配置',
        toLink: '/riskRating'
      }, {
        title: '查看投资报告书',
        toLink: '/investmentReport'
      }],
      titleList: ['原有投资报告', '推荐投资报告', '标准投资报告'],
      contentList: [
        {
        	chartName: ['contChartPie1', 'contChartScatter1', 'contChartBar1'],
        	chartData: {
        		chart3: [
        			{
        				desc: '年金',
        				guaranteeGap: 30,
        				existInsured: 5
        			},
        			{
        				desc: '定期寿险',
        				guaranteeGap: 1100,
        				existInsured: 500
        			},
        			{
        				desc: '重疾保险',
        				guaranteeGap: 160,
        				existInsured: 160
        			},
        			{
        				desc: '高额医疗',
        				guaranteeGap: 125,
        				existInsured: 125
        			},
        			{
        				desc: '终身寿险',
        				guaranteeGap: 125,
        				existInsured: 0
        			}
        		]
        	}
        }, {
        	chartName: ['contChartPie2', 'contChartScatter2', 'contChartBar2'],
        	chartData: {
        		chart3: {
        			annuity: {
        				desc: '年金',
        				guaranteeGap: 30,
        				existInsured: 20
        			},
        			termInsurance: {
        				desc: '定期寿险',
        				guaranteeGap: 1100,
        				existInsured: 500
        			},
        			stricken: {
        				desc: '重疾保险',
        				guaranteeGap: 160,
        				existInsured: 160
        			},
        			termInsurance: {
        				desc: '高额医疗',
        				guaranteeGap: 125,
        				existInsured: 125
        			},
        			stricken: {
        				desc: '终身寿险',
        				guaranteeGap: 125,
        				existInsured: 0
        			}
        		}
        	}
        }, {
        	chartName: ['contChartPie3', 'contChartScatter3', 'contChartBar3'],
        	chartData: {
        		chart3: {
        			annuity: {
        				desc: '年金',
        				guaranteeGap: 30,
        				existInsured: 5
        			},
        			termInsurance: {
        				desc: '定期寿险',
        				guaranteeGap: 1100,
        				existInsured: 500
        			},
        			stricken: {
        				desc: '重疾保险',
        				guaranteeGap: 160,
        				existInsured: 160
        			},
        			termInsurance: {
        				desc: '高额医疗',
        				guaranteeGap: 125,
        				existInsured: 125
        			},
        			stricken: {
        				desc: '终身寿险',
        				guaranteeGap: 125,
        				existInsured: 0
        			}
        		}
        	}
        }
      ],
      index: 0,
      demo2: '原有投资报告',
      chartName: 'contChartPie1'
    }
  },
  mounted () {
  	this.drawChartPie1()
  	this.drawChartScatter1()
  	this.drawChartBar1()
  	this._setWrapperHeight()
  },
  methods: {
    onItemClick (index) {
    	let idx = index + 1
    	let contChart = document.getElementById(`contChartPie${index}`)
    	let cont = document.querySelector(`#contChartPie${idx}`)
      this.drawChartPie1(idx)
      this.drawChartScatter1(idx)
      this.drawChartBar1(idx)
    },
    drawChartPie1 (index = 1) {
    	let chartPie = document.querySelector(`#contChartPie${index}`)
    	chartPie.style.width = document.body.clientWidth + 'px'
    	let contChart1 = echarts.init(chartPie)
    	let options1 = {
    		title : {
          text: '投资饼状图',
          x:'left',
          textStyle: {
          	color: '#333',
          	fontSize: 14,
          	fontWeight: '400'
          }
        },
        legend: {
          orient: 'vertical',
          right: 40,
          top: 50,
          bottom: 20,
          // data: ['理财金额', '固收金额', '二级市场金额', '另类金额'],
          data: [
            {name: '理财金额', icon: 'circle'},
            {name: '固收金额', icon: 'circle'},
            {name: '二级市场金额', icon: 'circle'},
            {name: '另类金额', icon: 'circle'},
          ]
        },
        grid: {
          left: '15%',
          top: '10%',
          containLabel: true
        },
        series: [
          {
            name: '投资',
            type: 'pie',
            radius: '80%',
            center: ['30%', '60%'],
            label: {
            	normal: {
            		position: 'inner'
            	}
            },
            data: [
              {value:125, name:'理财金额'},
              {value:200, name:'固收金额'},
              {value:25, name:'二级市场金额'},
              {value:150, name:'另类金额'}
            ],
            itemStyle: {
            	normal: {
            		label: {
            			show: 'true',
            			formatter: '{d}%'
            		}
            	}
            }
          }
        ],
        color: ['#e86361', '#ffbe00', '#9370DB', '#52aad8']
    	}
    	contChart1.setOption(options1)
    },
    getDate () {
    	let legendData = []
    	let seriesData = []
    	let projectList = ['理财金额', '固收金额', '二级市场金额', '另类金额']
    	let moneyList = ['125', '200', '25', '150']
    	let arr = []
      	for(let i = 0; i < moneyList.length; i ++) {
      		let pro = projectList[i]
          let mon = moneyList[i]
          let proMon = pro +'  '+ mon + '万'
          arr.push(proMon)
       }
    },
    drawChartScatter1 (index = 1) {
    	let contChart2 = echarts.init(document.getElementById(`contChartScatter${index}`))
      let options2 = {
      	title : {
          text: '投资分析图',
          x:'left',
          top: '10px',
          textStyle: {
          	color: '#333',
          	fontSize: 14,
          	fontWeight: '400'
          }
        },
        grid3D: {
        	axisTick: {
        		show: false
        	},
        	axisLabel: {
        		margin: 3
        	},
          left: '5%',
          top: '-15',
          right: '5%',
          containLabel: true
        },
        xAxis3D: {
            type: 'value',
            name: '周期',
            nameGap: 13,
            axisLine: {
              lineStyle: {
                color: '#9370DB'
              }
            },
            nameTextStyle: {
              color: '#333'
            },
            min: 0,
            max: 8,
        },
        zAxis3D: {
        	type: 'value',
        	name: '收益率',
        	nameGap: 13,
          axisLine: {
            lineStyle: {
              color: '#e86361'
            }
          },
          nameTextStyle: {
            color: '#333'
          },
          min: 0,
          max: 20,

        },
        yAxis3D: {
        	type: 'value',
        	name: '波动率',
        	nameGap: 13,
        	axisLine: {
            lineStyle: {
              color: '#0083c5'
            }
          },
          nameTextStyle: {
            color: '#333'
          },
          min: 0,
          max: 40,

        },
        dataset: {
//        dimensions: [
//          'Income',
//          'Life Expectancy',
//          'Population',
//          'Country',
//          {name: 'Year', type: 'ordinal'}
//        ],
          source: [
            [2, 2, 8], [3, 40, 15], [2, 30, 10], [3, 15, 12]
          ]
        },
        series: [
          {
            type: 'scatter3D',
            symbolSize: 15,
            encode: {
              x: 'Country',
              y: 'Life Expectancy',
              z: 'Income',
              tooltip: [0, 1, 2, 3, 4]
            }
          }
        ]
      };
    	contChart2.setOption(options2)
    },
    drawChartBar1 (index = 1) {
    	let _this = this
   	  let contChart3 = echarts.init(document.getElementById(`contChartBar${index}`))
   	  let options3 = {
        grid: {
          left: '15%',
          top: '10%',
          containLabel: true
        },
        tooltip: {
        	show: true,
        	trigger: 'axis',
        	formatter: function (params){
//      		console.log(params)
           	let span = ''
           	let data = _this.contentList[index - 1].chartData.chart3
//         	console.log(data)
//         	console.log(params)
           	params.forEach((val, i) => {
           		for(let key in val) {
           			if(val['seriesName'] === '保障缺口') {
           				if(val['axisValue'] === data[i]['desc']) {
           					console.log('i: ' + i)
//         					console.log(val)
           					span = `${data[i]['guaranteeGap']}万`
           				}
//         			} else if(val['seriesName'] === '已有保额') {
//         				if(val['axisValue'] === data[idx]['desc']) {
//         					span = `${data[idx]['existInsured']}万`
//         				}
           			}
           		}
           	})
            return span
        	}
        },
        legend: {
        	data: ['保障缺口', '已有保额'],
        	bottom: '10%',
        	itemWidth: 10,
        	itemHeight: 10,
        	itemGap: 50
        },
        xAxis: {
          type: 'value',
          min: 0,
          max: 100,
          boundaryGap: [0],
          axisLine: {
            lineStyle: {
              color: '#ccc'
            }
          },
        	splitLine: {
        		show: false
        	},
        	axisLabel: {
            show: false
          },
          axisTick: {
          	show: false
          }
        },
        yAxis: {
          type: 'category',
          inverse: true,
          data: ['年金', '定期寿险', '重疾保险', '高额医疗', '终身寿险'],
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
          name: '保障缺口',
          type: 'bar',
          data: [100, 100, 100, 100, 100],
          barWidth: 8,
          itemStyle: {
            normal: {
              color: '#ffbe00',
              barBorderRadius: 10,
              label: {
                show: false,
                position: 'right',
                offset: [-25, -20],
                formatter: function(params) {
                },
                color: '#333',
                backgroundColor: '#ccc',
                padding: 5
              }
            }
          }
        }, {
          name: '已有保额',
          type: 'bar',
          data: [14, 31, 100, 100, 0],
          barWidth: 8,
          barGap: '-100%',
          itemStyle: {
            normal: {
              color: '#0083c5',
              barBorderRadius: 10,
              label: {
                show: false,
                position: 'right',
                offset: [-25, -20],
                formatter: function(params) {
                	console.log(params)
                	let span = ''
//              	params.forEach((val, index) => {
//              		span += val['value']
//              	})
//              	let data = _this.contentList[index - 1].chartData.existInsured
//              	console.log(data)
//              	data.forEach((val, index) => {
//              		span += `${val}万`
//              	})
//              	console.log(span)
//              	return span
                },
                color: '#333',
                backgroundColor: '#ccc',
                padding: 5
              }
            }
          }
        }]
   	  }
   	  contChart3.setOption(options3)
    },
    _setWrapperHeight () {
      let height1 = document.getElementsByClassName('vux-header')[0].clientHeight
      let height2 = document.getElementsByClassName('vux-tab-item')[0].clientHeight
      let height3 = document.getElementsByClassName('weui-grid')[0].clientHeight
      let wrapperUl = document.getElementsByClassName('wrapper-ul')[0]
      let heightBody = document.body.clientHeight
      let maxHeight = heightBody - height1 - height2 - height3
      wrapperUl.style.height = maxHeight + 'px'
    },
//  _changeData (a, b) {
//  	a.forEach((val, index) => {
//      let span = ''
//  		for(let key in val) {
//  			span += b[index]
//  			if(key === 'seriesName') {
//  				span += '`${val[key}:`'
//  			}
//  		}
//  	})
//  }
  }
}
</script>

<style scoped lang="less">
body {
	/*background-color: #eee;*/
}
.space {
	width: 100%;
	height: 10px;
	background-color: #eee;
}
.wrapper-ul {
	overflow: auto;
}
/*.content1,
.content2,
.content3 {
	margin-top: 10px;
}*/
</style>
