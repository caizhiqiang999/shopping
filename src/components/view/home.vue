<template>
	<div id="home">
		<Tab class="home-tab"><div slot='middle'>购物街</div></Tab>
		<TabCotroll
		:titles="['流行','新款','精选']" 
		@tabClick='tabClick' 
		ref='tabCotroll1'
		:class='{isfixed:isload}'
		v-show='isload'></TabCotroll>
		<Scroll class='content'ref='content'
		        @contentScroll='contentClick'
				@pullingUp='loadMore'>
		<Swiper>
			<SwiperItem v-for='item in banners'>
				<a :href="item.link">
					<img :src="item.image" />
				</a>
			</SwiperItem>
		</Swiper>
		
		<Recommend :recommend = 'recommends' @loadFinish='loadFinish'></Recommend>
		
		<Show></Show>
		
		<TabCotroll 
		:titles="['流行','新款','精选']" 
		@tabClick='tabClick' 
		ref='tabCotroll2'
		
		></TabCotroll>
		
		<Goods :goods="goods[currentgoods].list"></Goods>
		</Scroll>
		<Top @click.native='topClick' v-show='content'></Top>
		
	</div>
</template>

<script>
	import Scroll from '../../common/scroll.vue'
	import Tab from '../../common/tab.vue'
	import {Swiper, SwiperItem} from '../../common/swiper/index.js'
	import Recommend from '../home/recommend.vue'
	import Show from '../home/show.vue'
	import TabCotroll from '../../common/tabcotroll.vue'
	import Goods from '../../common/goods/goods.vue'
	import Top from '../../common/top.vue'
	import {getHomeMultidata,getHomeGoods} from '../../network/home.js'
	
	export default{
		data(){
			return{
				banners:[],
				recommends:[],
				goods:{
					'pop':{page:0,list:[]},
					'new':{page:0,list:[]},
					'sell':{page:0,list:[]}
				},
				currentgoods:'pop',
				content:false,
				taboffsettop:0,
				isload:false
			}
		},
		components:{
			Tab,
			Swiper,
			SwiperItem,
			Recommend,
			Show,
			TabCotroll,
			Goods,
			Scroll,
			Top,
			
		},
		// 实现生命周期函数，在组件创建完成之后发送网络请求
		created(){
			this.getHomeMultidata()
			
			this.getHomeGoods('pop')
			this.getHomeGoods('new')
			this.getHomeGoods('sell')
			
			// 事件总线
			this.$bus.$on('imgLoad',() => {
				this.$refs.content.bs.refresh()
			})
		},
		mounted(){
			
			
		},
		methods:{
			// 事件监听方法
			tabClick(index){
				switch(index){
					case 0:this.currentgoods = 'pop'
					break
					case 1:this.currentgoods = 'new'
					break
					case 2:this.currentgoods = 'sell'
					break
					
					
				}
				this.$refs.tabCotroll1.currentIndex = index
				this.$refs.tabCotroll2.currentIndex = index
			},
			// 点击回顶部
			topClick(){
				this.$refs.content.bs.scrollTo(0,0,500)
			},
			contentClick(position){
				
				this.content = (-position.y) > 1000
				
				this.isload = (-position.y)>this.taboffsettop
				
				
			},
			// 上拉加载更多
			loadMore(){
				this.getHomeGoods(this.currentgoods)
				this.$refs.content.finishLoad()
				// 一个小BUG
				this.$refs.content.bs.refresh()
			},
			loadFinish(){
				// 获取tabCotroll的offsettop
				this.taboffsettop = this.$refs.tabCotroll2.$el.offsetTop
			},
			// 网络请求方法
			getHomeMultidata(){
				getHomeMultidata().then(res => {
				console.log(res)
				this.banners = res.data.banner.list
				this.recommends  = res.data.recommend.list
			})},
			
			getHomeGoods(type){
				const page = this.goods[type].page+1
				getHomeGoods(type,page).then(res => {
					console.log(res)
					this.goods[type].list.push(...res.data.list)
					this.goods[type].page += 1
				})
			}
			
		}
	}
</script>

<style scoped="scoped">
	
	.home-tab{
		background-color: var(--color-tint);
		color: #fff;
		
		z-index: 9;
	}
	.content{
		position: absolute;
		top: 44px;
		bottom: 49px;
		left: 0;
		right: 0;
		overflow: hidden;
		
	}
	.isfixed{
		z-index: 10;
	}
	
</style>
