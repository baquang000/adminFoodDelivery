import type {
  TDiscountCode,
  TError,
  TResult,
  TSuccess,
} from "@/common/type";
import { useDiscountCodeStore } from "@/stores/discountcode";
import { request } from "@/utils/request";
import { AxiosError } from "axios";
import { ElMessage } from "element-plus";

export const useDiscountCode = () => {
  const discountCodeStore = useDiscountCodeStore();

  const getSingleDiscountCode = async (id: number) => {
    try {
      const response = await request.get(`/discount/single/${id}`);

      const { data } = response.data as TResult;

      discountCodeStore.setSingleDiscountCode(data);

      return data;
    } catch (error) {
      if (error instanceof AxiosError) {
        const { message } = error.response?.data as TError;

        return ElMessage.error(message);
      }

      ElMessage.error("Có lỗi xảy ra !");
    }
  };

  const getDiscountCodeList = async () => {
    try {
      const response = await request.get("/discount");

      discountCodeStore.setDiscountCodeList(response.data);

      return true;
    } catch (error) {
      if (error instanceof AxiosError) {
        const { message } = error.response?.data as TError;

        return ElMessage.error(message);
      }

      ElMessage.error("Có lỗi xảy ra !");
    }
  };

  const updateDiscountCode = async (payload: TDiscountCode, id: number) => {
    try {
      const response = await request.put(`/discount/${id}`, payload);

      const { message } = response.data as TSuccess;

      ElMessage.success(message);

      return true;
    } catch (error) {
      if (error instanceof AxiosError) {
        const { message } = error.response?.data as TError;

        return ElMessage.error(message);
      }

      ElMessage.error("Có lỗi xảy ra !");
    }
  };

  const deleteDiscountCode = async (id: number) => {
    try {
      const response = await request.delete(`/discount/${id}`);

      const { message } = response.data as TSuccess;

      ElMessage.success(message);

      return true;
    } catch (error) {
      if (error instanceof AxiosError) {
        const { message } = error.response?.data as TError;

        return ElMessage.error(message);
      }

      ElMessage.error("Có lỗi xảy ra !");
    }
  };

  const createDiscountCode = async (payload: TDiscountCode) => {
    try {
      const response = await request.post("/discount", payload);

      const { message } = response.data as TResult;

      ElMessage.success(message);

      return true;
    } catch (error) {
      if (error instanceof AxiosError) {
        const { message } = error.response?.data as TError;

        return ElMessage.error(message);
      }

      ElMessage.error("Có lỗi xảy ra !");
    }
  };

  return {
    getSingleDiscountCode,
    getDiscountCodeList,
    updateDiscountCode,
    createDiscountCode,
    deleteDiscountCode,
  };
};
