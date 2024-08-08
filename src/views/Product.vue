<script lang="ts" setup>
import BaseTable from "@/base/BaseTable.vue";
import ProductForm from "@/components/ProductForm.vue";

const tableData = [
  { date: "2023-01-01", name: "John Doe", address: "1234 Main St" },
  { date: "2023-01-02", name: "Jane Doe", address: "5678 Main St" },
];

const tableColumns = [
  { prop: "image", label: "Ảnh", width: "auto" },
  { prop: "name", label: "Tên", width: "auto" },
  { prop: "description", label: "Mô tả", width: "auto" },
  { prop: "color", label: "Màu sắc", width: "auto" },
  { prop: "oldPrice", label: "Giá cũ", width: "auto" },
  { prop: "newPrice", label: "Giá mới", width: "auto" },
  { prop: "sold", label: "Đã bán", width: "auto" },
  { prop: "stock", label: "Tồn kho", width: "auto" }
];
</script>

<template>
  <div class="product-container">
    <div class="product-featured">
      <el-card></el-card>
      <el-card></el-card>
      <el-card></el-card>
    </div>
    <div class="product-list">
      <BaseTable :data="tableData" :columns="tableColumns" />
    </div>
    <ProductForm />
  </div>
</template>


<style lang="scss" scoped>
.product-container{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  .product-featured{
    width: 100%;
    display: flex;
    align-items: center;
  
    .el-card{
      height: 200px; 
      flex: 1; 
      margin: 20px;
    }
  }
  
  .product-list{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;
    .el-input{
      margin-bottom: 20px;
    }
  }
}

</style>