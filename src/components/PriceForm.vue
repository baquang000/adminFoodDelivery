<script lang="ts" setup>
import { ACTION_ENUM } from '@/common/enum';
import type { TPrice } from '@/common/type';
import { usePrice } from '@/composables/usePrice';
import { useAppStore } from '@/stores/app';
import { usePriceStore } from '@/stores/price';
import type { FormInstance, FormRules } from 'element-plus';
import { storeToRefs } from 'pinia';
import { computed, onUnmounted, reactive, ref, watch } from 'vue';


const appStore = useAppStore();
const priceStore = usePriceStore();

const {
    createPrice,
    getPriceList,
    updatePrice
} = usePrice();
const { singlePrice } = storeToRefs(priceStore);

const { actionType } = storeToRefs(appStore);

const actionText = computed(() =>
    actionType.value === ACTION_ENUM.CREATE ? "Tạo" : "Cập nhật"
);

const ruleFormRef = ref<FormInstance>()

const handleCloseForm = () => {
    appStore.setIsShowActionForm(false);
    appStore.setIsShowOverlay(false);
};

const ruleForm = reactive<TPrice>({
    price: "",
})

const rules = reactive<FormRules<TPrice>>({
    price: [
        { required: true, message: 'Giá không được bỏ trống', trigger: ['change', 'blur'] },
    ],

})



const handleSubmit = async () => {
    await ruleFormRef?.value?.validate(async (valid, fields) => {
        if (valid) {
            actionType.value === ACTION_ENUM.CREATE
                ? await createPrice(ruleForm)
                : await updatePrice(ruleForm, singlePrice.value.id as number);
            await getPriceList();
            handleCloseForm();
        } else {
            console.log('error submit!', fields)
        }
    })
};


watch(
    () => singlePrice.value,
    () => {
        ruleForm.price = singlePrice.value.price
    }
);


onUnmounted(() => {
    priceStore.setSinglePrice({
        price: "",
    });

    appStore.setActionType(ACTION_ENUM.CREATE);
});
</script>

<template>
    <el-card class="price-form-container">
        <div class="top">
            <h2>{{ actionText }} Giá</h2>
            <el-icon style="cursor: pointer; font-size: 16px" @click="handleCloseForm">
                <CloseBold />
            </el-icon>
        </div>
        <el-form ref="ruleFormRef" :rules="rules" :model="ruleForm">
            <el-form-item label="Giá" label-position="top" prop="price">
                <el-input v-model="ruleForm.price" placeholder="Nhập giá" />
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
.price-form-container {
    width: 30vw;
    height: auto;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
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

.price-form-container::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #f5f5f5;
}

.price-form-container::-webkit-scrollbar {
    width: 6px;
    background-color: #f5f5f5;
}

.price-form-container::-webkit-scrollbar-thumb {
    background-color: rgba(128, 128, 128, 0.562);
}
</style>
