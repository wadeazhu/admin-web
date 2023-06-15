import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSetting = defineStore('settingStore', () => {
  const collapsed = ref<boolean>(false)

  function toggleCollapsed(): void {
    collapsed.value = !collapsed.value
  }

  return {
    collapsed,
    toggleCollapsed
  }
})
