<script setup lang="ts">
import Overlay from "./components/Overlay.vue";
import { useAppStore } from "./stores/app";
import { storeToRefs } from "pinia";
import Adminview from "./components/Adminview.vue";

const appStore = useAppStore();

const { isShowOverlay } = storeToRefs(appStore);


</script>

<template>
  <Adminview />
  <Overlay v-if="isShowOverlay" />
</template>

<style scoped lang="scss">
.app-container {
  display: flex;

  .main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
    height: 100vh;
    overflow-y: auto;
  }
}

.web-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
