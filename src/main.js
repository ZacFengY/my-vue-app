import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import i18n from 'plugins/i18n'
// import 'element-plus/lib/theme-chalk/index.css'; // the css file have bug on icon
import 'element-plus/packages/theme-chalk/src/index.scss'
// import store from './stores'
import { createPinia } from 'pinia'
import 'styles/index.scss' // 全局样式

createApp(App)
  .use(ElementPlus, {
    // i18n: i18n.global.t,
  })
  .use(router)
  // .use(store)
  .use(createPinia())
  .use(i18n)
  .mount('#app')
