import { defineStore } from 'pinia'
import { ref, unref } from 'vue'

export const useMenu = defineStore('menuStore', () => {
  const openKeysRef = ref<string[]>([])
  const selectedKeysRef = ref<string[]>([])

  function getKeys() {
    return {
      openKeys: unref(openKeysRef),
      selectedKeysRef: unref(selectedKeysRef)
    }
  }

  function setKeys(openKeys: string[], selectedKey: string[]): void {
    openKeysRef.value = openKeys
    selectedKeysRef.value = selectedKey
  }

  function clearKeys():void {
    openKeysRef.value = []
    selectedKeysRef.value = []
  }

  return {
    openKeysRef,
    selectedKeysRef,
    setKeys,
    getKeys,
    clearKeys
  }
})
