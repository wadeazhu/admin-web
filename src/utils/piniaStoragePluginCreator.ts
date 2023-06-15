import { PiniaPlugin, PiniaPluginContext } from 'pinia'
import { isString } from '@/utils/is'

type storageType = 'localStorage' | 'sessionStorage'
/**
 * pinia本地存储插件生成器
 * @param storeIdList 需要进行本地存储的 storeId[]
 * @param storageType 本地存储类型
 * @return PiniaPlugin
 */
function piniaStoragePluginCreator(storeIdList: string[], storageType?: storageType): PiniaPlugin

/**
 * pinia本地存储插件生成器
 * @param storeId 需要进行本地存储的 storeId
 * @param storageType 本地存储类型
 * @constructor
 */
function piniaStoragePluginCreator(storeId: string, storageType?: storageType): PiniaPlugin

function piniaStoragePluginCreator(value: string | string[], storageType: storageType = 'localStorage'): PiniaPlugin {
  const curValue = isString(value) ? [value] : value
  return function (ctx: PiniaPluginContext) {
    const { $id } = ctx.store
    for (let i = 0; i < curValue.length; i++) {
      if ($id === curValue[i]) {
        ctx.store.$subscribe((mutation, state) => {
          if (mutation.type) {
            window[storageType].setItem($id, JSON.stringify(state))
          }
        })
        let storageData = {}
        try {
          storageData = JSON.parse(window[storageType].getItem($id) || '{}')
        } catch (e) {
          window[storageType].setItem($id, '{}')
        }
        ctx.store.$patch(storageData)
      }
    }
  }
}

export default piniaStoragePluginCreator
