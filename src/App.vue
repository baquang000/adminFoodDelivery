<script setup lang="ts">
import { RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
import Sidebar from "./components/Sidebar.vue";


</script>

<template>
  <div class="app-container">
    <Sidebar />
    <div class="main">
      <Navbar />
      <RouterView />
    </div>
  </div>
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
