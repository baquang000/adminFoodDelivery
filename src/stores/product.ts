import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { TProduct } from '@/common/type'

export const useProductStore = defineStore('productStore', () => {
    const productList = ref<TProduct[]>([])

    const setProductList = (payload: TProduct[]) => {
        productList.value = payload
    }

    return {
        productList,
        setProductList
    }
})
