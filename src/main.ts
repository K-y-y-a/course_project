import { createApp } from 'vue'
import App from './App.vue'
import store from './vuex/store'
import router from './router'
import '/src/assets/_style.scss'


createApp(App).use(store).use(router).mount('#app')

