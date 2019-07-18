import VueRouter from 'vue-router'

import link from '../../components/link.vue'
import index from '../../components/index.vue'
import classify from '../../components/classify.vue'
import shoppingCart from '../../components/shoppingCart.vue'
import my from '../../components/my.vue'
import eat from '../../components/eat.vue'
import login from '../../components/login.vue'
import logined from '../../components/logined.vue'
import register from '../../components/register.vue'
import event from '../../components/event.vue'

export default new VueRouter({
	routes:[
		{
			path:'/',component:link,
			redirect:'/index',
			children:[
				{
					path:'/index',component:index
				},
				{
					path:'/classify',component:classify
				},
				{
					path:'/shoppingCart',component:shoppingCart
				},
				{
					path:'/my',component:my
				}
			]
		},
		{
			path:'/eat',component:eat
		},
		{
			path:'/login',component:login
		},
		{
			path:'/register',component:register
		},
		{
			path:'/event',component:event
		}
	]
})