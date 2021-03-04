<template>
	<div id="detail">
		<Nav @titleClick = 'titleClick' ></Nav>
		<Scroll class='content' ref='scroll'>
		<Top :topImage='topImage'></Top>
		<ItemGoods :goods='goods'></ItemGoods>
		<DetailShopInfo :shop='shop'></DetailShopInfo>
		<DetailGoodsInfo :detailInfo='detailInfo' @imageLoad='imgLoad'></DetailGoodsInfo>
		<DetailParamsInfo ref = 'params' :paramInfo = 'itemParams'></DetailParamsInfo>
		<DetailCommentInfo ref='comment' :commentInfo = 'commentInfo'></DetailCommentInfo>
		<GoodsG ref='goods' :goods = 'recommends'></GoodsG>
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
	import {getDetailGoods,Goods,Shop,getRecommend} from '../../network/detail.js'
	import DetailParamsInfo from './itemdetail/detailparamsinfo.vue'
	import DetailCommentInfo from './itemdetail/DetailCommentInfo.vue'
	import GoodsG from '../../common/goods/goods.vue'
	export default{
		
		data(){
			return{
				iid:null,
				topImage:[],
				goods:{},
				shop:{},
				detailInfo:{},
				itemParams:{},
				commentInfo:{},
				recommends:[],
				themeTopYs:[]
			}
		},
		components:{
			Nav,
			Top,
			ItemGoods,
			DetailShopInfo,
			Scroll,
			DetailGoodsInfo,
			DetailParamsInfo,
			DetailCommentInfo,
			GoodsG
		},
		methods:{
			imgLoad(){
				this.$refs.scroll.refresh()
				this.themeTopYs = []
				this.themeTopYs.push(0)
				this.themeTopYs.push(this.$refs.params.$el.offsetTop)
				this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
				this.themeTopYs.push(this.$refs.goods.$el.offsetTop)
				console.log(this.themeTopYs)
			},
			titleClick(index){
				
				// this.$refs.scroll.scrollTo()
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
				this.itemParams = data.itemParams
				if(data.rate.cRate !== 0){
					this.commentInfo = data.rate.list[0]
				}
				
			})
			
			getRecommend().then(res => {
				
				this.recommends = res.data.list
			})
		},
		mounted(){
			
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
