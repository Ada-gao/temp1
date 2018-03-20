<template>
	<div>
		<x-header :left-options="{backText: ''}">关注产品</x-header>
		<group style="margin-top: -20px; font-size: 14px;">
			<cell-box>
        <i class="icon-user-plus"
          style="font-size: 18px; margin-right: 10px; padding-bottom: 5px; color: #0083C5;"
          ></i>已关注产品
      </cell-box>
		</group>
		<product-list></product-list>
	</div>
</template>

<script>
import { XHeader, Flexbox, FlexboxItem, Group, CellBox } from 'vux'
import ProductList from 'base/product-list/product-list'

export default {
  components: {
    XHeader,
    Flexbox,
    FlexboxItem,
    Group,
    CellBox,
    ProductList
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
</style>
