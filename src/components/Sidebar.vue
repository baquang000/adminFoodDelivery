<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const sidebarList = [
  {
    name: "Tổng quan",
    route: "/admin/dashboard",
    icon: "pi-chart-line",
  },
  {
    name: "Danh mục",
    route: "/admin/category",
    icon: "pi-bars",
  },
  {
    name: "Sản phẩm",
    route: "/admin/product",
    icon: "pi-objects-column",
  },
  {
    name: "Đơn hàng",
    route: "/admin/order",
    icon: "pi-shopping-cart",
  },
  {
    name: "Bình luận",
    route: "/admin/comment",
    icon: "pi-comments",
  },
];

const router = useRouter()

const defaultIndexActive = ref(0);

const handleChangeSidebar = (index: number, path: string) => {
  defaultIndexActive.value = index;
  router.replace(path);
};
</script>

<template>
  <div class="sidebar-container">
    <div class="menu-list">
      <div :class="defaultIndexActive === index ? 'menu-item active' : 'menu-item'" v-for="(item, index) in sidebarList"
        :key="item.name" @click="handleChangeSidebar(index, item.route)">
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

      &.active {
        background-color: #434A50;
      }
    }
  }
}
</style>
