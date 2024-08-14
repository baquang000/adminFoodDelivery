import type { TError, TResult } from "@/common/type";
import { useChartsStore } from "@/stores/useChart";
import { request } from "@/utils/request";
import { AxiosError } from "axios";
import { ElMessage } from "element-plus";

export const useChart = () => {
  const chartsStore = useChartsStore();

  const count = async () => {
    try {
      const response = await request.get(`/charts/count`);

      const { data } = response.data as TResult;

      chartsStore.setChartCount(data);

      return data;
    } catch (error) {
      if (error instanceof AxiosError) {
        const { message } = error.response?.data as TError;

        return ElMessage.error(message);
      }

      ElMessage.error("Có lỗi xảy ra !");
    }
  };

  return { count };
};
