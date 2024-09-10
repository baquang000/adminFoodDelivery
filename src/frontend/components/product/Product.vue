<script setup lang="ts">
import type { TProduct } from "@/common/type";
import { computed } from "vue";

const props = defineProps<{
  product: TProduct;
}>();

const colors = computed(() => props.product.color.split(","));
const sizes = computed(() => props.product.size.split(","));
</script>

<template>
  <div class="product-container">
    <img :src="props.product.image" alt="" />
    <div class="main">
      <div class="product-cate">
        <div style="margin-bottom: 10px">
          <span>Kids</span>
          <span>
            <i class="pi pi-star"></i>&nbsp; <i class="pi pi-star"></i>&nbsp;
            <i class="pi pi-star"></i>&nbsp; <i class="pi pi-star"></i>&nbsp;
            <i class="pi pi-star"></i>&nbsp;
          </span>
        </div>
        <span
          style="
            color: #333;
            display: block;
            font-weight: 500;
            width: 100%;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          "
          >{{ props.product.name }}</span
        >
      </div>

      <div class="product-price">
        <span style="text-decoration: line-through">{{
          props.product.oldPrice
        }}</span>
        <span style="font-weight: bold; color: red">{{
          props.product.newPrice
        }}</span>
      </div>

      <div class="bottom">
        <div class="color-list">
          <div
            v-for="color in colors"
            :key="color"
            class="color"
            :style="`background-color: ${color}`"
          ></div>
        </div>
        <div class="size-list">
          <div v-for="size in sizes" :key="size" class="size">{{ size }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.product-container {
  width: 20%;
  height: auto;
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 0.5px solid rgba(128, 128, 128, 0.26);
  border-radius: 5px;
  color: gray;
  margin: 20px;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    transition: all 0.5s ease;
  }

  img {
    width: 100%;
    height: 50%;
    object-fit: cover;
    border-radius: 5px;
  }

  .main {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 10px;

    .product-cate {
      width: 100%;
      height: auto;

      div {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      i {
        color: orange;
      }
    }

    .product-price {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 10px;
    }
  }

  .bottom {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;

    .color-list {
      display: flex;
      align-items: center;
      height: auto;
      flex: 1;

      .color {
        width: 20px;
        height: 20px;
        border-radius: 5px;
        background-color: pink;
        margin-right: 10px;
      }
    }

    .size-list {
      display: flex;
      align-items: center;
      height: auto;
      flex: 1;
      justify-content: flex-end;

      .size {
        width: 20px;
        height: 20px;
        border-radius: 5px;
        background-color: #eeeeee;
        margin-right: 10px;
        text-align: center;
        line-height: 20px;
      }
    }
  }
}
</style>
