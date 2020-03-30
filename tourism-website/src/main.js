import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import './assets/js/rem'
import './assets/iconfont/iconfont.css'
import './assets/css/module.css'
import './assets/css/reset.css'

Vue.prototype.$axios = axios;

Vue.config.productionTip = false

new Vue({
  name: "root",
  router,
  store,
  render: h => h(App)
}).$mount('#app')
