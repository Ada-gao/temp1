<template>
	<div>
		<x-header :left-options="{backText: ''}">投资报告书
			<router-link slot="right" to="/">首页
				<i class="icon-home" style="margin-left: 5px;font-size: 18px;"></i>
				<i class="fa fa-home"></i>
			</router-link>
		</x-header>
		<div class="investor" ref="investor">
			<p style="font-size: 20px;">大卫史文森</p>
			<p>专业投资者&nbsp;&nbsp;&nbsp;&nbsp;稳健型</p>
		</div>
		<group>
      <cell title="报告书" value="下载" @click.native="onClick"></cell>
      <!--<cell :title="$t('Money')" @click.native="onClick" :is-loading="!money" :value="money"></cell>-->
    </group>
    <rotate-radius></rotate-radius>
	</div>
</template>

<script>
import { XHeader, Group, Cell } from 'vux'
import echarts from 'echarts'
import RotateRadius from 'base/rotate-button/rotate-button'

export default {
  components: {
    XHeader,
    Group,
    Cell,
    RotateRadius
  },
  mounted () {
//	this.draw()
  },
  methods: {
  	draw () {
  		let myChart = echarts.init(document.getElementById('myChart'))
      let option = {  
        title: {  
	        x: 'center',  
	        text: 'Age',  
	        subtext: 'Rainbow bar for Age',  
	        link: 'http://echarts.baidu.com/doc/example.html'  
		    },  
		    tooltip: {  
		        trigger: 'item',  
		        formatter: '{b}:\n{c}%'  
		    },  
		    toolbox: {  
		    	show: true,
		        feature: {  
		            dataView: {show: true, readOnly: false},  
		            restore: {show: true},  
		            saveAsImage: {show: true}  
		        }  
		    },  
		    calculable: true,  
		    grid: {  
		        borderWidth: 0,  
		        y: 80,  
		        y2: 60
		    },  
		    xAxis: [  
		    		{  
		            type: 'value',  
		            axisLabel: {  
		                  show: true,  
		                  interval: 'auto',  
		                  formatter: '{value}'  
		                },  
		            show: false  
		        }  
 
		    ],  
		    yAxis: [  
		       {  
		           type: 'category',  
		            show: false,
		            inverse: true
//		            data: ['4-14', '15-24', '25-34', '35-44', '45-54', '55-64', '65以上']  
		        }  
		    ],  
		    series: [  
		        {  
		            name: 'Age',  
		            type: 'bar',  
		            itemStyle: {  
		                normal: {  
		                    color: function(data) {  
		                        // build a color map as your need.  
		                        var colorList = [  
		                          '#C1232B','#B5C334','#FCCE10','#E87C25','#27727B',  
		                           '#FE8463','#9BCA63','#FAD860','#F3A43B','#60C0DD',  
		                           '#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0'  
		                        ];  
		                        return colorList[data.dataIndex]  
		                    },  
		                    label: {  
		                        show: true,  
		                       position: 'top',  
		                        formatter: '{b}\n{c}'  
		                    }  
		                }  
		            },  
		            data: [14,31,100,100,0],  
		            markPoint: {  
		                tooltip: {  
		                    trigger: 'item',  
		                    backgroundColor: 'rgba(0,0,0,0)',  
		                    formatter: function(params){  
		                        return '<img src="'   
		                                + params.data.symbol.replace('image://', '')  
		                                + '"/>';  
		                    }  
		                },  
		                data: [  
		                    {xAxis:0, y: 350, name:'4-14', symbolSize:20, symbol: 'image://../asset/ico/折线图.png'},  
		                    {xAxis:1, y: 350, name:'15-24', symbolSize:20, symbol: 'image://../asset/ico/柱状图.png'},  
		                    {xAxis:2, y: 350, name:'25-34', symbolSize:20, symbol: 'image://../asset/ico/散点图.png'},  
		                    {xAxis:3, y: 350, name:'35-44', symbolSize:20, symbol: 'image://../asset/ico/K线图.png'},  
		                    {xAxis:4, y: 350, name:'45-54', symbolSize:20, symbol: 'image://../asset/ico/饼状图.png'},  
		                    {xAxis:5, y: 350, name:'55-64', symbolSize:20, symbol: 'image://../asset/ico/雷达图.png'},  
		                    {xAxis:6, y: 350, name:'65以上', symbolSize:20, symbol: 'image://../asset/ico/和弦图.png'},  
		                    //{xAxis:7, y: 350, name:'Force', symbolSize:20, symbol: 'image://../asset/ico/力导向图.png'},  
		                    //{xAxis:8, y: 350, name:'Map', symbolSize:20, symbol: 'image://../asset/ico/地图.png'},  
		                    //{xAxis:9, y: 350, name:'Gauge', symbolSize:20, symbol: 'image://../asset/ico/仪表盘.png'},  
		                    //{xAxis:10, y: 350, name:'Funnel', symbolSize:20, symbol: 'image://../asset/ico/漏斗图.png'},  
		                ]  
		            }  
		        }  
		    ]  
		};  
			myChart.setOption(option)
  	}
  }
}
</script>

<style scoped lang="less">
.investor {
	text-align: left;
	padding: 10px;
	background-color: #eee;
	position: relative;
	z-index: 10;
	p {
		margin-top: 10px;
		margin-bottom: 0;
	}
	p:nth-child(1) {
		margin-top: 0;
	}
	.text-score {
		position: absolute;
    right: 10px;
    bottom: 10px;
    /*transform: translateY(-50%);*/
    /*background: #FFFFFF;*/
    /*border: 1px solid #ccc;*/
	}
}
.wrapper {
	overflow: auto;
	margin-top: -20px;
	/*max-height: 545px;*/
}
.weui-cells,
.vux-no-group-title {
  margin-top: 0 !important;
  > .weui-cell {
    text-align: left;
    padding-top: 0;
    padding-bottom: 0;
    > .vux-cell-bd > p {
      margin-top: 10px !important;
      margin-bottom: 10px !important;
    }
    > .weui-cell__ft {
      color: #333 !important;
      padding-right: 30px !important;
      i {
        font-size: 24px;
        right: -6px;
        position: absolute;
        top: -12px;
      }
    }
  }
  /*.weui-cell_access .weui-cell__ft {
    padding-right: 30px;
  }*/
  .vux-cell-box {
		padding: 0;
		> div {
      width: 100%;
		}
	}
	.divide-line {
		height: 10px;
		background-color: #eee;
	}
}
</style>
