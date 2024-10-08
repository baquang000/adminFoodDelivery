<script lang="ts" setup>
import { ACTION_ENUM } from "@/common/enum";
import type { CreateFood, TFood } from "@/common/type";
import { useAppStore } from "@/stores/app";
import { storeToRefs } from "pinia";
import { computed, onUnmounted, reactive, ref, watch } from "vue";
import BaseUpload from "@/base/BaseUpload.vue";
import { useCategoryStore } from "@/stores/category";
import type { FormInstance, FormRules } from "element-plus";
import { useFood } from "@/composables/useFood";
import { userFoodStore } from "@/stores/food";


const appStore = useAppStore();
const category = useCategoryStore();
const foodStore = userFoodStore();
const { actionType } = storeToRefs(appStore);
const { singleFood } = storeToRefs(foodStore);
const { categoryList } = storeToRefs(category);

const { createFood, getFoods, updateFood } = useFood();

const ruleFormRef = ref<FormInstance>()

const ruleForm = reactive<TFood>({
  bestFood: false,
  idCategory: 0,
  description: "",
  imagePath: "",
  price: {
    id: 0,
    price: ""
  },
  star: "",
  time: {
    id: 0,
    time: ""
  },
  idTime: 0,
  idPrice: 0,
  timeValue: "",
  title: "",
  idShop: null,
  showFood: true,
});


const rules = reactive<FormRules<TFood>>({
  title: [
    { required: true, message: 'Tên sản phẩm không được bỏ trống', trigger: ['change', 'blur'] },
  ],
  description: [
    { required: true, message: 'Mô tả không được bỏ trống', trigger: ['change', 'blur'] },
  ],

  imagePath: [
    { required: true, message: 'Ảnh không được bỏ trống', trigger: ['change', 'blur'] },
  ],

  price: [
    { required: true, message: 'Giá cũ không được bỏ trống', trigger: ['change', 'blur'] },
  ],

  idCategory: [
    { required: true, message: 'ID danh mục không được bỏ trống', trigger: ['change', 'blur'] },
  ],

  idShop: [
    { required: true, message: 'ID shop không được bỏ trống', trigger: ['change', 'blur'] },
  ],
})



const actionText = computed(() =>
  actionType.value === ACTION_ENUM.CREATE ? "Tạo" : "Cập nhật"
);

const handleCloseForm = () => {
  appStore.setIsShowActionForm(false);
  appStore.setIsShowOverlay(false);
};

const handleChangeFile = (url: string) => {
  ruleForm.imagePath = url;
  ruleFormRef.value?.validateField('imagePath')
};

const handleSubmit = async () => {
  await ruleFormRef?.value?.validate(async (valid, fields) => {
    if (valid) {
      const response = actionType.value === ACTION_ENUM.CREATE
        ? await createFood(ruleForm)
        : await updateFood(ruleForm, singleFood.value.id as number);

      if (response) {
        await getFoods();
        handleCloseForm();
      }
    } else {
      console.log('error submit!', fields)
    }
  })
};

watch(() => singleFood.value, () => {
  ruleForm.bestFood = singleFood.value.bestFood,
    ruleForm.idCategory = singleFood.value.idCategory,
    ruleForm.description = singleFood.value.description,
    ruleForm.imagePath = singleFood.value.imagePath,
    ruleForm.price = {
      id: singleFood.value.idPrice,
      price: singleFood.value.price.price
    },
    ruleForm.star = singleFood.value.star,
    ruleForm.time = singleFood.value.time,
    ruleForm.idTime = singleFood.value.idTime,
    ruleForm.idPrice = singleFood.value.idPrice,
    ruleForm.title = singleFood.value.title,
    ruleForm.idShop = singleFood.value.idShop,
    ruleForm.showFood = singleFood.value.showFood
});



onUnmounted(() => {
  foodStore.setSingleFood({
    bestFood: false,
    idCategory: 0,
    description: "",
    imagePath: "",
    price: {
      id: 0,
      price: ""
    },
    star: "",
    time: {
      id: 0,
      time: ""
    },
    idTime: 0,
    idPrice: 0,
    title: "",
    idShop: 0,
    showFood: true,
    timeValue: ""
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
      <el-form ref="ruleFormRef" :rules="rules" :model="ruleForm">
        <el-form-item label="Tên sản phẩm" label-position="top" prop="title">
          <el-input v-model="ruleForm.title" placeholder="Nhập tên sản phẩm" />
        </el-form-item>

        <el-form-item label="Mô tả" label-position="top" prop="description">
          <el-input v-model="ruleForm.description" placeholder="Nhập mô tả" />
        </el-form-item>


        <el-form-item label="Giá" label-position="top" prop="price">
          <el-input v-model="ruleForm.price.price" placeholder="Nhập giá" />
        </el-form-item>

        <el-form-item label="Danh mục" label-position="top" prop="idCategory">
          <el-select v-model="ruleForm.idCategory" placeholder="Select" size="large" style="width: 240px">
            <el-option v-for="item in categoryList" :key="item.name" :label="item.name" :value="item.id" />
          </el-select>
        </el-form-item>

        <el-form-item label="Ảnh sản phẩm" label-position="top" prop="imagePath">
          <BaseUpload @change="handleChangeFile" :url="ruleForm.imagePath" />
        </el-form-item>

        <el-form-item label="Thời gian" label-position="top" prop="time">
          <el-input v-model="ruleForm.time.time" placeholder="Nhập thời gian" />
        </el-form-item>

        <el-form-item label="Id cửa hàng" label-position="top" prop="idShop">
          <el-input v-model="ruleForm.idShop" placeholder="Nhập id cửa hàng" />
        </el-form-item>

        <el-form-item label="bestFood" label-position="top" prop="bestFood">
          <el-input v-model="ruleForm.bestFood" placeholder="Nhập bestFood" />
        </el-form-item>

        <el-form-item label="Hiển thị đồ ăn" label-position="top" prop="showFood">
          <el-input v-model="ruleForm.showFood" placeholder="Hiển thị" />
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
  min-width: 35vw;
  height: 87vh;
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
