<template>
	<div class="footer-button">
		<grid>
			<slot></slot>
      <!--<grid-item v-for="item in footerLink" :key="item.title">
        <router-link class="grid-center" :to="item.toLink">{{item.title}}</router-link>
      </grid-item>-->
      <!--<grid-item>
        <router-link class="grid-center" to="/">更精准配置</router-link>
      </grid-item>
      <grid-item>
        <router-link class="grid-center" to="/recommend">查看推荐产品</router-link>
      </grid-item>-->
    </grid>
	</div>
</template>

<script>
import { Grid, GridItem } from 'vux'

export default {
  components: {
    Grid,
    GridItem
  }
// data () {
//  return {
//    footerLink: [{
//      title: '更精准配置',
//      toLink: ''
//    }, {
//      title: '查看推荐产品',
//      toLink: ' /recommend'
//    }]
//  }
// }
}
</script>

<style scoped="" lang="less">
.footer-button {
	position: fixed;
	bottom: 0;
	width: 100%;
	background-color: #fff;
	.weui-grid:nth-child(2) {
		background-color: #0083C5;
		a {
			color: #fff;
		}
	}
	.weui-grid {
		padding: 23px 10px;
	}
	.grid-center {
    display: block;
    text-align: center;
  }
}
</style>
