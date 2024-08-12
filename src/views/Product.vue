<script lang="ts" setup>
import BaseTable from "@/base/BaseTable.vue";
import ProductForm from "@/components/ProductForm.vue";
import { useCategory } from "@/composables/useCategory";
import { useProduct } from "@/composables/useProduct";
import { useAppStore } from "@/stores/app";
import { useProductStore } from "@/stores/product";
import { storeToRefs } from "pinia";
import { computed, onMounted } from "vue";

const { getProducts, deleteProduct, getSingleProduct } = useProduct();

const appStore = useAppStore();
const { isShowActionForm } = storeToRefs(appStore)

const { getCategoryList } = useCategory();

const productStore = useProductStore();

const { productList } = storeToRefs(productStore);

const tableData = computed(() => productList.value);

const tableColumns = [
  { prop: "image", label: "Ảnh", width: "auto" },
  { prop: "name", label: "Tên", width: "auto" },
  { prop: "description", label: "Mô tả", width: "auto" },
  { prop: "color", label: "Màu sắc", width: "auto" },
  { prop: "oldPrice", label: "Giá cũ", width: "auto" },
  { prop: "newPrice", label: "Giá mới", width: "auto" },
  { prop: "sold", label: "Đã bán", width: "auto" },
  { prop: "stock", label: "Tồn kho", width: "auto" },
  { prop: "status", label: "Trạng thái", width: "auto" },
];

const handleEditData = (id: number) => {
  getSingleProduct(id)
};

const handleDelete = async(id: number) => {
  await deleteProduct(id)
  await getProducts()
}

onMounted(async () => {
  getProducts();
  getCategoryList();
});
</script>

<template>
  <div class="product-container">
    <div class="product-featured">
      <el-card></el-card>
      <el-card></el-card>
      <el-card></el-card>
    </div>
    <div class="product-list">
      <BaseTable
        :data="tableData"
        :columns="tableColumns"
        @edit="handleEditData"
        @delete="handleDelete"
      />
    </div>
    <ProductForm v-if="isShowActionForm" />
  </div>
</template>

<style lang="scss" scoped>
.product-container {
  width: 100%;
  height: 100%;
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
