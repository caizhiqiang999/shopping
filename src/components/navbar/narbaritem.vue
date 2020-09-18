<template>
	<div class="nav-bar-item" @click='itemClick'>
		<div v-if="!isActive"><slot name="img1"></slot></div>
		<div v-else><slot name="img2"></slot></div>
		<div :class="{active:isActive,size:true}"><slot name="text"></slot></div>
	</div>
</template>

<script>
	export default{
		props:{
			path:String,
			default:'/home'
		},
		data(){
			return{
				
			}
		},
		computed:{
			isActive(){
				// 监听活跃路由与当前路由的关系，实现点击之后的颜色变化
				return this.$route.path.indexOf(this.path) !==  -1
			}
		},
		methods:{
			itemClick(){
				this.$router.replace(this.path)
			}
		}
	}
</script>

<style>
	.active{
		color: deeppink;
	}
	.size{
		font-size: 14px;
	}
</style>
