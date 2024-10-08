<script lang="ts" setup>
import BaseTable from "@/base/BaseTable.vue";
import { useOrder } from "@/composables/useOrder";
import { useOrderStore } from "@/stores/order";
import { storeToRefs } from "pinia";
import { computed, onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";

export type TOrderDetails = {
  id: number;
  idOrder: number;
  idFood: number;
  quantity: number;
  price: number;
  title: string;
  imagePath: string;
};

type TStatus = {
  content: string;
  color: string;
  key: string;
};

const orderStore = useOrderStore();

const { singleOrder } = storeToRefs(orderStore);
const tableData = ref<TOrderDetails[]>([]);
const route = useRoute();

const id = computed(() => parseInt(route.params.id as string));

const { getSingleOrder } = useOrder();

const tableColumns = [
  { prop: "id", label: "#Id", width: "auto" },
  { prop: "idOrder", label: "#Id đơn hàng", width: "auto" },
  { prop: "idFood", label: "#Id sản phẩm", width: "auto" },
  { prop: "quantity", label: "Số lượng", width: "auto" },
  { prop: "price", label: "giá", width: "auto" },
  { prop: "title", label: "Tên", width: "auto" },
  { prop: "imagePath", label: "Ảnh", width: "auto" },
];

const status = ref<TStatus[]>([
  {
    content: "Chờ duyệt",
    color: "#0bbd87",
    key: "PENDING",
  },
  {
    content: "Đang giao hàng",
    color: "#0bbd87",
    key: "DELIVERY",
  },
  {
    content: "Đơn hàng hoàn tất",
    color: "#0bbd87",
    key: "SUCCESS",
  },
  {
    content: "Đã hủy đơn",
    color: "#0bbd87",
    key: "CANCEL",
  },
]);

watch(
  () => singleOrder.value,
  () => {
    
    status.value = status.value.map((item) => ({
      ...item,
      color: singleOrder.value?.orderStatus === item.key ? "#0bbd87" : "",
    }));
  }
);

const handleEditData = () => { };

onMounted(async () => {
  await getSingleOrder(id.value);

  tableData.value = singleOrder.value?.orderDetails?.map((item) => {
    return {
      id: item.id,
      idOrder: item.idOrder,
      idFood: item.idFood,
      quantity: item.quantity,
      price: item.price,
      imagePath: item.imagePath,
      title: item.title,
    } as TOrderDetails;
  }) as TOrderDetails[];
});
</script>

<template>
  <div class="order-details-container">
    <el-card style="margin-top: 20px;">
      <el-timeline style="max-width: 600px; width: 250px; margin-top: 25px; color: gray">
        <el-timeline-item style="height: 100px;" v-for="(activity, index) in status" :key="index"
          :color="activity.color">
          {{ activity.content }}
        </el-timeline-item>
      </el-timeline>
    </el-card>
    <div class="order-container">
      <div class="order-list">
        <BaseTable :data="tableData" :columns="tableColumns" :isHiddenComponent="true" :isHiddenAction="true"
          screen="chi tiết đơn hàng" @edit="handleEditData" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.order-details-container {
  width: 100%;
  display: flex;
  align-items: flex-start;
  padding: 20px;
}

.order-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .order-featured {
    width: 100%;
    display: flex;
    align-items: center;

    .el-card {
      height: 200px;
      flex: 1;
      margin: 20px;
    }
  }

  .order-list {
    width: 100%;
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
