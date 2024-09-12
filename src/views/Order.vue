<script lang="ts" setup>
import BaseTable from "@/base/BaseTable.vue";
import { useOrder } from "@/composables/useOrder";
import { useOrderStore } from "@/stores/order";
import { storeToRefs } from "pinia";
import { computed, onMounted } from "vue";

const orderStore = useOrderStore();

const { orderList } = storeToRefs(orderStore);

const tableData = computed(() =>
  orderList.value?.map((item) => {
    return {
      id: item.id,
      userId: item.user?.id,
      totalMoney: item.totalMoney,
      userNote: item.userNote,
      orderStatus: item.orderStatus,
      email: item.user?.email,
      userName: item.user?.userName,
      phoneNumber: item.user?.userInfo?.phoneNumber,
      address: item.user?.userInfo?.address,
    };
  })
);

const { getOrders, deleteOrder } = useOrder();

const tableColumns = [
  { prop: "userId", label: "ID người dùng", width: "auto" },
  { prop: "email", label: "Email", width: "auto" },
  { prop: "phoneNumber", label: "Số điện thoại", width: "auto" },
  { prop: "address", label: "Địa chỉ", width: "auto" },
  { prop: "userName", label: "Tên người dùng", width: "auto" },
  { prop: "totalMoney", label: "Tổng tiền", width: "auto" },
  { prop: "userNote", label: "Ghi chú của người dùng", width: "auto" },
  { prop: "orderStatus", label: "Trạng thái", width: "auto" },
];

const handleEditData = (id: number) => {};

const handleDelete = async (id: number) => {
  await deleteOrder(id);
  await getOrders();
};

onMounted(() => getOrders());
</script>

<template>
  <div class="order-container">
    <div class="order-featured">
      <el-card></el-card>
      <el-card></el-card>
      <el-card></el-card>
      <el-card></el-card>
    </div>
    <div class="order-list">
      <BaseTable
        :data="tableData"
        :columns="tableColumns"
        :isHiddenComponent="true"
        screen="đơn hàng"
        @edit="handleEditData"
        @delete="handleDelete"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
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
