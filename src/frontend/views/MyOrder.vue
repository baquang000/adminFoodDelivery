<script lang="ts" setup>
import { useOrder } from "@/composables/useOrder";
import { useOrderStore } from "@/stores/order";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";
import { formatCurrency } from "@/utils/format";

const { getOrderByUser } = useOrder();

const { orderList } = storeToRefs(useOrderStore());

onMounted(() => getOrderByUser());
</script>

<template>
  <div class="order-list">
    <el-table :data="orderList" style="width: 100%">
      <el-table-column label="Ảnh sản phẩm" width="180">
        <template #default="scope">
          <div style="display: flex; align-items: center">
            <img
              width="90px"
              height="90px"
              :src="scope.row.product.image"
              alt=""
            />
          </div>
        </template>
      </el-table-column>
      <el-table-column label="Chi tiết" width="180">
        <template #default="scope">
          <div style="display: flex; align-items: center">
            <div>
              <span
                >Màu sắc:
                <div
                  :style="`
                    width: 18px;
                    height: 18px;
                    background-color: ${scope.row.product.color};
                    border-radius: 5px;
                  `"
                ></div>
              </span>
              <span
                >Kích cỡ:
                <div
                  style="
                    width: 20px;
                    height: 20px;
                    background-color: #eeeeee;
                    text-align: center;
                    line-height: 20px;
                  "
                >
                  {{ scope.row.product.size }}
                </div>
              </span>
            </div>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="Giá" width="180">
        <template #default="scope">
          <div style="display: flex; align-items: center">
            <span style="color: blue; font-weight: bold">{{
              scope.row.product.newPrice
            }}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="Số lượng" width="180">
        <template #default="scope">
          <el-button>-</el-button>
          <span style="margin: 0 15px">{{ scope.row.quantity }}</span>
          <el-button>+</el-button>
        </template>
      </el-table-column>

      <el-table-column label="Tổng tiền" width="180">
        <template #default="scope">
          <div style="display: flex; align-items: center">
            <span style="color: red; font-weight: bold">{{
              formatCurrency(scope.row.product.newPrice * scope.row.quantity)
            }}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="Thao tác">
        <template #default="scope">
          <el-button
            size="small"
            type="danger"
            @click="() => console.log('ok')"
          >
            <i class="pi pi-trash"></i>
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<style lang="scss" scoped></style>
