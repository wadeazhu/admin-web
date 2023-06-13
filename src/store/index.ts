import {App} from "vue";
import { createPinia } from 'pinia'
import PiniaStoragePluginCreator from '@/utils/piniaStoragePluginCreator'

const pinia = createPinia()

// 将 tokenStore 中的数据存入sessionStorage中
const piniaPlugin = PiniaStoragePluginCreator(
    ['tokenStore', 'menuStore', 'permissionStore', 'userInfoStore', 'lowcodeStore', 'messageStore'],
    'sessionStorage'
)

pinia.use(piniaPlugin)

export function setupStore(app: App<Element>): void {
    app.use(pinia)
}

export {pinia}
