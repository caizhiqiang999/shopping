<template>
	<div id="category" class="wrapper">
		<ul class="content">
			<li>111111</li>
			<li>111111</li>
			<li>111111</li>
			<li>111111</li>
			<li>111111</li>
			<li>111111</li>
			<li>111111</li>
			<li>111111</li>
			<li>111111</li>
			<li>111111</li>
			<li>111111</li>
			<li>111111</li>
			<li>111111</li>
			<li>111111</li>
			<li>111111</li>
			<li>111111</li>
			<li>111111</li>
			<li>111111</li>
			<li>111111</li>
			<li>111111</li>
			<li>111111</li>
			<li>111111</li>
			<li>111111</li>
			<li>111111</li>
			<li>111111</li>
			<li>111111</li>
			<li>111111</li>
			<li>111111</li>
			<li>111111</li>
			<li>111111</li>
			<li>111111</li>
			<li>111111</li>
			<li>111111</li>
		</ul>
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
	.wrapper{
		height: 150px;
		background-color: red;
		overflow: hidden;
	}
</style>
