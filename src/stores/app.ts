import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useAppStore = defineStore('appStore', () => {
  const isShowOverlay = ref<boolean>(false)
  const isShowActionForm = ref<boolean>(false)

  const setIsShowOverlay = (payload: boolean) => {
    isShowOverlay.value = payload
  }

  const setIsShowActionForm = (payload: boolean) => {
    isShowActionForm.value = payload
  }

  return {
    isShowOverlay,
    setIsShowOverlay,
    isShowActionForm,
    setIsShowActionForm
  }
})
