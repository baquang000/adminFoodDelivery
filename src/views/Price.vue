<script lang="ts" setup>
import BaseTable from "@/base/BaseTable.vue";
import PriceForm from '@/components/PriceForm.vue';
import { usePrice } from '@/composables/usePrice';
import { useAppStore } from '@/stores/app';
import { usePriceStore } from '@/stores/price';
import { exportToExcel } from '@/utils/export';
import { storeToRefs } from 'pinia';
import { computed, onMounted } from 'vue';


const priceStore = usePriceStore();

const appStore = useAppStore();

const { isShowActionForm } = storeToRefs(appStore);

const { priceList } = storeToRefs(priceStore);

const tableData = computed(() => priceList.value);

const { getPriceList, getSinglePrice, deletePrice } = usePrice();

const tableColumns = [
    { prop: "id", label: "#ID", width: "auto" },
    { prop: "price", label: "Giá trị", width: "auto" },
];

const handleEditData = (id: number) => {
    getSinglePrice(id);
};

const handleDelete = async (id: number) => {
    await deletePrice(id);
    getPriceList();
};


const handleExportFile = () => {
    exportToExcel(priceList.value)
}


onMounted(() => getPriceList());


</script>

<template>
    <div class="price-container">
        <div class="price-list">
            <BaseTable :data="tableData" :columns="tableColumns" styleValue="height:700px" screen="Giá"
                @edit="handleEditData" @delete="handleDelete" @export="handleExportFile" />
        </div>
        <PriceForm v-if="isShowActionForm" />
    </div>
</template>

<style lang="scss" scoped>
.price-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .price-featured {
        width: 100%;
        display: flex;
        align-items: center;

        .el-card {
            height: 200px;
            flex: 1;
            margin: 20px;
        }
    }

    .price-list {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 20px;

        .el-input {
            margin-bottom: 20px;
        }
    }
}
</style>
