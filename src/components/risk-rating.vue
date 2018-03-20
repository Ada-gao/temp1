<template>
	<div>
		<x-header :left-options="{backText: ''}">风险测评</x-header>
		<div class="investor" ref="investor">
			<p style="font-size: 20px;">大卫史文森</p>
			<p>专业投资者&nbsp;&nbsp;&nbsp;&nbsp;稳健型</p>
		</div>
<!--	  <div style="width: 95%;margin: 0 auto;">-->
    <div>
      <br>
      <step v-model="step1" background-color='#fbf9fe' style="width: 95%;">
        <step-item description="输入财务状况 "></step-item>
        <step-item description="保障发布"></step-item>
        <step-item description="资产分析"></step-item>
        <step-item description="财务预测"></step-item>
        <step-item description="风险评估" style="padding-left: 25px;"></step-item>
      </step>
      <group :title="groupTitle" v-show="step1 == 0">
        <popup-picker v-for="item in stepTitle1" :key="item.title" :title="item.title" :data="list1" v-model="item.val" :display-format="format"></popup-picker>
      </group>
      <group v-show="step1 == 1">
        <popup-picker v-for="item in stepTitle2" :key="item.title" :title="item.title" :data="list1" v-model="item.val" :display-format="format"></popup-picker>
      </group>
      <group v-show="step1 == 2">
        <popup-picker v-for="item in stepTitle3" :key="item.title" :title="item.title" :data="list1" v-model="item.val" :display-format="format"></popup-picker>
      </group>
      <group v-show="step1 == 3">
        <popup-picker v-for="item in stepTitle4" :key="item.title" :title="item.title" :data="list1" v-model="item.val" :display-format="format"></popup-picker>
      </group>
      <div v-show="step1 == 4">
      	<rotate-radius></rotate-radius>
        <div id="riskChart" style="width: 100%;height: 300px;"></div>
      </div>
      <div class="btn_wrap">
        <x-button type="primary" @click.native="nextStep">{{buttonText}}</x-button>
      </div>
    </div>
	</div>
</template>

<script>
import { XHeader, Step, StepItem, XButton, Group, PopupPicker } from 'vux'
import echarts from 'echarts'
import RotateRadius from 'base/rotate-button/rotate-button'

export default {
  components: {
    XHeader,
    Step,
    StepItem,
    XButton,
    Group,
    PopupPicker,
    RotateRadius
  },
  data () {
    return {
      step1: 0,
      buttonText: '下一项',
      groupTitle: '您的财务状况，有助于我们提供更符合您的资产配置',
      stepTitle1: [
        {
          title: '年收入',
          val: []
        }, {
          title: '年支出',
          val: []
        }, {
          title: '总负债',
          val: []
        }, {
          title: '每年偿还额',
          val: []
        }
      ],
      stepTitle2: [
        {
          title: '重大疾病',
          val: []
        }, {
          title: '定期寿险',
          val: []
        }, {
          title: '高端医疗',
          val: []
        }, {
          title: '年金',
          val: []
        }, {
          title: '终身寿险',
          val: []
        }
      ],
      stepTitle3: [
        {
          title: '理财',
          val: []
        }, {
          title: '固收',
          val: []
        }, {
          title: '二级市场',
          val: []
        }, {
          title: '另类投资',
          val: []
        }
      ],
      stepTitle4: [
        {
          title: '退休年龄',
          val: []
        }, {
          title: '预计支出增长率',
          val: []
        }, {
          title: '预计收入增长率',
          val: []
        }, {
          title: '子女预算',
          val: []
        }, {
          title: '遗产馈赠',
          val: []
        }
      ],
      list1: this.createData(),
      value0: [],
      value1: [],
      value2: [],
      value3: [],
      format: function (value, name) {
        value[0] = parseInt(value[0])
        value[1] = parseInt(value[1])
        return `${value[0] + value[1]}万`
      }
    }
  },
  mounted () {
    this.createData()
    this.drawLineChart()
  },
  methods: {
    nextStep () {
      this.step1++
      if (this.step1 === 4) {
        this.buttonText = '最后提交'
      }
    },
    createData () {
      let largeList = []
      let chargeList = []
      for (let i = 0; i < 100; i++) {
        largeList.push(`${i * 100}万`)
        chargeList.push(`${i}万`)
      }
      return [largeList, chargeList]
    },
    drawLineChart () {
      let riskChart = document.getElementById('riskChart')
      riskChart.style.width = document.body.clientWidth + 'px'
      let myChart = echarts.init(riskChart)
      let options = {
        xAxis: {
          type: 'category',
          data: ['35', '40', '45', '50', '55', '60', '65']
        },
        yAxis: {
          type: 'value',
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          }
        },
        series: [{
          data: [38, 42, 90, 134, 190, 133, 32],
          type: 'line',
          smooth: true
        }]
      }
      myChart.setOption(options)
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
.weui-cells__title {
  background-color: #eee!important;
  padding-top: 20px!important;
  font-size: 16px!important;
  padding-bottom: 20px!important;
  text-align: center!important;
  margin-bottom: 0!important;
}

.btn_wrap {
  padding: 0 1rem;
  margin-top: 2rem;
  .weui-btn_primary {
    border-radius: 20px;
    background-color: #0083c5;
  }
}
</style>
