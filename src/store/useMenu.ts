import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMenu = defineStore('menuStore', () => {
  const key = ref<number>(12)

  function getKeys(): number {
    return key.value
  }

  function setKeys(value: number): void {
    key.value = value
  }

  return {
    setKeys,
    getKeys
  }
})
