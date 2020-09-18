<template>
	<div class="tab-cotroll">
		<div v-for="(item,index) in titles" :class="{active:currentIndex === index}" @click="itemClick(index)">
			<span>{{item}}</span>
		</div>
	</div>
</template>

<script>
	export default{
		props:{
			titles:{
				type:Array,
				default(){
					return []
				}
			}
		},
		data(){
			return{
				currentIndex:0
			}
		},
		methods:{
			itemClick(index){
				this.currentIndex = index
				this.$emit('tabClick',index)
			}
		}
	}
</script>

<style>
	.tab-cotroll{
		display: flex;
		height: 30px;
		line-height: 30px;
		text-align: center;
		background-color: #fff;
		
		/* 吸顶效果 */
		position: sticky;
		top:44px
	}
	.tab-cotroll div{
		flex: 1;
	}
	.active{
		color: var(--color-tint);
	}
	.active span{
		padding: 5px;
		border-bottom: 1px solid #FF1493;
	}
</style>
