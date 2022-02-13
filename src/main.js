import { createApp } from 'vue'

import './assets/scss/main.scss'

import plugins from './plugins'
import './registerServiceWorker'

import App from './App.vue'
import router from './router'

createApp(App)
  .use(plugins)
  .use(router)
  .mount('#app')