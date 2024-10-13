<script lang="ts" setup>
import BaseTable from "@/base/BaseTable.vue";
import TimeForm from "@/components/TimeForm.vue";
import { useTime } from "@/composables/useTime";
import { useAppStore } from "@/stores/app";
import { useTimeStore } from "@/stores/time";
import { exportToExcel } from "@/utils/export";
import { storeToRefs } from "pinia";
import { computed, onMounted } from "vue";



const timeStore = useTimeStore();

const appStore = useAppStore();

const { isShowActionForm } = storeToRefs(appStore);

const { timeList } = storeToRefs(timeStore);

const tableData = computed(() => timeList.value);

const { getTimeList, getSingleTime, deleteTime } = useTime();

const tableColumns = [
    { prop: "id", label: "#ID", width: "auto" },
    { prop: "time", label: "Thời gian", width: "auto" },
];

const handleEditData = (id: number) => {
    getSingleTime(id);
};

const handleDelete = async (id: number) => {
    await deleteTime(id);
    getTimeList();
};


const handleExportFile = () => {
    exportToExcel(timeList.value)
}


onMounted(() => getTimeList());


</script>

<template>
    <div class="time-container">
        <div class="time-list">
            <BaseTable :data="tableData" :columns="tableColumns" styleValue="height:700px" screen="Thời gian"
                @edit="handleEditData" @delete="handleDelete" @export="handleExportFile" />
        </div>
        <TimeForm v-if="isShowActionForm" />
    </div>
</template>

<style lang="scss" scoped>
.time-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .time-featured {
        width: 100%;
        display: flex;
        align-items: center;

        .el-card {
            height: 200px;
            flex: 1;
            margin: 20px;
        }
    }

    .time-list {
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
