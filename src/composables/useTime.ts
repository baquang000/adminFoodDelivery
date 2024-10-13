import type { TError, TPrice, TResult, TSuccess, TTime } from "@/common/type";
import { useTimeStore } from "@/stores/time";
import { request } from "@/utils/request";
import { AxiosError } from "axios";
import { ElMessage } from "element-plus";

export const useTime = () => {
  const timeStore = useTimeStore();

  const getSingleTime = async (id: number) => {
    try {
      const response = await request.get(`/time/${id}`);

      const { data } = response.data as TResult;

      timeStore.setSingleTime(data);

      return data;
    } catch (error) {
      if (error instanceof AxiosError) {
        const { message } = error.response?.data as TError;

        return ElMessage.error(message);
      }

      ElMessage.error("Có lỗi xảy ra !");
    }
  };

  const getTimeList = async () => {
    try {
      const response = await request.get("/time");

      timeStore.setTimeList(response.data);

      return true;
    } catch (error) {
      if (error instanceof AxiosError) {
        const { message } = error.response?.data as TError;

        return ElMessage.error(message);
      }

      ElMessage.error("Có lỗi xảy ra !");
    }
  };

  const updateTime = async (payload: TTime, id: number) => {
    try {
      const response = await request.put(`/time/${id}`, payload);

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

  const deleteTime = async (id: number) => {
    try {
      const response = await request.delete(`/time/${id}`);

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

  const createTime = async (payload: TTime) => {
    try {
      const response = await request.post("/time", payload);

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
    getSingleTime,
    getTimeList,
    updateTime,
    createTime,
    deleteTime,
  };
};
