<template>
	<div id="detail">
		<Nav></Nav>
		<Scroll class='content' ref='scroll'>
		<Top :topImage='topImage'></Top>
		<ItemGoods :goods='goods'></ItemGoods>
		<DetailShopInfo :shop='shop'></DetailShopInfo>
		<DetailGoodsInfo :detailInfo='detailInfo' @imageLoad='imgLoad'></DetailGoodsInfo>
		</Scroll>
	</div>
</template>

<script>
	import Scroll from '../../common/scroll.vue'
	import Nav from './itemdetail/d_nav.vue'
	import Top from './itemdetail/topimage.vue'
	import ItemGoods from './itemdetail/goods.vue'
	import DetailShopInfo from './itemdetail/DetailShopInfo.vue'
	import DetailGoodsInfo from './itemdetail/DetailGoodsInfo.vue'
	import {getDetailGoods,Goods,Shop} from '../../network/detail.js'
	export default{
		name:'Detail',
		data(){
			return{
				iid:null,
				topImage:[],
				goods:{},
				shop:{},
				detailInfo:[]
			}
		},
		components:{
			Nav,
			Top,
			ItemGoods,
			DetailShopInfo,
			Scroll,
			DetailGoodsInfo
		},
		methods:{
			imgLoad(){
				this.$refs.scroll.refresh()
			}
		},
		created(){
			this.iid = this.$route.params.iid
			
			getDetailGoods(this.iid).then(res => {
				this.topImage = res.result.itemInfo.topImages
				let data = res.result
				this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
				this.shop = new Shop(data.shopInfo)
				this.detailInfo = data.detailInfo
			})
		}
	}
</script>

<style>
	.content{
		position: absolute;
		top: 44px;
		bottom: 49px;
		left: 0;
		right: 0;
		overflow: hidden;
		
	}
</style>
