<template>
	<div class="d_nav">
		<navbar>
			<div slot='left' class="left">
				<img src="../../../assets/image/home/back.svg" />
			</div>
			<div slot='middle' class="title">
				<div v-for="(item,index) in title" 
				@click="itemClick(index)"
				:class="{active:currentItem===index}">{{item}}</div>
			</div>
		</navbar>
	</div>
</template>

<script>
	import navbar from '../../../common/tab.vue'
	export default{
		data(){
			return{
				title:['商品','参数','评论','推荐'],
				currentItem:0
			}
		},
		components:{
			navbar
		},
		methods:{
			itemClick(index){
				this.currentItem = index
			}
		}
	}
</script>

<style scoped="scoped">
	.title{
		display: flex;
	}
	.title div{
		flex: 1;
	}
	.active{
		color: red;
	}
	.left img{
		padding-top: 4px;
		
	}
</style>
