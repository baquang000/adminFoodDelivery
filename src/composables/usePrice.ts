import type { TError, TPrice, TResult, TSuccess } from "@/common/type";
import { usePriceStore } from "@/stores/price";
import { request } from "@/utils/request";
import { AxiosError } from "axios";
import { ElMessage } from "element-plus";

export const usePrice = () => {
  const priceStore = usePriceStore();

  const getSinglePrice = async (id: number) => {
    try {
      console.log("getSingleCategory", id);
      const response = await request.get(`/price/${id}`);

      const { data } = response.data as TResult;

      priceStore.setSinglePrice(data);

      return data;
    } catch (error) {
      if (error instanceof AxiosError) {
        const { message } = error.response?.data as TError;

        return ElMessage.error(message);
      }

      ElMessage.error("Có lỗi xảy ra !");
    }
  };

  const getPriceList = async () => {
    try {
      const response = await request.get("/price");

      priceStore.setPriceList(response.data);

      return true;
    } catch (error) {
      if (error instanceof AxiosError) {
        const { message } = error.response?.data as TError;

        return ElMessage.error(message);
      }

      ElMessage.error("Có lỗi xảy ra !");
    }
  };

  const updatePrice = async (payload: TPrice, id: number) => {
    try {
      const response = await request.put(`/price/${id}`, payload);

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

  const deletePrice = async (id: number) => {
    try {
      const response = await request.delete(`/price/${id}`);

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

  const createPrice = async (payload: TPrice) => {
    try {
      const response = await request.post("/price", payload);

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
    getSinglePrice,
    getPriceList,
    updatePrice,
    createPrice,
    deletePrice,
  };
};
