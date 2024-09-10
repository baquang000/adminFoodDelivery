<script setup lang="ts">
import { useProduct } from "@/composables/useProduct";
import ProductList from "../components/product/ProductList.vue";
import { computed, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { storeToRefs } from "pinia";
import { useProductStore } from "@/stores/product";
import { useCartStore } from "@/stores/cart";
import { formatCurrency } from "@/utils/format";

const { getSingleProduct } = useProduct();

const { singleProduct } = storeToRefs(useProductStore());

const quantity = ref(1);

const { addCart } = useCartStore();

const route = useRoute();

const id = computed(() => parseInt(route.params.id as string));

const colors = computed(() => singleProduct.value.color.split(","));
const sizes = computed(() => singleProduct.value.size.split(","));

const chooseSize = computed(()=> sizes.value[0] as string)
const chooseColor = computed(()=> colors.value[0] as string);

const handleAddToCart = () => {
  addCart(
    {
      ...singleProduct.value,
      size: chooseSize.value,
      color: chooseColor.value,
    },
    quantity.value
  );
};

onMounted(() => {
  getSingleProduct(id.value);
});
</script>

<template>
  <div class="product-details">
    <div class="top">
      <div class="left">
        <img :src="singleProduct.image" alt="" />
      </div>
      <div class="right">
        <h1>{{ singleProduct.name }}</h1>
        <span style="color: gray">{{ singleProduct.description }}</span>
        <hr style="margin-top: 10px" />
        <div class="details-item">
          <span>
            <i class="pi pi-star"></i>&nbsp; <i class="pi pi-star"></i>&nbsp;
            <i class="pi pi-star"></i>&nbsp; <i class="pi pi-star"></i>&nbsp;
            <i class="pi pi-star"></i>&nbsp;
          </span>
          <span>75 bình luận</span>
        </div>
        <div class="details-item">
          <span> Danh mục: </span>
          <span>Áo</span>
        </div>
        <div class="details-item">
          <span> Màu sắc: </span>
          <div class="color" v-for="color in colors" :key="color"
            :style="`width: 25px;height: 25px; background-color:${color};border-radius: 5px; opacity: 0.5`"
            @click="() => (chooseColor = color)"></div>
        </div>
        <div class="details-item">
          <span> Kích cỡ: </span>
          <div v-for="size in sizes" :key="size" class="size" @click="() => (chooseSize = size)">
            {{ size }}
          </div>
        </div>

        <div class="details-price">
          <span> Giá tiền: </span>
          <span>{{ formatCurrency(singleProduct.newPrice) }}</span>
          <span>{{ formatCurrency(singleProduct.oldPrice) }}</span>
        </div>

        <div class="details-item">
          <span style="cursor: pointer">
            <i class="pi pi-heart"></i>
          </span>
          <span style="cursor: pointer">
            <i class="pi pi-refresh"></i>
          </span>
        </div>

        <div class="details-quantity">
          <el-button @click="() => {
            if (quantity > 1) {
              quantity = quantity - 1;
            }
          }
            ">-</el-button>
          <div>{{ quantity }}</div>
          <el-button @click="quantity = quantity + 1">+</el-button>

          <router-link style="text-decoration: none; color: inherit;" to="/cart">
          <el-button @click="handleAddToCart" type="primary" style="width: max-content; height: 45px; margin-left: 30px;">
              Thêm vào giỏ hàng
            </el-button>
          </router-link>
        </div>
      </div>
    </div>

    <div class="bottom">
      <h2>Bình luận & đánh giá</h2>

      <div class="comment-list">
        <div class="item">
          <div style="color: #5e77c9; font-weight: 500">
            Nguyễn Văn A |
            <span style="color: gray; font-weight: normal">9 giờ trước</span>
          </div>
          <div style="color: #333; margin-top: 10px">Rất tốt</div>
        </div>

        <div class="item">
          <div style="color: #5e77c9; font-weight: 500">
            Nguyễn Văn A |
            <span style="color: gray; font-weight: normal">9 giờ trước</span>
          </div>
          <div style="color: #333; margin-top: 10px">Rất tốt</div>
        </div>

        <div class="item">
          <div style="color: #5e77c9; font-weight: 500">
            Nguyễn Văn A |
            <span style="color: gray; font-weight: normal">9 giờ trước</span>
          </div>
          <div style="color: #333; margin-top: 10px">Rất tốt</div>
        </div>
      </div>

      <div>
        <el-input style="height: 45px; margin-top: 25px" placeholder="Thêm bình luận của bạn..." />
        <el-button style="margin-top: 10px; height: 45px" type="primary">Bình luận</el-button>
      </div>
    </div>

    <div class="product-list">
      <h2>Sản phẩm liên quan</h2>
      <ProductList :hiddenTitle="true" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.product-details {
  width: 100%;
  padding: 0 200px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 100px;

  span {
    color: gray;
  }

  .top {
    display: flex;
    align-items: flex-start;

    .left {
      flex: 1;
      border: 0.5px solid rgba(128, 128, 128, 0.301);
      border-radius: 5px;
      margin-right: 50px;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 500px;
        height: 500px;
        object-fit: contain;
      }
    }

    .right {
      flex: 1;

      .details-quantity {
        display: flex;
        align-items: center;
        margin-top: 20px;

        div {
          &:nth-child(2) {
            margin: 0 20px;
          }
        }
      }

      .details-item {
        margin-top: 20px;
        display: flex;
        align-items: center;

        span {
          &:first-child {
            font-weight: bold;
            margin-right: 20px;
          }
        }

        .size {
          width: 25px;
          height: 25px;
          border-radius: 5px;
          border: 0.5px solid gray;
          text-align: center;
          line-height: 25px;
          margin: 0 10px;
          cursor: pointer;
          cursor: pointer;
        }

        .color {
          margin: 0 10px;
          cursor: pointer;
        }

        .pi-star {
          color: orange;
        }
      }

      .details-price {
        margin-top: 20px;

        span {
          margin-right: 20px;
          font-weight: bold;

          &:nth-child(2) {
            color: red;
          }

          &:last-child {
            text-decoration: line-through;
            color: gray;
            font-weight: inherit;
          }
        }
      }
    }
  }

  .bottom {
    margin-top: 50px;
    width: 100%;

    .comment-list {
      width: 100%;
      margin-top: 50px;

      .item {
        margin-top: 15px;
        width: 100%;
        min-height: 70px;
        height: auto;
        background-color: #eeeeee70;
        padding: 10px;
        border-radius: 5px;
      }
    }
  }

  .product-list {
    width: 100%;
    text-align: center;
    margin-top: 50px;
  }
}
</style>
