import type { TError, TProduct, TResult } from "@/common/type"
import { useProductStore } from "@/stores/product"
import { request } from "@/utils/request"
import { AxiosError } from "axios"
import { ElMessage } from "element-plus"

export const useProduct = () => {

    const productStore = useProductStore()

    const getSingleProduct = async (id: number) => {
        try {
            const response = await request.get(`/product/${id}`)

            const { data } = response.data as TResult

            productStore.setSingleProduct(data)

            return data
        } catch (error) {
            if (error instanceof AxiosError) {
                const { message } = error.response?.data as TError

                return ElMessage.error(message)
            }

            ElMessage.error('Có lỗi xảy ra !')
        }
    }

    const getProducts = async () => {
        try {
            const response = await request.get('/product')

            const { data } = response.data as TResult

            productStore.setProductList(data)

            return data
        } catch (error) {
            if (error instanceof AxiosError) {
                const { message } = error.response?.data as TError

                return ElMessage.error(message)
            }

            ElMessage.error('Có lỗi xảy ra !')
        }
    }

    const updateProduct = async (payload: TProduct, id: number) => {
        try {
            const response = await request.put(`/product/${id}`, payload)

            const { message } = response.data as TResult

            ElMessage.success(message)

            return true
        } catch (error) {
            if (error instanceof AxiosError) {
                const { message } = error.response?.data as TError

                return ElMessage.error(message)
            }

            ElMessage.error('Có lỗi xảy ra !')
        }
    }

    const deleteProduct = async (id: number) => {
        try {
            const response = await request.delete(`/product/${id}`)

            const { message } = response.data as TResult

            ElMessage.success(message)

            return true
        } catch (error) {
            if (error instanceof AxiosError) {
                const { message } = error.response?.data as TError

                return ElMessage.error(message)
            }

            ElMessage.error('Có lỗi xảy ra !')
        }
    }

    const createProduct = async (payload: TProduct) => {
        try {
            const response = await request.post('/product', payload)

            const { message } = response.data as TResult

            ElMessage.success(message)

            return true
        } catch (error) {
            if (error instanceof AxiosError) {
                const { message } = error.response?.data as TError

                return ElMessage.error(message)
            }

            ElMessage.error('Có lỗi xảy ra !')
        }
    }


    return { getSingleProduct, getProducts, updateProduct, createProduct, deleteProduct }
}