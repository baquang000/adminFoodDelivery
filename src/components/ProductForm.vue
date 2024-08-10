<script lang="ts" setup>
import { ACTION_ENUM } from '@/common/enum';
import type { TColor } from '@/common/type';
import { useAppStore } from '@/stores/app';
import { storeToRefs } from 'pinia';
import { computed, ref } from 'vue';
import BaseUpload from '@/base/BaseUpload.vue';

const appStore = useAppStore();

const { isShowActionForm, actionType } = storeToRefs(appStore)

const actionText = computed(() => actionType.value === ACTION_ENUM.CREATE ? 'Tạo' : 'Cập nhật')

const handleCloseForm = () => {
    appStore.setIsShowActionForm(false)
    appStore.setIsShowOverlay(false)
}

const colors = ref<TColor[]>([
    {
        label: 'Đỏ',
        value: ' red'
    },
    {
        label: 'Đen',
        value: ' black'
    },
    {
        label: 'Trắng',
        value: 'white'
    }
])

const handleChangeFile = (url: string) => {
   
}

</script>

<template>
    <el-card class="product-form-container" v-if="isShowActionForm">
        <div class="top">
            <h2>{{ actionText }} sản phẩm</h2>
            <el-icon @click="handleCloseForm">
                <CloseBold />
            </el-icon>
        </div>
        <el-form>
            <el-form-item label="Tên sản phẩm" label-position="top">
                <el-input placeholder="Nhập tên sản phẩm" />
            </el-form-item>

            <el-form-item label="Mô tả" label-position="top">
                <el-input placeholder="Nhập mô tả" />
            </el-form-item>

            <el-form-item label="Màu sắc" label-position="top">
                <el-select placeholder="Select" size="large" style="width: 240px">
                    <el-option v-for="item in colors" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
            </el-form-item>

            <el-form-item label="Giá cũ" label-position="top">
                <el-input placeholder="Nhập giá cũ" />
            </el-form-item>

            <el-form-item label="Giá mới" label-position="top">
                <el-input placeholder="Nhập giá mới" />
            </el-form-item>

            <el-form-item label="Đã bán" label-position="top">
                <el-input placeholder="Nhập số lượng đã bán" />
            </el-form-item>

            <el-form-item label="Tồn kho" label-position="top">
                <el-input placeholder="Nhập số lượng tồn kho" />
            </el-form-item>

            <el-form-item label="Ảnh sản phẩm" label-position="top">
                <BaseUpload @change="handleChangeFile"/>
            </el-form-item>

            <div class="bottom">
                <el-button type="info">Hủy</el-button>
                <el-button type="primary">Thêm</el-button>
            </div>
        </el-form>
    </el-card>
</template>

<style scoped lang="scss">
.product-form-container {
    width: 50vh;
    height: 94vh;
    overflow-y: auto;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;


    &::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        border-radius: 10px;
        background-color: #F5F5F5;
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

        .el-input {
            height: 40px;
        }

        .bottom {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: flex-end;
        }
    }
}

.product-form-container::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #F5F5F5;
}

.product-form-container::-webkit-scrollbar {
    width: 6px;
    background-color: #F5F5F5;
}

.product-form-container::-webkit-scrollbar-thumb {
    background-color: rgba(128, 128, 128, 0.562);
}
</style>
