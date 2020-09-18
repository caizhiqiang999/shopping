<template>
	<div class="content" ref='content'>
		<div>
			<slot></slot>
		</div>
	</div>
</template>

<script>
	import BScroll from 'better-scroll'
	export default{
		data(){
			return{
				bs:null
			}
		},
		mounted(){
			this.bs = new BScroll(this.$refs.content,{
				probeType:3,
				click:true,
				pullUpLoad:true
			}),
			
			this.bs.on('scroll',(position) => {
				this.$emit('contentScroll',position)
			}),
			this.bs.on('pullingUp',() => {
				this.$emit('pullingUp')
			})
		},
		methods:{
			finishLoad(){
				this.bs.finishPullUp()
			}
		}
	}
</script>

<style>
</style>
