<script lang="ts" setup>
import { ACTION_ENUM } from '@/common/enum';
import { TypeDiscount, type TDiscountCode } from '@/common/type';
import { useDiscountCode } from '@/composables/useDiscountCode';
import { useAppStore } from '@/stores/app';
import { useDiscountCodeStore } from '@/stores/discountcode';
import type { FormInstance, FormRules } from 'element-plus';
import { storeToRefs } from 'pinia';
import { computed, onUnmounted, reactive, ref, watch } from 'vue';

const appStore = useAppStore();
const discountCodeStore = useDiscountCodeStore();

const {
    createDiscountCode,
    getDiscountCodeList,
    updateDiscountCode
} = useDiscountCode();
const { singleDiscountCode } = storeToRefs(discountCodeStore);

const { actionType } = storeToRefs(appStore);

const actionText = computed(() =>
    actionType.value === ACTION_ENUM.CREATE ? "Tạo" : "Cập nhật"
);

const ruleFormRef = ref<FormInstance>()

const handleCloseForm = () => {
    appStore.setIsShowActionForm(false);
    appStore.setIsShowOverlay(false);
};

const ruleForm = reactive<TDiscountCode>({
    name: "",
    description: "",
    percentage: "",
    maxDiscountAmount: "",
    minOrderAmount: "",
    startDate: null,
    endDate: null,
    isActive: false,
    idShop: 1,
    typeDiscount: TypeDiscount.PERCENTAGE,
    maxUser: 0,
    numberUse: 0,
})

const rules = reactive<FormRules<TDiscountCode>>({
    name: [
        { required: true, message: 'Tên không được bỏ trống', trigger: ['change', 'blur'] },
    ],
    description: [
        { required: true, message: 'Chi tiết không được bỏ trống', trigger: ['change', 'blur'] },
    ],
    percentage: [
        { required: true, message: 'Giá trị không được bỏ trống', trigger: ['change', 'blur'] },
    ],
    maxDiscountAmount: [
        { required: true, message: 'Tiền giảm tối đa không được bỏ trống', trigger: ['change', 'blur'] },
    ],
    minOrderAmount: [
        { required: true, message: 'Đơn tối thiểu không được bỏ trống', trigger: ['change', 'blur'] },
    ],
    startDate: [
        { required: true, message: 'Ngày bắt đầu không được bỏ trống', trigger: ['change', 'blur'] },
    ],
    endDate: [
        { required: true, message: 'Ngày kết thúc không được bỏ trống', trigger: ['change', 'blur'] },
    ],
    idShop: [
        { required: true, message: 'Id shop không được bỏ trống', trigger: ['change', 'blur'] },
    ],
    typeDiscount: [
        { required: true, message: 'Loại mã giảm giá không được bỏ trống', trigger: ['change', 'blur'] },
    ],
    maxUser: [
        { required: true, message: 'Số lần dùng tối đa không được bỏ trống', trigger: ['change', 'blur'] },
    ],
    numberUse: [
        { required: true, message: 'Mỗi người dùng số lần không được bỏ trống', trigger: ['change', 'blur'] },
    ],
})



const handleSubmit = async () => {
    await ruleFormRef?.value?.validate(async (valid, fields) => {
        if (valid) {
            actionType.value === ACTION_ENUM.CREATE
                ? await createDiscountCode(ruleForm)
                : await updateDiscountCode(ruleForm, singleDiscountCode.value.id as number);
            await getDiscountCodeList();
            handleCloseForm();
        } else {
            console.log('error submit!', fields)
        }
    })
};


watch(
    () => singleDiscountCode.value,
    () => {
        ruleForm.name = singleDiscountCode.value.name,
            ruleForm.description = singleDiscountCode.value.description,
            ruleForm.percentage = singleDiscountCode.value.percentage,
            ruleForm.maxDiscountAmount = singleDiscountCode.value.maxDiscountAmount,
            ruleForm.minOrderAmount = singleDiscountCode.value.minOrderAmount,
            ruleForm.startDate = singleDiscountCode.value.startDate,
            ruleForm.endDate = singleDiscountCode.value.endDate,
            ruleForm.idShop = singleDiscountCode.value.idShop,
            ruleForm.typeDiscount = singleDiscountCode.value.typeDiscount,
            ruleForm.maxUser = singleDiscountCode.value.maxUser,
            ruleForm.numberUse = singleDiscountCode.value.numberUse
    }
);


