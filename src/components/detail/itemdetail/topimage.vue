<template>
	<div>
		<Swiper class='item'>
			<SwiperItem v-for='item in topImage'>
				
				<img :src="item" />
				
			</SwiperItem>
		</Swiper>
	</div>
</template>

<script>
	import {Swiper, SwiperItem} from '../../../common/swiper/index.js'
	export default{
		props:{
			topImage:{
				type:Array,
				default(){
					return []
				}
			}
		},
		components:{
			Swiper, 
			SwiperItem
		}
	}
</script>

<style>
	.item{
		height: 230px;
	}
</style>
