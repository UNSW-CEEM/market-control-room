import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './filters'
import 'nes.css/css/nes.css'


import HighchartsVue from 'highcharts-vue'
Vue.use(HighchartsVue)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
