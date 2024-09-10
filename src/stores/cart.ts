import { ref } from "vue";
import { defineStore } from "pinia";
import type { TCart, TProduct } from "@/common/type";

export const useCartStore = defineStore("cartStore", () => {
  const cartList = ref<TCart[]>([]);
  const total = ref();

  const addCart = (payload: TProduct, quantity: number) => {
    const index = cartList.value.findIndex(
      (item) => item.product.id === payload.id
    );

    if (index === -1) {
      cartList.value.push({ product: payload, quantity });
    } else {
      cartList.value = [
        ...cartList.value.slice(0, index),
        {
          ...cartList.value[index],
          quantity: cartList.value[index].quantity + quantity,
        },
        ...cartList.value.slice(index + 1),
      ];
    }

    totalValue();
  };

  const decrementCart = (productId: number) => {
    const index = cartList.value.findIndex(
      (item) => item.product.id === productId
    );

    if (index !== -1) {
      if (cartList.value[index].quantity === 1) {
        cartList.value = [
          ...cartList.value.slice(0, index),
          ...cartList.value.slice(index + 1),
        ];
      } else {
        cartList.value = [
          ...cartList.value.slice(0, index),
          {
            ...cartList.value[index],
            quantity: cartList.value[index].quantity - 1,
          },
          ...cartList.value.slice(index + 1),
        ];
      }
    }
  };

  const removeCart = (id: number) => {
    cartList.value = cartList.value.filter((item) => item.product.id !== id);

    totalValue();
  };

  const totalValue = () => {
    total.value = cartList.value.reduce((currentValue, nextValue) => {
      return (
        currentValue +
        parseFloat(nextValue.product.newPrice) * nextValue.quantity
      );
    }, 0);
  };

  return {
    cartList,
    total,
    addCart,
    removeCart,
    decrementCart,
  };
});
