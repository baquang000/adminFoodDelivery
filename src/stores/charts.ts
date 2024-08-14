import { ref } from "vue";
import { defineStore } from "pinia";
import type { TPieChart } from "@/common/type";

export const useChartsStore = defineStore("chartsStore", () => {
  const chartCount = ref<TPieChart>({});
  const chartUserStat = ref<TPieChart>({});
  const chartOrderStat = ref<TPieChart>({});

  const setChartCount = (payload: TPieChart) => {
    chartCount.value = payload;
  };

  const setChartUserStat = (payload: TPieChart) => {
    chartUserStat.value = payload;
  };

  const setChartOrderStat = (payload: TPieChart) => {
    chartOrderStat.value = payload;
  };

  return {
    chartCount,
    setChartCount,
    chartUserStat,
    setChartUserStat,
    chartOrderStat,
    setChartOrderStat,
  };
});
