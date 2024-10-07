import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { TCategory } from '@/common/type'

export const useCategoryStore = defineStore('categoryStore', () => {
    const categoryList = ref<TCategory[]>([])
    const singleCategory = ref<TCategory>({
        name: "",
        imagePath: "",
    })
    const setCategoryList = (payload: TCategory[]) => {
        categoryList.value = payload
    }

    const setSingleCategory = (payload: TCategory) => {
        singleCategory.value = payload;
      };

    return {
        categoryList,
        setCategoryList,
        singleCategory,
        setSingleCategory
    }
})
