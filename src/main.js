import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/assets/css/common.css'
import '@/assets/css/font-awesome.min.css'
createApp(App).use(store).use(router).mount('#app')
