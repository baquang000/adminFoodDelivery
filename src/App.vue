<script setup lang="ts">
import { RouterView, useRoute } from "vue-router";
import Navbar from "./components/Navbar.vue";
import Sidebar from "./components/Sidebar.vue";
import Overlay from "./components/Overlay.vue";
import { useAppStore } from "./stores/app";
import { storeToRefs } from "pinia";
import { computed } from "vue";
import Home from "./frontend/views/Home.vue";

const appStore = useAppStore();

const { isShowOverlay } = storeToRefs(appStore);
const route = useRoute();

const isWeb = computed(() => route.path.includes("web"));

</script>

<template>
  <div v-if="!isWeb" class="app-container">
    <Sidebar />
    <div class="main">
      <Navbar />
      <RouterView />
    </div>
  </div>
  <div v-else class="web-container">
     <Home/>
  </div>

  <Overlay v-if="isShowOverlay" />
</template>

<style scoped lang="scss">
.app-container {
  display: flex;

  .main {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    height: 100vh;
    overflow-y: auto;
  }
}

.web-container{
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
