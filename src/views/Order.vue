<script lang="ts" setup>
import BaseTable from "@/base/BaseTable.vue";
import { useOrder } from "@/composables/useOrder";
import { useOrderStore } from "@/stores/order";
import { storeToRefs } from "pinia";
import { computed, onMounted } from "vue";

const orderStore = useOrderStore();

const { orderList } = storeToRefs(orderStore);

const tableData = computed(() => orderList.value);

const { getOrders, deleteOrder } = useOrder();

const tableColumns = [
  { prop: "userId", label: "ID người dùng", width: "auto" },
  { prop: "totalMoney", label: "tổng tiền", width: "auto" },
  { prop: "userNote", label: "Ghi chú của người dùng", width: "auto" },
  { prop: "status", label: "Trạng thái", width: "auto" },
];

const handleEditData = (id: number) => {
  
};

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
        screen="danh mục"
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
