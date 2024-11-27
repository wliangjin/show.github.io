import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from "pinia";
import './base.css'
import 'tailwindcss/base.css';
import 'tailwindcss/utilities.css';
import router from '@/router/index';
import 'element-plus/theme-chalk/base.css'
import 'element-plus/theme-chalk/el-message.css'
import 'element-plus/theme-chalk/el-message-box.css'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
const pinia = createPinia()
app.use(router)
app.use(pinia)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.mount('#app')