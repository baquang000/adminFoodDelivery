import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { TUser } from '@/common/type'

export const useUserStore = defineStore('userStore', () => {
  const userList = ref<TUser[]>([])

  const setUserList = (payload: TUser[]) => {
    userList.value = payload
  }

  return {
    userList,
    setUserList
  }
})
