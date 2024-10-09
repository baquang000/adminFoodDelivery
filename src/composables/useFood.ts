import type { TError, TFood, TResult, TSuccess } from "@/common/type";
import { request } from "@/utils/request";
import { AxiosError } from "axios";
import { ElMessage } from "element-plus";
import { userFoodStore } from "../stores/food";

export const useFood = () => {
  const food = userFoodStore();

  const getSingleFood = async (id: number) => {
    try {
      const response = await request.get(`/foods/single/${id}`);

      const { data } = response.data as TResult;

      food.setSingleFood(data);

      return data;
    } catch (error) {
      if (error instanceof AxiosError) {
        const { message } = error.response?.data as TError;

        return ElMessage.error(message);
      }

      ElMessage.error("Có lỗi xảy ra !");
    }
  };

  const getFoodSellTheMost = async () => {
    try {
      const response = await request.get(`/foods/sell-the-most`);

      const { data } = response.data as TResult;
  
      food.setFoodSellTheMost(data);

      return data;
    } catch (error) {
      if (error instanceof AxiosError) {
        const { message } = error.response?.data as TError;

        return ElMessage.error(message);
      }

      ElMessage.error("Có lỗi xảy ra !");
    }
  };

  const getFoodByCategory = async (id: number) => {
    try {
      const response = await request.get(`/foods/category/${id}`);

      const { data } = response.data as TResult;

      return data;
    } catch (error) {
      if (error instanceof AxiosError) {
        const { message } = error.response?.data as TError;

        return ElMessage.error(message);
      }

      ElMessage.error("Có lỗi xảy ra !");
    }
  };

  const getFoods = async () => {
    try {
      const response = await request.get("/foods");

      food.setFoodList(response.data);

      return true;
    } catch (error) {
      if (error instanceof AxiosError) {
        const { message } = error.response?.data as TError;

        return ElMessage.error(message);
      }

      ElMessage.error("Có lỗi xảy ra !");
    }
  };

  const updateFood = async (payload: TFood, id: number) => {
    try {
      const { time, idTime, idPrice, ...rest } = payload;

      const response = await request.put(`/foods/${id}`, {
        ...rest,
        price: payload.price.price,
        idShop: payload.idShop?.toString(),
        timeValue: time.time,
      });

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

  const deleteFood = async (id: number) => {
    try {
      const response = await request.delete(`/foods/${id}`);

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

  const createFood = async (payload: TFood) => {
    try {
      const { time, idTime, idPrice, ...rest } = payload;

      const response = await request.post("/foods", {
        ...rest,
        price: payload.price.price,
        timeValue: time.time,
      });

      const { message } = response.data as TResult;

      ElMessage.success(message);

      return true;
    } catch (error) {
      if (error instanceof AxiosError) {
        const { message } = error.response?.data as TError;

        ElMessage.error(message);

        return false;
      }

      ElMessage.error("Có lỗi xảy ra !");

      return false;
    }
  };

  return {
    getSingleFood,
    getFoods,
    updateFood,
    createFood,
    deleteFood,
    getFoodByCategory,
    getFoodSellTheMost,
  };
};
