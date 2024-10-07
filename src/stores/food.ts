import { ref } from "vue";
import { defineStore } from "pinia";
import type { TFood, TFoodParams } from "../common/type";

export const foodStore = defineStore("foodStore", () => {
  const foodList = ref<TFood[]>([]);

  const filter = ref<TFoodParams>({});
  const singleFood = ref<TFood>({
    bestFood: false,
    categoryId: 0,
    description: "",
    imagePath: "",
    price: {
      id: 0,
      price: ""
    },
    star: "",
    time: {
      id: 0,
      time: ""
    },
    timeId: 0,
    priceId: 0,
    title: "",
    idShop: "",
    showFood: true,
  })

  const setFoodList = (payload: TFood[]) => {
    foodList.value = payload;
  };

  const setSingleFood = (payload: TFood) => {
    singleFood.value = payload;
  };

  const setFilter = (payload: TFoodParams) => {
    filter.value = payload;
  };

  return {
    foodList,
    setFoodList,
    singleFood,
    setSingleFood,
    filter,
    setFilter,
  };
});
