import type { TTime } from "@/common/type";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useTimeStore = defineStore("timeStore", () => {
  const timeList = ref<TTime[]>([]);
  const singleTime = ref<TTime>({
    time: "",
  });
  const setTimeList = (payload: TTime[]) => {
    timeList.value = payload;
  };

  const setSingleTime = (payload: TTime) => {
    singleTime.value = payload;
  };

  return {
    timeList,
    setTimeList,
    singleTime,
    setSingleTime,
  };
});
