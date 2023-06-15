import { defineStore } from 'pinia'
import { ref } from 'vue'
import { userModel } from '@/store/types/userInfo'
import { ROLETYPE } from '@/store/types/role'

export const useUserInfo = defineStore('userInfoStore', () => {
  const userInfo = ref<userModel>({})
  function setUserInfo<T extends keyof userModel>(info: Record<T, userModel[T]>) {
    const keys = Object.keys(info) as T[]
    keys.forEach((key:T) => {
      userInfo.value[key] = info[key]
    })
  }


  function getUserInfo(): userModel {
    return userInfo.value
  }

  function clearUserInfo(): void {
    userInfo.value = {}
  }

  function getRole(): ROLETYPE {
    return userInfo.value.role || ROLETYPE.NORMAL
  }


  return {
    userInfo,
    setUserInfo,
    getUserInfo,
    clearUserInfo,
    getRole
  }
})
