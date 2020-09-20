import { createApp } from 'vue'
import store from './store/store';
import App from './App.vue'
import router from './router'



createApp(App).use(router, store).mount('#app')
