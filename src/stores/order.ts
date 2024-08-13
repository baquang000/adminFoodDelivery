import { ref } from "vue";
import { defineStore } from "pinia";
import type { TOrder } from "@/common/type";

export const useOrderStore = defineStore("orderStore", () => {
  const orderList = ref<TOrder[]>([]);

  const setOrderList = (payload: TOrder[]) => {
    orderList.value = payload;
  };

  return {
    orderList,
    setOrderList,
  };
});
