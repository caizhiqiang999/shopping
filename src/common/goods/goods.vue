<template>
	<div class="goods">
		<GoodsItem v-for='item in goods' :goodsitem='item'></GoodsItem>
	</div>
</template>

<script>
	import GoodsItem from './goodsitem.vue'
	export default{
		props:{
			goods:{
				type:Array,
				default(){
					return []
				}
			}
		},
		components:{
			GoodsItem
		}
	}
</script>

<style>
	.goods{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
	}
	
</style>
