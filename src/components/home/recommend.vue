<template>
	<div class="recommend">
		<div v-for="item in recommend" class="recommend-div">
			<a :href="item.link">
				<img :src="item.image" @load="loadFinish"/>
				<div class="title">{{item.title}}</div>
			</a>
		</div>
	</div>
</template>

<script>
	export default{
		props:{
			recommend:{
				type:Array,
				default(){
					return []
				}
			}
		},
		data(){
			return{
				isload:false
			}
		},
		methods:{
			loadFinish(){
				if(!this.isload){
					this.$emit('loadFinish')
					this.isload = true
				}
			}
		}
	}
</script>

<style>
	.recommend{
		display: flex;
		text-align: center;
		margin-bottom: 2px;
		
		
	}
	.recommend-div{
		flex: 1;
		
	}
	.recommend img{
		width: 50px;
		height: 50px;
	}
	.recommend .title{
		font-size: 14px;
	}
</style>
