<template>
	<div id="icon" class="icon">
		<div class="wheel" ref="wheel" @mousedown="onMousedown($event)">
			<div class="indicator"></div>
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {
			ox1: 207,
			oy1: 347,
			rotateAngle: null,
			angle1: null,
			angle2: null,
			lastX: null,
			lastY: null,
			lastAngle: null,
			isDown: false
		}
	},
	mounted () {
//		this.getAngle(ox1, oy1)
	},
	methods: {
		onMousedown (e) {
			let mx1 = e.clientX
			let my1 = e.clientY
			this.isDown = true
			// 落点的角度
			this.angle1 = this.getAngle(this.ox1, this.oy1, mx1, my1)
			console.log('this.angle1: ' + this.angle1)
			document.addEventListener('mousemove', this.onMousemove(e))
			document.addEventListener('mouseup', this.onMouseup(e))
		},
		onMousemove (e) {
			console.log(e)
			let mx2 = e.clientX
			let my2 = e.clientY
			this.angle2 = this.getAngle(this.ox1, this.oy1, mx2, my2)
			this.rotateAngle = this.angle2 - this.angle1
			console.log('this.angle2: ' + this.angle2)
			this.$refs.wheel.style.transform = "rotate(`${this.rotateAngle}deg`)"
			
			if(!this.lastX) {
				// 第二次继续旋转
				this.rotateAngle += this.lastAngle
			}
		},
		onMouseup (e) {
			this.lastX = e.clientX
			this.lastY = e.clientY
			this.lastAngle = this.rotateAngle
		},
		getAngle (ox, oy, mx, my) {
			let x = Math.abs(ox - mx)
			let y = Math.abs(oy - my)
			let z = Math.sqrt(Math.pow(x, 2) + Math.pow(y ,2))
			let cos = y / z
			let radian = Math.acos(cos)  //求弧度
			let angle = Math.floor(180/(Math.PI/radian))
			
			if(mx > ox && my == oy) {
				// 在 X 的正轴
				angle = 90
			}
			if(mx > ox && my > oy) {
				// 第四象限
				angle = 180 - angle
			}
			if(mx == ox && my > oy) {
				// 在 Y 的负轴
				angle = 180
			}
			if(mx < ox && my < oy) {
				// 第三象限
				angle = 180 + angle
			}
			if(mx < ox && my == oy) {
				// 在 X 的负轴
				angle = 270
			}
			if(mx < ox && my > oy) {
				// 第二象限
				angle = 360 - angle
			}
			
			return angle
		}
	}
}
</script>

<style scoped lang="less">
.icon {
	width: 200px;
	height: 200px;
	border-radius: 50%;
	margin: 40px auto;
	background-color: #eee;
	overflow: hidden;
	.wheel {
		width: 80%;
		height: 80%;
		border-radius: 50%;
		margin: 10% auto;
		background-color: #EEEEEE;
		box-shadow: 0 2px 10px #999;
		position: relative;
		.indicator {
			width: 30px;
			height: 30px;
			border-radius: 50%;
			background-color: #999999;
			position: absolute;
			top: 20px;
			left: 50%;
			transform: translateX(-50%);
		}
	}
}
</style>