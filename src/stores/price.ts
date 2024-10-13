import type { TPrice } from "@/common/type"
import { defineStore } from "pinia"
import { ref } from "vue"

export const usePriceStore = defineStore('priceStore', () => {
    const priceList = ref<TPrice[]>([])
    const singlePrice = ref<TPrice>({
        price: ""
    })
    const setPriceList = (payload: TPrice[]) => {
        priceList.value = payload
    }

    const setSinglePrice = (payload: TPrice) => {
        singlePrice.value = payload;
      };

    return {
        priceList,
        setPriceList,
        singlePrice,
        setSinglePrice
    }
})