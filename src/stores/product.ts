import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { TProduct } from '@/common/type'

export const useProductStore = defineStore('productStore', () => {
    const productList = ref<TProduct[]>([])
    const singleProduct = ref<TProduct>({
        name: '',
        image: '',
        oldPrice: '',
        newPrice: '',
        stock: 0,
        sold: 0,
        description: '',
        color: '',
        categoryId: null
    })

    const setProductList = (payload: TProduct[]) => {
        productList.value = payload
    }

    const setSingleProduct = (payload: TProduct) => {
        singleProduct.value = payload
    }

    return {
        productList,
        setProductList,
        singleProduct,
        setSingleProduct
    }
})
