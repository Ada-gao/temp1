<template>
	<div>
		<flexbox :gutter="2" wrap="wrap">
			<flexbox-item :span="4" class="item-left">
				<div class="flex-product">
					<div class="flex-left">
						<p class="rate"><span>13.00</span>%</p>
						<p class="text">近一年收益</p>
					</div>
				</div>
			</flexbox-item>
			<flexbox-item>
				<div class="flex-product">
					<div class="flex-right">
						<p style="font-size: 18px;">正收益理财产品</p>
						<p class="text">适合度92%</p>
						<span>二级市场</span>
					</div>
				</div>
			</flexbox-item>
			<button class="btn" :class="isAttention == 1 ? 'btn-primary': 'btn-default' ">
				{{buttonText == 1 ? '关注' : '已关注'}}
			</button>
		</flexbox>
		<flexbox :gutter="2" wrap="wrap">
			<flexbox-item :span="4" class="item-left">
				<div class="flex-product">
					<div class="flex-left">
						<p class="rate"><span>12.00</span>%</p>
						<p class="text">近一年收益</p>
					</div>
				</div>
			</flexbox-item>
			<flexbox-item>
				<div class="flex-product">
					<div class="flex-right">
						<p style="font-size: 18px;">首推产品</p>
						<p style="font-size: 18px;">正收益理财产品</p>
						<p class="text">适合度92%</p>
						<span>二级市场</span>
					</div>
				</div>
			</flexbox-item>
			<button class="btn" :class="isAttention == 0 ? 'btn-primary': 'btn-default' ">
				{{buttonText == 0 ? '关注' : '已关注'}}
			</button>
		</flexbox>
	</div>
</template>

<script>
import { Flexbox, FlexboxItem } from 'vux'
export default {
  components: {
    Flexbox,
    FlexboxItem
  },
  data () {
    return {
      isAttention: 1,
      buttonText: 1
    }
  }
}
</script>

<style scoped lang="less">
.vux-flexbox {
		border-top: 1px solid #eee;
		padding-top: 20px;
    padding-bottom: 20px;
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
      position: absolute;
      right: 0;
    }
    .btn-default {
      position: absolute;
      top: 10px;
      right: 0px;
      background-color: #ccc;
		}
	}
</style>
