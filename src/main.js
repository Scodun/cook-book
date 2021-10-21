import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

import router from '@/router'

Vue.config.productionTip = false
import { Promised } from 'vue-promised'
Vue.component('Promised', Promised)
Vue.use(VueAxios, axios)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
