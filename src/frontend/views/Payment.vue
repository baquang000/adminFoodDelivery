<script lang="ts" setup>
import { reactive, ref } from "vue";
import type { ComponentSize, FormInstance, FormRules } from "element-plus";
import { useCartStore } from "@/stores/cart";
import { storeToRefs } from "pinia";
import { formatCurrency } from "@/utils/format";
import { useUserStore } from "@/stores/user";
import { useOrder } from "@/composables/useOrder";
import { useRouter } from "vue-router";

interface RuleForm {
  name: string;
  region: string;
  count: string;
  date1: string;
  date2: string;
  delivery: boolean;
  location: string;
  type: string[];
  resource: string;
  desc: string;
}

const formSize = ref<ComponentSize>("default");
const ruleFormRef = ref<FormInstance>();
const ruleForm = reactive<RuleForm>({
  name: "Hello",
  region: "",
  count: "",
  date1: "",
  date2: "",
  delivery: false,
  location: "",
  type: [],
  resource: "",
  desc: "",
});

const { user } = storeToRefs(useUserStore());

const form = reactive({
  userName: user.value?.userName || "",
  phoneNumber: user.value?.userInfo?.phoneNumber || "",
  address: user.value?.userInfo?.address || "",
  note: "",
});

const router = useRouter();

const { cartList, total } = storeToRefs(useCartStore());

const { createOrder, createOrderDetails } = useOrder();

const rules = reactive<FormRules<RuleForm>>({
  name: [
    { required: true, message: "Please input Activity name", trigger: "blur" },
    { min: 3, max: 5, message: "Length should be 3 to 5", trigger: "blur" },
  ],
  region: [
    {
      required: true,
      message: "Please select Activity zone",
      trigger: "change",
    },
  ],
  count: [
    {
      required: true,
      message: "Please select Activity count",
      trigger: "change",
    },
  ],
  date1: [
    {
      type: "date",
      required: true,
      message: "Please pick a date",
      trigger: "change",
    },
  ],
  date2: [
    {
      type: "date",
      required: true,
      message: "Please pick a time",
      trigger: "change",
    },
  ],
  location: [
    {
      required: true,
      message: "Please select a location",
      trigger: "change",
    },
  ],
  type: [
    {
      type: "array",
      required: true,
      message: "Please select at least one activity type",
      trigger: "change",
    },
  ],
  resource: [
    {
      required: true,
      message: "Please select activity resource",
      trigger: "change",
    },
  ],
  desc: [
    { required: true, message: "Please input activity form", trigger: "blur" },
  ],
});

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate(async (valid, fields) => {
    if (valid) {
      const orderId = await createOrder({
        totalMoney: total.value.toString(),
        userNote: form.note,
      });

      if (orderId) {
        await Promise.all(
          cartList.value.map(async (item) => {
            await createOrderDetails({
              productId: item.product.id as number,
              orderId,
              quantity: item.quantity,
            }, false);
          })
        );
      }

      router.replace("/success");
    } else {
      console.log("error submit!", fields);
    }
  });
};
</script>

<template>
  <h2>Thanh toán</h2>
  <div class="payment">
    <el-card class="left">
      <el-form ref="ruleFormRef" style="max-width: 600px" :model="ruleForm" :rules="rules" label-width="auto"
        class="demo-ruleForm" :size="formSize">
        <el-form-item label="Tên người nhận" prop="name">
          <el-input v-model="form.userName" style="height: 40px" />
        </el-form-item>
        <el-form-item label="Số điện thoại" prop="name">
          <el-input v-model="form.phoneNumber" style="height: 40px" />
        </el-form-item>
        <el-form-item label="Địa chỉ" prop="name">
          <el-input v-model="form.address" style="height: 40px" />
        </el-form-item>

        <el-form-item label="Ghi chú cho người bán">
          <el-input v-model="form.note" type="textarea" />
        </el-form-item>

        <el-form-item label="Thanh toán online" prop="delivery">
          <el-switch v-model="ruleForm.delivery" />
        </el-form-item>

        <el-form-item>
          <el-button style="height: 45px; width: 200px;" type="primary" @click="submitForm(ruleFormRef)">
            Đặt hàng
          </el-button>
        </el-form-item>
      </el-form>
    </el-card>

    <el-card class="cart-list">
      <div v-for="(item, index) in cartList" :key="index" class="cart-item">
        <img width="90px" height="90px" style="border-radius: 5px" :src="item.product.image" alt="" />
        <div class="info">
          <span><b style="color: #333; font-weight: 500">Tên:</b>&nbsp;
            {{ item.product.description }}
          </span>
          <span style="margin-top: 5px"><b style="color: #333; font-weight: 500">Số lượng: </b>&nbsp; x
           {{ item.quantity }}</span>
          <span style="margin-top: 5px"><b style="color: #333; font-weight: 500">Giá tiền: </b>&nbsp;
            <span style="color: red">{{
              formatCurrency(item.product.newPrice)
            }}</span></span>
        </div>
      </div>
      <span style="margin-top: 30px"><b style="margin-top: 20px; color: #333">Tổng tiền: </b>
        <span style="color: red">{{
          cartList.length ? formatCurrency(total) : formatCurrency(0)
        }}</span></span>
    </el-card>
  </div>
</template>

<style lang="scss" scoped>
h2 {
  margin-top: 50px;
}

.payment {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  padding: 20px 200px;
  margin-top: 50px;
  border: 0.5px solid rgba(128, 128, 128, 0.26);
  border-radius: 5px;
  height: auto;

  .left {
    flex: 1;
    margin-top: 20px;

    .el-form {
      margin-top: 50px;
    }
  }

  .cart-list {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    margin-left: 20px;
    color: gray;
    max-height: 500px;
    overflow-y: auto;

    .cart-item {
      display: flex;
      align-items: flex-start;
      border-bottom: 0.5px solid rgba(128, 128, 128, 0.301);
      margin-top: 15px;
      margin-bottom: 30px;

      .info {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-left: 20px;
      }
    }
  }

  .cart-list::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #f5f5f5;
  }

  .cart-list::-webkit-scrollbar {
    width: 6px;
    background-color: #f5f5f5;
  }

  .cart-list::-webkit-scrollbar-thumb {
    background-color: rgba(128, 128, 128, 0.562);
  }
}
</style>
