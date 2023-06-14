import { App } from 'vue'
import { createPinia } from 'pinia'
import piniaStoragePluginCreator from '@/utils/piniaStoragePluginCreator'

const pinia = createPinia()

// 将 tokenStore 中的数据存入sessionStorage中
const piniaPlugin = piniaStoragePluginCreator(
  [
    'tokenStore',
    'menuStore', // 菜单
    'permissionStore', // 权限
    'userInfoStore',
    'lowcodeStore',
    'messageStore'
  ],
  'sessionStorage'
)

pinia.use(piniaPlugin)

export function setupStore(app: App<Element>): void {
  app.use(pinia)
}

export { pinia }
