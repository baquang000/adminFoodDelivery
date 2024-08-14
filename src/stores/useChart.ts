import { ref } from "vue";
import { defineStore } from "pinia";
import type { TChartCount } from "@/common/type";

export const useChartsStore = defineStore("chartsStore", () => {
  const chartCount = ref<TChartCount>({});

  const setChartCount = (payload: TChartCount) => {
    chartCount.value = payload;
  };

  return {
    chartCount,
    setChartCount,
  };
});
