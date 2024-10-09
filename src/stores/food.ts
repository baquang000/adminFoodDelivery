import { ref } from "vue";
import { defineStore } from "pinia";
import type { TFood, TFoodParams } from "../common/type";

export const userFoodStore = defineStore("foodStore", () => {
  const foodList = ref<TFood[]>([]);

  const filter = ref<TFoodParams>({});
  const singleFood = ref<TFood>({
    id: 0,
    bestFood: false,
    idCategory: 0,
    description: "",
    imagePath: "",
    idPrice: 0,
    star: "",
    idTime: 0,
    title: "",
    idShop: 0,
    showFood: false,
    price: {
      id: 0,
      price: "",
    },
    time: {
      id: 0,
      time: "",
    },
    timeValue: "",
    sold: 10,
  });

  const foodSellTheMost = ref<TFood>({
    id: 0,
    bestFood: false,
    idCategory: 0,
    description: "",
    imagePath: "",
    idPrice: 0,
    star: "",
    idTime: 0,
    title: "",
    idShop: 0,
    showFood: false,
    price: {
      id: 0,
      price: "",
    },
    time: {
      id: 0,
      time: "",
    },
    timeValue: "",
    sold: 10,
  });

  const setFoodList = (payload: TFood[]) => {
    foodList.value = payload;
  };

  const setSingleFood = (payload: TFood) => {
    singleFood.value = payload;
  };

  const setFilter = (payload: TFoodParams) => {
    filter.value = payload;
  };

  const setFoodSellTheMost = (payload: TFood) => {
    foodSellTheMost.value = payload;
  };

  return {
    foodList,
    setFoodList,
    singleFood,
    setSingleFood,
    filter,
    setFilter,
    foodSellTheMost,
    setFoodSellTheMost,
  };
});
