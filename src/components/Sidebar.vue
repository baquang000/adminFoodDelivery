<script lang="ts" setup>
import { useUserStore } from "@/stores/user";
import { storeToRefs } from "pinia";
import { computed, onMounted, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

const sidebarList = [
  {
    name: "Tổng quan",
    route: "/",
    icon: "pi-chart-line",
  },
  {
    name: "Sản phẩm",
    route: "/product",
    icon: "pi-objects-column",
  },
  {
    name: "Danh mục",
    route: "/category",
    icon: "pi-bars",
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
  {
    name: "Giá",
    route: "/price",
    icon: "pi-comments",
  },
  {
    name: "Thời gian",
    route: "/time",
    icon: "pi-comments",
  },
  {
    name: "Đăng xuất",
    route: "/login",
    icon: "pi-sign-out",
  },
];

const router = useRouter();

const route = useRoute();

const userStore = useUserStore()
const { user } = storeToRefs(userStore)

const isUser = user.value || null

const defaultIndexActive = ref(Number(localStorage.getItem('sidebarIndex')) || 0);

const path = computed(() => route.path)

const handleChangeSidebar = (index: number, path: string, name?: string) => {
  localStorage.setItem('sidebarIndex', index.toString())

  if (name !== "Đăng xuất") {
    defaultIndexActive.value = index;
    router.replace(path);
  } else {
    localStorage.clear()
    userStore.setUser(null)

    router.push("/login")
  }
};

onMounted(() => console.log('ok'))

watch(() => path.value, () => {
  defaultIndexActive.value = sidebarList.findIndex(item => item.route === route.path)
})

</script>

<template>
  <el-card class="sidebar-container" v-if="isUser">
    <div class="menu-list">
      <div :class="defaultIndexActive === index ? 'menu-item active' : 'menu-item'" v-for="(item, index) in sidebarList"
        :key="item.name" @click="handleChangeSidebar(index, item.route, item.name)">
        <div style="
            border: 0.5px solid #e2e8f0;
            border-radius: 5px;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 5px;
          ">
          <i :class="'pi ' + item.icon"></i>
        </div>
        &nbsp; &nbsp; &nbsp;
        <span>{{ item.name }}</span>
      </div>
    </div>
  </el-card>
</template>

<style scoped lang="scss">
.sidebar-container {
  width: 210px;
  height: 100vh;
  color: #333;

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
        background-color: #434a50;
        color: white;
      }
    }
  }
}
</style>
