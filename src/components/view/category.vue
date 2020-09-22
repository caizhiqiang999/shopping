<template>
	<div id="category">
		
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
			this.bs = new BScroll(document.querySelector('.wrapper'))
		}
	}
</script>

<style>
	
</style>
