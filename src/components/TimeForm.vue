<script lang="ts" setup>
import { ACTION_ENUM } from '@/common/enum';
import type { TTime } from '@/common/type';
import { useTime } from '@/composables/useTime';
import { useAppStore } from '@/stores/app';
import { useTimeStore } from '@/stores/time';
import type { FormInstance, FormRules } from 'element-plus';
import { storeToRefs } from 'pinia';
import { computed, onUnmounted, reactive, ref, watch } from 'vue';




const appStore = useAppStore();
const timeStore = useTimeStore();

const {
    createTime,
    getTimeList,
    updateTime
} = useTime();
const { singleTime } = storeToRefs(timeStore);

const { actionType } = storeToRefs(appStore);

const actionText = computed(() =>
    actionType.value === ACTION_ENUM.CREATE ? "Tạo" : "Cập nhật"
);

const ruleFormRef = ref<FormInstance>()

const handleCloseForm = () => {
    appStore.setIsShowActionForm(false);
    appStore.setIsShowOverlay(false);
};

const ruleForm = reactive<TTime>({
    time: ""
})

const rules = reactive<FormRules<TTime>>({
    time: [
        { required: true, message: 'Thời gian không được bỏ trống', trigger: ['change', 'blur'] },
    ],

})



const handleSubmit = async () => {
    await ruleFormRef?.value?.validate(async (valid, fields) => {
        if (valid) {
            actionType.value === ACTION_ENUM.CREATE
                ? await createTime(ruleForm)
                : await updateTime(ruleForm, singleTime.value.id as number);
            await getTimeList();
            handleCloseForm();
        } else {
            console.log('error submit!', fields)
        }
    })
};


watch(
    () => singleTime.value,
    () => {
        ruleForm.time = singleTime.value.time
    }
);


onUnmounted(() => {
    timeStore.setSingleTime({
        time: "",
    });

    appStore.setActionType(ACTION_ENUM.CREATE);
});
</script>

<template>
    <el-card class="time-form-container">
        <div class="top">
            <h2>{{ actionText }} Thời gian</h2>
            <el-icon style="cursor: pointer; font-size: 16px" @click="handleCloseForm">
                <CloseBold />
            </el-icon>
        </div>
        <el-form ref="ruleFormRef" :rules="rules" :model="ruleForm">
            <el-form-item label="Thời gian" label-position="top" prop="time">
                <el-input v-model="ruleForm.time" placeholder="Nhập thời gian" />
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
.time-form-container {
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

.time-form-container::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #f5f5f5;
}

.time-form-container::-webkit-scrollbar {
    width: 6px;
    background-color: #f5f5f5;
}

.time-form-container::-webkit-scrollbar-thumb {
    background-color: rgba(128, 128, 128, 0.562);
}
</style>
