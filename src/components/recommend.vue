<template>
	<div>
		<x-header :left-options="{backText: ''}">推荐产品
			<router-link slot="right" to="/">首页
				<i class="icon-home" style="margin-left: 5px;font-size: 18px;"></i>
				<i class="fa fa-home"></i>
			</router-link>
		</x-header>
		<div class="investor" ref="investor">
			<p style="font-size: 20px;">大卫史文森</p>
			<p>专业投资者&nbsp;&nbsp;&nbsp;&nbsp;稳健型</p>
			<p class="text-score"><span class="text-plus">69</span>分</p>
		</div>
		<group class="wrapper">
			<cell
      title="理财: 125万"
      is-link
      :border-intent="false"
      :arrow-direction="showContent001 ? 'up' : 'down'"
      @click.native="showContent(showContent001=!showContent001)">
        <i class="icon-radio-unchecked"></i>
      </cell>

      <template v-if="showContent001">
        <cell-box :border-intent="false" class="sub-item">
          <recommend-products></recommend-products>
        </cell-box>
      </template>
      <div class="divide-line"></div>

      <cell
      title="固收: 200万"
      is-link
      :border-intent="false"
      :arrow-direction="showContent002 ? 'up' : 'down'"
      @click.native="showContent(showContent002=!showContent002)"></cell>

      <template v-if="showContent002">
        <cell-box :border-intent="false" class="sub-item">
          <recommend-products></recommend-products>
        </cell-box>
      </template>
      <div class="divide-line"></div>

      <cell
      title="二级市场: 25万"
      value="新增100万 "
      is-link
      :border-intent="false"
      :arrow-direction="showContent003 ? 'up' : 'down'"
      @click.native="showContent(showContent003=!showContent003)"></cell>

      <template v-if="showContent003">
        <cell-box :border-intent="false" class="sub-item">
          <recommend-products></recommend-products>
        </cell-box>
      </template>
      <div class="divide-line"></div>

      <cell
      title="另类: 150万"
      is-link
      :border-intent="false"
      :arrow-direction="showContent004 ? 'up' : 'down'"
      @click.native="showContent(showContent004=!showContent004)"></cell>

      <template v-if="showContent004">
        <cell-box :border-intent="false" class="sub-item">
          <recommend-products></recommend-products>
        </cell-box>
      </template>
		</group>
    <footer-button>
      <grid-item v-for="item in footerLink" :key="item.title">
        <router-link class="grid-center" :to="item.toLink">{{item.title}}</router-link>
      </grid-item>
    </footer-button>
	</div>
</template>

<script>
import { XHeader, Cell, CellBox, Group, GridItem } from 'vux'
import RecommendProducts from 'base/recommend-products/recommend-products'
import FooterButton from 'base/footer/footer'

export default {
  components: {
    XHeader,
    Cell,
    CellBox,
    Group,
    RecommendProducts,
    FooterButton,
    GridItem
  },
  methods: {
    _setWrapperHeight () {
      let height1 = document.getElementsByClassName('vux-header')[0].clientHeight
      let height2 = this.$refs.investor.clientHeight
      let height3 = document.getElementsByClassName('weui-grid')[0].clientHeight
      let wrapper = document.getElementsByClassName('wrapper')[0]
      let heightBody = document.body.clientHeight
      let maxHeight = heightBody - height1 - height2 - height3
      wrapper.style.height = maxHeight + 'px'
    },
    showContent () {
      this._setWrapperHeight()
    }
  },
  data () {
    return {
      showContent001: false,
      showContent002: false,
      showContent003: false,
      showContent004: false,
      footerLink: [{
        title: '更精准配置',
        toLink: '/riskRating'
      }, {
        title: '查看组合报告',
        toLink: '/combinedReport'
      }]
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
