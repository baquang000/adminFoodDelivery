<script lang="ts" setup>
import BaseTable from "@/base/BaseTable.vue";
import CategoryForm from "@/components/CategoryForm.vue";

const tableData = [
  { date: "2023-01-01", name: "John Doe", address: "1234 Main St" },
  { date: "2023-01-02", name: "Jane Doe", address: "5678 Main St" },
];

const tableColumns = [
  { prop: "image", label: "Ảnh", width: "auto" },
  { prop: "name", label: "Tên", width: "auto" },
  { prop: "productNumber", label: "Số lượng sản phẩm", width: "auto" },
  { prop: "status", label: "Trạng thái", width: "auto" },
];
</script>

<template>
  <div class="category-container">
    <div class="category-featured">
      <el-card></el-card>
      <el-card></el-card>
      <el-card></el-card>
    </div>
    <div class="category-list">
      <BaseTable :data="tableData" :columns="tableColumns" />
    </div>
    <CategoryForm />
  </div>
</template>


<style lang="scss" scoped>
.category-container{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  .category-featured{
    width: 100%;
    display: flex;
    align-items: center;
  
    .el-card{
      height: 200px; 
      flex: 1; 
      margin: 20px;
    }
  }
  
  .category-list{
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