<script lang="ts" setup>
import { ref } from "vue";

const sidebarList = [
  {
    name: "Tổng quan",
    route: "/",
    icon: "pi-chart-line",
  },
  {
    name: "Danh mục",
    route: "/category",
    icon: "pi-bars",
  },
  {
    name: "Sản phẩm",
    route: "/product",
    icon: "pi-objects-column",
  },
  {
    name: "Đơn hàng",
    route: "/order",
    icon: "pi-shopping-cart",
  },
  {
    name: "Bình luận",
    route: "/comment",
    icon: "pi-comments",
  },
];

const defaultIndexActive = ref(0);

const handleChangeSidebar = (index : number) => {
  defaultIndexActive.value = index;
};
</script>

<template>
  <div class="sidebar-container">
    <div class="menu-list">
      <div
        :class="defaultIndexActive === index ? 'menu-item active' : 'menu-item'"
        v-for="(item, index) in sidebarList"
        :key="item.name"
        @click="handleChangeSidebar(index)"
      >
        <i :class="'pi ' + item.icon"></i>
        &nbsp; &nbsp; &nbsp;
        <span>{{ item.name }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.sidebar-container {
  width: 210px;
  height: 100vh;
  background-color: #545c64;
  color: #ffffff;

  .menu-list {
    width: 100%;
    height: 100vh;
    overflow-y: auto;

    .menu-item {
      width: 100%;
      padding: 0 10px;
      height: 60px;
      display: flex;
      align-items: center;
      margin-bottom: 15px;
      cursor: pointer;

      &.active{
        background-color: #434A50;
      }
    }
  }
}
</style>
