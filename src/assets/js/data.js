import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
	state:{
		isLogin : "unLogin",
		flag : "emptyShop",
		arr:[],
		sum : 0.00,
		num: 0

	},
	mutations:{
		changeLogin(state){
			state.isLogin = "logined"
		},
		changeFlag(state){
			state.flag = "shopping"
		}
	}
})

