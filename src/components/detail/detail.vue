<template>
	<div id="detail">
		<Nav></Nav>
		<Top :topImage='topImage'></Top>
		<ItemGoods :goods='goods'></ItemGoods>
	</div>
</template>

<script>
	import Nav from './itemdetail/d_nav.vue'
	import Top from './itemdetail/topimage.vue'
	import ItemGoods from './itemdetail/goods.vue'
	import {getDetailGoods,Goods} from '../../network/detail.js'
	export default{
		name:'Detail',
		data(){
			return{
				iid:null,
				topImage:[],
				goods:{}
			}
		},
		components:{
			Nav,
			Top,
			ItemGoods
		},
		methods:{
			
		},
		created(){
			this.iid = this.$route.params.iid
			
			getDetailGoods(this.iid).then(res => {
				this.topImage = res.result.itemInfo.topImages
				let data = res.result
				this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
			})
		}
	}
</script>

<style>
</style>
