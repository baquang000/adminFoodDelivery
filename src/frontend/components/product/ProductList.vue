<script setup lang="ts">
import Product from './Product.vue';


const props = defineProps<{
    hiddenTitle?: boolean,
    isSetCss?: boolean
}>()


</script>

<template>
    <h2 v-if="!props.hiddenTitle">Sản phẩm nổi bật</h2>
    <div class="product-list" :style="props.isSetCss && 'padding: 0 200px'">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
    </div>
</template>


<style lang="scss" scoped>
.product-list {
    margin-top: 50px;
    min-height: 200px;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
}
</style>