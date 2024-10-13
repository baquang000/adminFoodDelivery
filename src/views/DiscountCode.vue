<script lang="ts" setup>
import BaseTable from "@/base/BaseTable.vue";
import DiscountCodeForm from "@/components/DiscountCodeForm.vue";
import { useDiscountCode } from "@/composables/useDiscountCode";
import { useAppStore } from "@/stores/app";
import { useDiscountCodeStore } from "@/stores/discountcode";
import { exportToExcel } from "@/utils/export";
import { formatDate, formatDateIOS } from "@/utils/format";
import { storeToRefs } from "pinia";
import { computed, onMounted } from "vue";
import dayjs from "dayjs";

const discountCodeStore = useDiscountCodeStore();

const appStore = useAppStore();

const { isShowActionForm } = storeToRefs(appStore);

const { discountCodeList } = storeToRefs(discountCodeStore);

const tableData = computed(() =>
    discountCodeList.value.map((item) => ({
        ...item,
        startDate: dayjs(item.startDate).format('YYYY-MM-DD'),
        endDate: dayjs(item.endDate).format('YYYY-MM-DD')
    }))
);

const { getDiscountCodeList, getSingleDiscountCode, deleteDiscountCode } =
    useDiscountCode();

const tableColumns = [
    { prop: "id", label: "#ID", width: "auto" },
    { prop: "name", label: "Tên", width: "auto" },
    { prop: "description", label: "Chi tiết", width: "auto" },
    { prop: "percentage", label: "Giá trị", width: "auto" },
    { prop: "maxDiscountAmount", label: "Giảm tối đa", width: "auto" },
    { prop: "minOrderAmount", label: "Đơn tối thiểu", width: "auto" },
    { prop: "startDate", label: "Ngày bắt đầu", width: "auto" },
    { prop: "endDate", label: "Ngày kết thúc", width: "auto" },
    { prop: "isActive", label: "Trạng thái", width: "auto" },
    { prop: "idShop", label: "#ID cửa hàng", width: "auto" },
    { prop: "typeDiscount", label: "Loại giảm giá", width: "auto" },
    { prop: "maxUser", label: "Số lần sử dụng", width: "auto" },
    { prop: "numberUse", label: "Mỗi người dùng", width: "auto" },
];

const handleEditData = (id: number) => {
    getSingleDiscountCode(id);
};

const handleDelete = async (id: number) => {
    await deleteDiscountCode(id);
    getDiscountCodeList();
};

const handleExportFile = () => {
    exportToExcel(discountCodeList.value);
};

onMounted(() => getDiscountCodeList());
</script>

<template>
    <div class="discountcode-container">
        <div class="discountcode-list">
            <BaseTable :data="tableData" :columns="tableColumns" styleValue="height:700px" screen="Mã giảm giá"
                @edit="handleEditData" @delete="handleDelete" @export="handleExportFile" />
        </div>
        <DiscountCodeForm v-if="isShowActionForm" />
    </div>
</template>

<style lang="scss" scoped>
.discountcode-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .discountcode-featured {
        width: 100%;
        display: flex;
        align-items: center;

        .el-card {
            height: 200px;
            flex: 1;
            margin: 20px;
        }
    }

    .discountcode-list {
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
