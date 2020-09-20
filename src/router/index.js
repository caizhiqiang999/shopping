import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = () => import('../components/view/home.vue')
const Category = () => import('../components/view/category.vue')
const Cart = () => import('../components/view/cart.vue')
const Profile = () => import('../components/view/profile.vue')
const Detail = () => import('../components/detail/detail.vue')
const router = new VueRouter({
	routes:[
		{
			path:'',
			redirect: '/home'
		},
		{
			path:'/home',
			component: Home
		},
		{
			path:'/category',
			component: Category
		},
		{
			path:'/cart',
			component: Cart
		},
		{
			path:'/profile',
			component: Profile
		},
		{
			path:'/detail/:iid',
			component:Detail
		}
	],
	mode:'history'
})

export default router