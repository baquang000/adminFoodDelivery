import type { TError, TOrder, TOrderDetails, TResult } from "@/common/type"
import { useOrderStore } from "@/stores/order"
import { request } from "@/utils/request"
import { AxiosError } from "axios"
import { ElMessage } from "element-plus"

export const useOrder = () => {

    const orderStore = useOrderStore()

    const getSingleOrder = async (id: number) => {
        try {
            const response = await request.get(`/order/${id}`)

            const { data } = response.data as TResult

            return data
        } catch (error) {
            if (error instanceof AxiosError) {
                const { message } = error.response?.data as TError

                return ElMessage.error(message)
            }

            ElMessage.error('Có lỗi xảy ra !')
        }
    }

    const getOrders = async () => {
        try {
            const response = await request.get('/order')

            const { data } = response.data as TResult

            orderStore.setOrderList(data)

            return data
        } catch (error) {
            if (error instanceof AxiosError) {
                const { message } = error.response?.data as TError

                return ElMessage.error(message)
            }

            ElMessage.error('Có lỗi xảy ra !')
        }
    }

    const updateOrder = async (payload: TOrder, id: number) => {
        try {
            const response = await request.put(`/order/${id}`, payload)

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

    const deleteOrder = async (id: number) => {
        try {
            const response = await request.delete(`/order/${id}`)

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

    const createOrder = async (payload: TOrder) => {
        try {
            const response = await request.post('/order', payload)

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

    const createOrderDetails = async (payload: TOrderDetails) => {
        try {
            const response = await request.post('/order-details', payload)

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


    return { getSingleOrder, getOrders, updateOrder, createOrder, deleteOrder, createOrderDetails }
}