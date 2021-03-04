<template>
	<div class="goods-item" @click="itemClick">
		<a>
			<img :src="showImage" @load="imgLoad"/>
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
		computed:{
			showImage(){
				return this.goodsitem.image || this.goodsitem.show.img
			}
		},
		methods:{
			imgLoad(){
				this.$bus.$emit('imgLoad')
			},
			itemClick(){
				this.$router.push('/detail/'+ this.goodsitem.iid)
				
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
