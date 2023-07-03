import { defineStore } from 'pinia'
import { ref } from 'vue'

// 定义用的权限代码, 比如路由
export const usePermission = defineStore('permissionStore', () => {
  const routers = ref<any[]>([])

  function clear() {
    routers.value = []
  }

  return { clear }
})
