<template>
	<div class="goods-item">
		<a>
			<img :src="goodsitem.show.img" @load="imgLoad"/>
			<div>
				<p>{{goodsitem.title}}</p>
				<span>￥{{goodsitem.price}}</span>
				
			</div>
		</a>
	</div>
</template>

<script>
	export default{
		props:{
			goodsitem:{
				type:Object,
				default(){
					return {}
				}
			}
		},
		methods:{
			imgLoad(){
				this.$bus.$emit('imgLoad')
			}
		}
	}
</script>

<style>
	.goods-item{
		width: 47%;
	}
	.goods-item img{
		height: 230px;
		width: 100%;
	}
	.goods-item p {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
</style>
