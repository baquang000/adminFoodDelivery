<script lang="ts" setup>
import BaseTable from "@/base/BaseTable.vue";

const tableData = [
  { date: "2023-01-01", name: "John Doe", address: "1234 Main St" },
  { date: "2023-01-02", name: "Jane Doe", address: "5678 Main St" },
];

const tableColumns = [
  { prop: "date", label: "Date", width: "180" },
  { prop: "name", label: "Name", width: "180" },
  { prop: "address", label: "Address", width: "180" },
  { prop: "age", label: "age", width: "180" }
];
</script>

<template>
  <div class="product-featured">
    <el-card></el-card>
    <el-card></el-card>
    <el-card></el-card>
  </div>
  <div class="product-list">
    <el-input style="width: 240px; height: 40px" placeholder="Tìm kiếm sản phẩm..." />
    <BaseTable :data="tableData" :columns="tableColumns" />
  </div>
</template>


<style lang="scss" scoped>
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
</style>