import Vue from 'vue'

import App from './App'

import router from './router'

import './plugins'
import './assets/scss/main.scss'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