onUnmounted(() => {
    discountCodeStore.setSingleDiscountCode({
        id: 0,
        name: "",
        description: "",
        percentage: "",
        maxDiscountAmount: "",
        minOrderAmount: "",
        startDate: null,
        endDate: null,
        isActive: false,
        idShop: 1,
        typeDiscount: "",
        maxUser: 0,
        numberUse: 0,
    });

    appStore.setActionType(ACTION_ENUM.CREATE);
});
</script>

<template>
    <el-card class="discountcode-form-container">
        <div class="top">
            <h2>{{ actionText }} Mã giảm giá</h2>
            <el-icon style="cursor: pointer; font-size: 16px" @click="handleCloseForm">
                <CloseBold />
            </el-icon>
        </div>
        <el-form ref="ruleFormRef" :rules="rules" :model="ruleForm">
            <el-form-item label="Tên" label-position="top" prop="name">
                <el-input v-model="ruleForm.name" placeholder="Nhập tên" />
            </el-form-item>

            <el-form-item label="Loại mã" label-position="top" prop="typeDiscount">
                <el-select v-model="ruleForm.typeDiscount" placeholder="Loại mã">
                    <el-option v-for="type in TypeDiscount" :key="type" :label="type" :value="type" />
                </el-select>
            </el-form-item>
            <el-form-item label="Giá trị" label-position="top" prop="percentage">
                <el-input v-model="ruleForm.percentage" placeholder="Nhập giá trị" />
            </el-form-item>
            <el-form-item label="Giảm Tối đa" label-position="top" prop="maxDiscountAmount">
                <el-input v-model="ruleForm.maxDiscountAmount" placeholder="Nhập giảm tối đa" />
            </el-form-item>
            <el-form-item label="Đơn tối thiểu" label-position="top" prop="minOrderAmount">
                <el-input v-model="ruleForm.minOrderAmount" placeholder="Nhập đơn tối thiểu" />
            </el-form-item>
            <el-form-item label="Ngày bắt đầu" label-position="top" prop="startDate">
                <el-date-picker v-model="ruleForm.startDate" type="date" placeholder="Nhập thời gian bắt đầu" />
            </el-form-item>
            <el-form-item label="Ngày kết thúc" label-position="top" prop="endDate">
                <el-date-picker v-model="ruleForm.endDate" type="date" placeholder="Nhập thời gian kết thúc" />
            </el-form-item>
            <el-form-item label="Id cửa hàng" label-position="top" prop="idShop">
                <el-input type="number" v-model.number="ruleForm.idShop" placeholder="Nhập id cửa hàng" />
            </el-form-item>
            <el-form-item label="Số người dùng tối đa" label-position="top" prop="maxUser">
                <el-input type="number" v-model.number="ruleForm.maxUser" placeholder="Nhập số người dùng tối đã" />
            </el-form-item>
            <el-form-item label="Mỗi người dùng" label-position="top" prop="numberUse">
                <el-input type="number" v-model.number="ruleForm.numberUse" placeholder="Nhập mỗi người dùng" />
            </el-form-item>
            <el-form-item label="Trạng thái" label-position="top" prop="isActive">
                <el-input v-model="ruleForm.isActive" placeholder="Nhập trạng thái" />
            </el-form-item>
            <el-form-item label="Chi tiết" label-position="top" prop="description">
                <el-input v-model="ruleForm.description" placeholder="Nhập chi tiết" />
            </el-form-item>
            <div class="bottom">
                <el-button type="info" @click="handleCloseForm">Hủy</el-button>
                <el-button type="success" @click="handleSubmit">{{
                    actionType === ACTION_ENUM.CREATE ? "Thêm" : "Sửa"
                }}</el-button>
            </div>
        </el-form>
    </el-card>
</template>

<style scoped lang="scss">
.discountcode-form-container {
    width: 30vw;
    height: 90vh;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    overflow-y: auto;
    z-index: 10;

    &::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        border-radius: 10px;
        background-color: #f5f5f5;
    }

    .top {
        width: 100%;
        display: flex;
        justify-content: space-between;

        .el-icon {
            cursor: pointer;
            font-size: 25px;
        }
    }

    .el-form {
        margin-top: 30px;
        //position: relative;

        .el-input {
            height: 40px;
        }

        .bottom {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            //position: absolute;
            margin-top: 20px;
            gap: 10px;
            /* right: 0;
            bottom: 4px; */

            .el-button {
                height: 50px;
                width: 120px;
            }
        }
    }
}

.discountcode-form-container::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #f5f5f5;
}

.discountcode-form-container::-webkit-scrollbar {
    width: 6px;
    background-color: #f5f5f5;
}

.discountcode-form-container::-webkit-scrollbar-thumb {
    background-color: rgba(128, 128, 128, 0.562);
}
</style>
