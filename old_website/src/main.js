import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueMobileDetection from "vue-mobile-detection";

const app = createApp(App)
app.use(store)
app.use(router)
app.use(VueMobileDetection);
app.mount('#app')