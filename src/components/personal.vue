<template>
	<div>
		<x-header :left-options="{backText: ''}">我的</x-header>
		<group style="margin-top: -20px;">
      <cell-box is-link>
                修改风险测评
      </cell-box>
      <cell-box is-link>
                我的报告
      </cell-box>
      <cell-box link="/attention">
                我的消息
      </cell-box>
      <cell-box is-link>
                我的优惠
      </cell-box>
    </group>
	</div>
</template>

<script>
import { XHeader, Group, Cell, CellBox } from 'vux'
export default {
  components: {
    XHeader,
    Group,
    Cell,
    CellBox
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
</style>
