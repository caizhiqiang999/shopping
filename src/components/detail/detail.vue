<template>
	<div id="detail">
		<Nav></Nav>
	</div>
</template>

<script>
	import Nav from './itemdetail/d_nav.vue'
	export default{
		name:'Detail',
		data(){
			return{
				iid:null
			}
		},
		components:{
			Nav
		},
		created(){
			this.iid = this.$route.params.iid
		}
	}
</script>

<style>
</style>
