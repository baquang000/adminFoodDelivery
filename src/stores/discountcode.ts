import { TypeDiscount, type TDiscountCode } from "@/common/type";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useDiscountCodeStore = defineStore("discountCodeStore", () => {
  const discountCodeList = ref<TDiscountCode[]>([]);
  const singleDiscountCode = ref<TDiscountCode>({
    name: "",
    description: "",
    percentage: TypeDiscount.PERCENTAGE,
    maxDiscountAmount: "",
    minOrderAmount: "",
    startDate: new Date(),
    endDate: new Date(),
    isActive: false,
    idShop: 1,
    typeDiscount: "",
    maxUser: 0,
    numberUse: 0,
  });
  const setDiscountCodeList = (payload: TDiscountCode[]) => {
    discountCodeList.value = payload;
  };

  const setSingleDiscountCode = (payload: TDiscountCode) => {
    singleDiscountCode.value = payload;
  };

  return {
    discountCodeList,
    setDiscountCodeList,
    singleDiscountCode,
    setSingleDiscountCode,
  };
});
