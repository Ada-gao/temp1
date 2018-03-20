<template>
	<div>
		<header class="home-header">
			<img src="../assets/banner.jpg">
			<scroller lock-y :scrollbar-x=false :bounce=false>
				<div class="box1" ref="nav">
          <div class="box1-item" ref="navItem" v-for="item in navList" :key="item.title">
            <img :src="item.imgSrc" alt="" /><br />
            <router-link :to="item.toLink">{{item.title}}</router-link>
          </div>
				</div>
			</scroller>
		</header>
		<section>
			<div class="space"></div>
			<group style="margin-top: -20px; font-size: 14px;">
				<cell-box link="/attention">
					<img src="../assets/icon-tit.jpg" style="height: 20px; margin-right: 5px;"/>
                        人气产品
            <i class="icon-cheveron-outline-right"
              style="position: absolute; right: 10px; z-index: 10; top: 30%;font-size: 18px;color: #ccc;"></i>
        </cell-box>
			</group>
			<product-list></product-list>
		</section>
		<footer>
			<tabbar>
				<tabbar-item selected link="/">
					<img slot="icon" src="../assets/icon7-1.jpg">
					<span slot="label">首页</span>
				</tabbar-item>
				<tabbar-item link="/attention">
					<img slot="icon" src="../assets/icon-6-2.jpg">
					<span slot="label">关注</span>
				</tabbar-item>
				<tabbar-item show-dot link="/personal">
					<img slot="icon" src="../assets/icon8-1.jpg">
					<span slot="label">我的</span>
				</tabbar-item>
			</tabbar>
		</footer>
	</div>
</template>

<script>
import { Tabbar, TabbarItem, CellBox, Group, Divider, Scroller, Badge } from 'vux'
import ProductList from 'base/product-list/product-list'
export default {
  components: {
    Tabbar,
    TabbarItem,
    CellBox,
    Group,
    Divider,
    Scroller,
    ProductList,
    Badge
  },
  data () {
    return {
      navList: [{
        title: '资产配置',
        toLink: '/assetAllocation',
        imgSrc: 'static/img/icon1.jpg'
      }, {
        title: '保险',
        toLink: '/assetAllocation',
        imgSrc: 'static/img/icon1.jpg'
      }, {
        title: '理财',
        toLink: '/assetAllocation',
        imgSrc: 'static/img/icon2.jpg'
      }, {
        title: '固收',
        toLink: '/assetAllocation',
        imgSrc: 'static/img/icon3.jpg'
      }, {
        title: '二级市场',
        toLink: '/assetAllocation',
        imgSrc: 'static/img/icon4.jpg'
      }, {
        title: '另类投资',
        toLink: '/assetAllocation',
        imgSrc: 'static/img/icon5.jpg'
      }]
    }
  },
  mounted () {
    this._setScrollWidth()
    window.addEventListener('resize', () => {
      this._setScrollWidth(true)
    })
  },
  methods: {
    _setScrollWidth (isResize) {
      this.items = this.$refs.navItem
      let scrollerWidth = screen.width
      let width = 0
      for (let i = 0; i < this.items.length; i++) {
        let item = this.items[i]
        item.style.width = scrollerWidth / 5 + 'px'
        width += item.offsetWidth
        width = Math.ceil(width)
      }
      this.$refs.nav.style.width = width + 1 + 'px'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
	/*@import "common/style/variable";*/
	.home-header {
		font-size: 0;
		img {
			width: 100%;
		}
		.nav {
			font-size: 15px;
			display: flex;
			div {
				flex: 3;
				padding: 5px;
			}
		}
		.box1 {
			height: 70px;
			position: relative;
			/*width: 420px;*/
			font-size: 13px;
		}
		.box1-item {
			/*width: 70px;*/
			/*height: 70px;*/
			/*background-color: #ccc;*/
			display:inline-block;
			/*margin-left: 10px;*/
			float: left;
			text-align: center;
			/*line-height: 100px;*/
			padding-top: 15px;
			padding-bottom: 15px;
			box-sizing: border-box;
			img {
				width: 40px;
				display: inline-block;
			}
			a {
				display: inline-block;
			}
		}
		.box1-item:first-child {
			margin-left: 0;
		}
	}
	.weui-cells {
		margin-top: 0 !important;
		font-size: 12px;
		.weui-cell-box {
			> i {
				position: absolute;
				right: 10px;
				z-index: 10;
			}
		}
	}
	.space {
		width: 100%;
		background-color: #EEEEEE;
		height: 10px;
	}
	.vux-flexbox {
		border-top: 1px solid #eee;
		padding-top: 10px;
    padding-bottom: 10px;
    position: relative;
    .vux-flexbox-item:nth-child(2) {
			border-left: 1px solid #eee;
		}
		.vux-flexbox-item {
			padding: 20px;
      box-sizing: border-box;
			.flex-product {
				/*text-align: center;*/
				/*border-radius: 4px;
				background-clip: padding-box;*/
				p {
					margin-bottom: 6px;
					margin-top: 0;
				}
				.text {
					font-size: 10px;
				}
				.flex-left .rate {
					color: #f04155;
					span {
						font-size: 25px;
					}
				}
				.flex-right span {
					background-color: #fd6060;
					color: #fff;
					font-size: 11px;
					padding: 3px 6px;
				}
			}
		}
		.btn {
			border: none;
			border-radius: 2px;
			color: #fff;
			margin-right: 20px;
			padding: 3px 6px 5px 6px;
			width: 52px;
		}
		.btn-primary {
			background-color: #0083c5;
		}
		.btn-default {
			position: absolute;
      top: 10px;
      right: 0px;
      background-color: #ccc;
		}
	}
	.weui-tabbar {
		background-color: #fff;
		> a {
			position: relative;
		}
		img {
			width: 50px !important;
			height: 50px !important;
			position: absolute;
			left: 50%;
			transform: translateX(-50%);
		}
		.weui-tabbar__item {
			.weui-tabbar__icon {
				width: 40px !important;
				height: 40px !important;
			}
			.weui-tabbar__label {
				line-height: 1;
				span {
					margin-top: 10px;
					display: inline-block;
				}
			}
		}
	}
</style>
