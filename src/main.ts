import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// import { registerGlobComp } from '@/components/registerGlobComp'
// import { setupRouter } from '@/router'
// import { setupGlobDirectives } from '@/directive'
import { setupStore } from '@/store'
import { registerGlobComp } from '@/components/registerGlobComp'
import 'ant-design-vue/dist/antd.css'

// 设置网页的标题
document.head.querySelector('title')!.innerText = import.meta.env.VITE_APP_TITLE

function initApp() {
  const app = createApp(App)
  // 安装store
  setupStore(app)

  // 注册全局组件
  registerGlobComp(app)
  // 安装router
  // setupRouter(app)

  // 注册全局指令
  // setupGlobDirectives(app)

  app.mount('#app')
}


initApp()


