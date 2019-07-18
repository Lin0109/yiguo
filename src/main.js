import Vue from 'vue'
import VueRouter from 'vue-router'
import Mint from 'mint-ui'
import axios from 'axios'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Vuex from 'vuex'

import App from './App.vue'
import router from './assets/js/router.js'
import '../node_modules/mint-ui/lib/style.css'
import './assets/css/base.css'
import './assets/css/swiper.css'
import '../node_modules/mint-ui/lib/mint-ui.common.js'

import store from './assets/js/data.js'

Vue.use(VueRouter)
Vue.use(Mint)
Vue.use(VueAwesomeSwiper)
Vue.use(Vuex)
Vue.prototype.$http = axios

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
