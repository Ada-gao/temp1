export function setWrapperHeight() {
	let height1 = document.getElementsByClassName('vux-header')[0].clientHeight
  let height2 = this.$refs.investor.clientHeight
  let height3 = document.getElementsByClassName('weui-grid')[0].clientHeight
  let wrapper = document.getElementsByClassName('wrapper')[0]
  let heightBody = document.body.clientHeight
  let maxHeight = heightBody - height1 - height2 - height3
  wrapper.style.height = maxHeight + 'px'
  console.log(wrapper.clientHeight)
}
