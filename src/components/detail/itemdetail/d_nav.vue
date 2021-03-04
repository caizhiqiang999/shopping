<template>
	<div class="d_nav">
		<navbar>
			<div slot='left' class="left" @click="backClick">
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
				this.$emit('titleClick',index)
			},
			backClick(){
				// 返回
				this.$router.go(-1)
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
		margin-top: 10px;
		
	}
</style>
