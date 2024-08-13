import type { TError, TResult, TUser } from "@/common/type"
import { useUserStore } from "@/stores/user"
import { request } from "@/utils/request"
import { AxiosError } from "axios"
import { ElMessage } from "element-plus"

export const useUser = () => {

  const userStore = useUserStore()

  const getSingleUser = async (id: number) => {
    try {
      const response = await request.get(`/user/${id}`)

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

  const getUsers = async () => {
    try {
      const response = await request.get('/user')

      const { data } = response.data as TResult

      userStore.setUserList(data)

      return data
    } catch (error) {
      if (error instanceof AxiosError) {
        const { message } = error.response?.data as TError

        return ElMessage.error(message)
      }

      ElMessage.error('Có lỗi xảy ra !')
    }
  }

  const updateUser = async (payload: TUser, id: number) => {
    try {
      const response = await request.put(`/user/${id}`, payload)

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

  const deleteUser = async (id: number) => {
    try {
      const response = await request.delete(`/user/${id}`)

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

  const createUser = async (payload: TUser) => {
    try {
      const response = await request.post('/user', payload)

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


  return { getSingleUser, getUsers, updateUser, createUser, deleteUser }
}