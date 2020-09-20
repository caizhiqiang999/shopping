<template>
	<div class="goods-item" @click="itemClick">
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
			},
			itemClick(){
				this.$router.push('/detail/'+ this.goodsitem.iid)
				console.log('跳转到详情页')
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
