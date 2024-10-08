<script lang="ts" setup>
import BaseTable from "@/base/BaseTable.vue";
import { ORDER_STATUS } from "@/common/enum";
import ProductForm from "@/components/ProductForm.vue";
import { useCategory } from "@/composables/useCategory";
import { useOrder } from "@/composables/useOrder";
import { useAppStore } from "@/stores/app";
import { useOrderStore } from "@/stores/order";
import { exportToExcel } from "@/utils/export";
import { formatCurrency } from "@/utils/format";
import { storeToRefs } from "pinia";
import { computed, onMounted, ref, watch } from "vue";
import { useFood } from "../composables/useFood";
import { userFoodStore } from "@/stores/food";

const { foodList, foodSellTheMost } = storeToRefs(userFoodStore())

const { getFoods, deleteFood, getSingleFood, getFoodSellTheMost } = useFood();

const appStore = useAppStore();
const { isShowActionForm } = storeToRefs(appStore);

const { getCategoryList } = useCategory();
const { getAll } = useOrder();


const { orderList } = storeToRefs(useOrderStore());


const dataTable = computed(() => foodList.value.map(item => ({ ...item, time: item.time.time })))



const tableColumns = [
  { prop: "id", label: "#ID", width: "auto" },
  { prop: "bestFood", label: "Best food", width: "auto" },
  { prop: "idCategory", label: "Category ID", width: "auto" },
  { prop: "title", label: "Food Name", width: "auto" },
  { prop: "description", label: "Description", width: "300px" },
  { prop: "imagePath", label: "Image", width: "auto" },
  { prop: "price", label: "Price", width: "auto" },
  { prop: "star", label: "Star", width: "auto" },
  { prop: "time", label: "Time", width: "auto" },
  { prop: "idShop", label: "Shop ID", width: "auto" },
  { prop: "showFood", label: "Show food", width: "auto" },
];

const handleEditData = (id: number) => {
  getSingleFood(id);
};

const handleDelete = (id: number) => {
  deleteFood(id)
  getFoods()
};

const selled = ref(0);
const revenua = ref(0);
//const sellTotal = ref(0);


// watch(
//   () => foodList.value,
//   () => {
//     sellTotal.value += foodList.value.reduce((x, y) => {
//       return x + parseFloat(y.price.price);
//     }, 0);
//   }
// );

watch(
  () => orderList.value,
  () => {
    const totalPrice = orderList.value.reduce((total, order) => {
      if (order.orderStatus === ORDER_STATUS.SUCCESS || order.orderStatus === ORDER_STATUS.FOODBACK) {
        return total + parseFloat(order.totalMoney);
      }
      return total;
    }, 0);
    revenua.value = totalPrice;

  },
);

watch(
  () => orderList.value,
  () => {
    const totalOrderDetails = orderList.value.reduce((total, order) => {
      if (order.orderStatus === ORDER_STATUS.SUCCESS || order.orderStatus === ORDER_STATUS.FOODBACK) {
        return total + (order.orderDetails?.reduce((subTotal, orderDetail) => {
          return subTotal + (orderDetail.quantity || 0);
        }, 0) || 0);
      } else {
        return total;
      }
    }, 0);
    selled.value = totalOrderDetails
  },
);

const handleExportFile = () => {
  exportToExcel(foodList.value)
}

onMounted(() => {
  getFoods()
  getCategoryList()
  getAll()
  getFoodSellTheMost()
});

</script>

<template>
  <div class="product-container">
    <div class="product-featured">
      <el-card style="display: flex; align-items: center; justify-content: center"><span>Số lượng:
          <b style="font-size: 25px">{{ foodList.length }}</b></span></el-card>
      <el-card style="display: flex; align-items: center; justify-content: center"><span>Đã bán: <b
            style="font-size: 25px">{{ selled }}</b></span></el-card>
      <el-card style="display: flex; align-items: center; justify-content: center"><span>Tổng doanh thu:
          <b style="font-size: 25px; color: red">{{
            formatCurrency(revenua)
          }}</b></span><br />
      </el-card>
      <el-card style="display: flex; align-items: center; justify-content: center"><span> Sản phẩm bán chạy nhất:
        </span><br />
        <div style="
            display: flex;
            margin-top: 10px;
            cursor: pointer;
            box-shadow: 2px 2px 25px 0px rgba(45, 103, 191, 0.75);
            -webkit-box-shadow: 2px 2px 25px 0px rgba(45, 103, 191, 0.75);
            -moz-box-shadow: 2px 2px 25px 0px rgba(45, 103, 191, 0.75);
            padding: 10px;
            border-radius: 5px;
          ">
          <img width="90x" height="90px" style="object-fit: cover" :src="foodSellTheMost?.imagePath" alt="" />
          <div style="
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              margin-left: 10px;
              border-radius: 5px;
            ">
            <span>#ID: <b>{{ foodSellTheMost?.id }}</b></span>
            <span>Giá :
              <b style="color: blue">
                {{ formatCurrency(foodSellTheMost?.price.price) }}</b></span>
          </div>
        </div>
      </el-card>
    </div>
    <div class="product-list">
      <BaseTable styleValue="height:80vh" :data="dataTable" :columns="tableColumns" screen="sản phẩm"
        @edit="handleEditData" @delete="handleDelete" @export="handleExportFile" />
    </div>
    <ProductForm v-if="isShowActionForm" />
  </div>
</template>

<style lang="scss" scoped>
.product-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .product-featured {
    width: 100%;
    display: flex;
    align-items: center;

    .el-card {
      height: 200px;
      flex: 1;
      margin: 20px;
    }
  }

  .product-list {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;

    .el-input {
      margin-bottom: 20px;
    }
  }
}
</style>
