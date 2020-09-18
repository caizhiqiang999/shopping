import axios from './axios.js'
import axios_01 from './axios_01.js'
export function getHomeMultidata(){
	return axios({
		url:'/home/multidata'
	})
}

export function getHomeGoods(type,page){
	return axios_01({
		url:'/home/data',
		params:{
			type,
			page
		}
	})
}