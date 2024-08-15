<script lang="ts" setup>
import { ACTION_ENUM } from "@/common/enum";
import type { TColor, TProduct } from "@/common/type";
import { useAppStore } from "@/stores/app";
import { storeToRefs } from "pinia";
import { computed, onUnmounted, ref, watch } from "vue";
import BaseUpload from "@/base/BaseUpload.vue";
import { useProduct } from "@/composables/useProduct";
import { useCategoryStore } from "@/stores/category";
import { useProductStore } from "@/stores/product";

const colors: TColor[] = [
  {
    label: "Trắng",
    value: "white",
  },
  {
    label: "Đỏ",
    value: " red",
  },
  {
    label: "Đen",
    value: " black",
  },
];

const appStore = useAppStore();
const category = useCategoryStore();
const productStore = useProductStore();
const { actionType } = storeToRefs(appStore);
const { singleProduct } = storeToRefs(productStore);
const { categoryList } = storeToRefs(category);

const { createProduct, getProducts, updateProduct } = useProduct();

const product = ref<TProduct>({
  name: "",
  description: "",
  image: "",
  newPrice: "",
  oldPrice: "",
  sold: 0,
  stock: 0,
  categoryId: null,
  color: colors[0].value,
});

const actionText = computed(() =>
  actionType.value === ACTION_ENUM.CREATE ? "Tạo" : "Cập nhật"
);

const handleCloseForm = () => {
  appStore.setIsShowActionForm(false);
  appStore.setIsShowOverlay(false);
};

const handleChangeFile = (url: string) => {
  product.value.image = url;
};

const handleSubmit = async () => {
  actionType.value === ACTION_ENUM.CREATE
    ? await createProduct(product.value)
    : await updateProduct(product.value, singleProduct.value.id as number);

  await getProducts();

  handleCloseForm();
};

watch(() => singleProduct.value, () => {
  product.value = { ...singleProduct.value };
});

onUnmounted(() => {
  productStore.setSingleProduct({
    name: "",
    image: "",
    oldPrice: "",
    newPrice: "",
    stock: 0,
    sold: 0,
    description: "",
    color: "",
    categoryId: null,
  });

  appStore.setActionType(ACTION_ENUM.CREATE);
});
</script>

<template>
  <div class="product-form-container">
    <el-card class="main">
      <div class="top">
        <h2>{{ actionText }} sản phẩm</h2>
        <el-icon style="cursor: pointer" @click="handleCloseForm">
          <CloseBold />
        </el-icon>
      </div>
      <el-form>
        <el-form-item label="Tên sản phẩm" label-position="top">
          <el-input v-model="product.name" placeholder="Nhập tên sản phẩm" />
        </el-form-item>

        <el-form-item label="Mô tả" label-position="top">
          <el-input v-model="product.description" placeholder="Nhập mô tả" />
        </el-form-item>

        <el-form-item label="Màu sắc" label-position="top">
          <el-select v-model="product.color" placeholder="Select" size="large" style="width: 240px">
            <el-option v-for="item in colors" :key="item.value" :label="item.label" :value="item.value" />
          </el-select>
        </el-form-item>

        <el-form-item label="Giá cũ" label-position="top">
          <el-input v-model="product.oldPrice" placeholder="Nhập giá cũ" />
        </el-form-item>

        <el-form-item label="Giá mới" label-position="top">
          <el-input v-model="product.newPrice" placeholder="Nhập giá mới" />
        </el-form-item>

        <el-form-item label="Đã bán" label-position="top">
          <el-input type="number" v-model.number="product.sold" placeholder="Nhập số lượng đã bán" />
        </el-form-item>

        <el-form-item label="Tồn kho" label-position="top">
          <el-input type="number" v-model.number="product.stock" placeholder="Nhập số lượng tồn kho" />
        </el-form-item>

        <el-form-item label="Danh mục" label-position="top">
          <el-select v-model="product.categoryId" placeholder="Select" size="large" style="width: 240px">
            <el-option v-for="item in categoryList" :key="item.name" :label="item.name" :value="item.id" />
          </el-select>
        </el-form-item>

        <el-form-item label="Ảnh sản phẩm" label-position="top">
          <BaseUpload @change="handleChangeFile" :url="product.image" />
        </el-form-item>
      </el-form>
    </el-card>

    <div class="bottom">
      <el-button type="info" @click="handleCloseForm">Hủy</el-button>
      <el-button type="success" @click="handleSubmit">{{
        actionType === ACTION_ENUM.CREATE ? "Thêm" : "Sửa"
      }}</el-button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.product-form-container {
  width: 25vw;
  height: 85vh;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  overflow: hidden;
  

  .main {
    width: 100%;
    height: 85vh;
    position: relative;
    overflow-y: auto;
    padding-bottom: 60px;

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
      position: relative;

      .el-input {
        height: 40px;
      }
    }
  }

  .main::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: #f5f5f5;
  }

  .main::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #f5f5f5;
  }

  .main::-webkit-scrollbar {
    width: 6px;
    background-color: #f5f5f5;
  }

  .main::-webkit-scrollbar-thumb {
    background-color: rgba(128, 128, 128, 0.562);
  }

  .bottom {
    background-color: #FFFFFF;
    height: 90px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    z-index: 10;
    position: sticky;
    bottom: 0;
    border-top: 0.5px solid #eeeeeea2;

    .el-button {
      width: 180px;
      height: 50px;
    }
  }
}
</style>
