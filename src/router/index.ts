import { createRouter, createWebHashHistory } from 'vue-router'
import { App } from 'vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/login.vue')
    }
  ]
})

export default router

export function setupRouter(app: App<Element>) {
  app.use(router)
}
