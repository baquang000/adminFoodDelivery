<script lang="ts" setup>
import BaseTable from "@/base/BaseTable.vue";
import CategoryForm from "@/components/CategoryForm.vue";
import { useCategory } from "@/composables/useCategory";
import { useAppStore } from "@/stores/app";
import { useCategoryStore } from "@/stores/category";
import { exportToExcel } from "@/utils/export";
import { storeToRefs } from "pinia";
import { computed, onMounted } from "vue";

const categoryStore = useCategoryStore();

const appStore = useAppStore();

const { isShowActionForm } = storeToRefs(appStore);

const { categoryList } = storeToRefs(categoryStore);

const tableData = computed(() => categoryList.value);

const { getCategoryList, getSingleCategory, deleteCategory } = useCategory();

const tableColumns = [
  { prop: "id", label: "#ID", width: "auto" },
  { prop: "imagePath", label: "Ảnh", width: "auto" },
  { prop: "name", label: "Tên", width: "auto" },
];

const handleEditData = (id: number) => {
  console.log(123,id);
  
  getSingleCategory(id);
};

const handleDelete = async (id: number) => {
  await deleteCategory(id);
  getCategoryList();
};


const handleExportFile = () => {
  exportToExcel(categoryList.value)
}


onMounted(() => getCategoryList());


</script>

<template>
  <div class="category-container">
    <div class="discountcode-list">
      <BaseTable :data="tableData" :columns="tableColumns" styleValue="height:700px" screen="danh mục"
        @edit="handleEditData" @delete="handleDelete" @export="handleExportFile" />
    </div>
    <CategoryForm v-if="isShowActionForm" />
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

  .discountcode-list {
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
