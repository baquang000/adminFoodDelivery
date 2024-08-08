<script setup lang="ts">
import { RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
import Sidebar from "./components/Sidebar.vue";
import Overlay from "./components/Overlay.vue";
import { useAppStore } from "./stores/app";
import { storeToRefs } from "pinia";

const appStore =  useAppStore()

const { isShowOverlay } = storeToRefs(appStore)

</script>

<template>
  <div class="app-container">
    <Sidebar />
    <div class="main">
      <Navbar />
      <RouterView />
    </div>
  </div>
  <Overlay v-if="isShowOverlay"/>
</template>

<style scoped lang="scss">
  .app-container{
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
</style>
