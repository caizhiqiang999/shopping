<template>
	<div class="nav-bar">
		<navbaritem path='/home'>
			<img slot="img1" src="../../assets/image/tabbar/home.svg" alt=""/>
			<img slot="img2" src="../../assets/image/tabbar/home_active.svg" alt=""/>
			<div slot="text">首页</div>
		</navbaritem>
		<navbaritem path='/category'>
			<img slot="img1" src="../../assets/image/tabbar/category.svg" alt=""/>
			<img slot="img2" src="../../assets/image/tabbar/category_active.svg" alt=""/>
			<div slot="text">分类</div>
		</navbaritem>
		<navbaritem path='/cart'>
			<img slot="img1" src="../../assets/image/tabbar/cart.svg" alt=""/>
			<img slot="img2" src="../../assets/image/tabbar/cart_active.svg" alt=""/>
			<div slot="text">购物车</div>
		</navbaritem>
		<navbaritem path='/profile'>
			<img slot="img1" src="../../assets/image/tabbar/profile.svg" alt=""/>
			<img slot="img2" src="../../assets/image/tabbar/profile_active.svg" alt=""/>
			<div slot="text">我的</div>
		</navbaritem>
	</div>
</template>

<script>
	import navbaritem from './narbaritem.vue'
	export default{
		components:{
			navbaritem
		}
	}
</script>

<style>
	.nav-bar{
		display: flex;
		height: 49px;
		background-color: #f6f6f6;
		
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		box-shadow: 0 -1px 1px rgba(100,100,100,0.4);
	}
	.nav-bar-item{
		flex: 1;
		text-align: center;
	}
	.nav-bar-item img{
		width: 24px;
		height: 24px;
		margin-top: 3px;
		vertical-align: middle;
	}
	
</style>
