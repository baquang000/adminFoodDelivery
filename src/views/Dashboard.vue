<script lang="ts" setup>
import BaseTable from "@/base/BaseTable.vue";
import { storeToRefs } from "pinia";
import { computed, onMounted } from "vue";
import { useUserStore } from "@/stores/user";
import { useUser } from "@/composables/userUser";
import PieChart from "@/components/charts/PieChart.vue";
import { useChart } from "@/composables/useChart";
import { useChartsStore } from "@/stores/useChart";

const userStore = useUserStore();

const { userList } = storeToRefs(userStore);

const tableData = computed(() => userList.value);

const { getUsers, deleteUser } = useUser();
const chartStore = useChartsStore()

const { chartCount } = storeToRefs(chartStore)

const { count } = useChart()

const tableColumns = [
  { prop: "id", label: "ID người dùng", width: "auto" },
  { prop: "userName", label: "Tên người dùng", width: "auto" },
  { prop: "email", label: "Email", width: "auto" },
  { prop: "status", label: "Trạng thái", width: "auto" },
];

const handleEditData = (id: number) => {};

const handleDelete = async (id: number) => {
  await deleteUser(id);
  await getUsers();
};

onMounted(() => {
  getUsers()
  count()
});
</script>

<template>
  <div class="category-container">
    <div class="category-featured">
      <el-card><PieChart :labels="chartCount.labels" :series="chartCount.series" /></el-card>
      <el-card><PieChart /></el-card>
      <el-card><PieChart /></el-card>
      <el-card><PieChart /></el-card>
    </div>
    <div class="category-list">
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
.category-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .category-featured {
    width: 100%;
    display: flex;
    align-items: center;

    .el-card {
      height: 200px;
      flex: 1;
      margin: 20px;
    }
  }

  .category-list {
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
