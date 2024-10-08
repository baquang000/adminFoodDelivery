<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue';
import Sidebar from './Sidebar.vue';
import { RouterView } from "vue-router";
import { storeToRefs } from 'pinia';
import { useUserStore } from '@/stores/user';

const token = ref(null)

const { user } = storeToRefs(useUserStore())

const setToken = () => {
    token.value = JSON.parse(localStorage.getItem('user') as string)?.accessToken
}

watch(() => user.value, () => setToken())

onMounted(() => setToken())

</script>

<template>
    <div class="app-container">
        <Sidebar v-if="token && user" />
        <div class="main">
            <RouterView />
        </div>
    </div>
</template>


<style lang="scss" scoped>
.app-container {
    display: flex;
    width: 100%;
    height: 100vh;
    overflow-y: hidden;

    .main {
        display: flex;
        flex-direction: column;
        align-items: center;
        flex: 1;
        width: 100%;
        height: 100%;
        overflow-y: hidden;
    }
}
</style>