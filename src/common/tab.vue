<template>
	<div class="tab">
		<div class="left"><slot name="left"></slot></div>
		<div class="middle"><slot name="middle"></slot></div>
		<div class="right"><slot name="right"></slot></div>
		
	</div>
</template>

<script>
	export default{
		
	}
</script>

<style>
	.tab{
		display: flex;
		height: 44px;
		line-height: 44px;
		text-align: center;
		box-shadow: 0 -1px 2px #000000;
		
		
	}
	.left,.right{
		width: 60px;
	}
	.middle{
		flex: 1;
		
	}
</style>
