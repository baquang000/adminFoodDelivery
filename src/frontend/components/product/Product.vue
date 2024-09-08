<script setup lang="ts">
</script>

<template>
    <div class="product-container">
        <img src="https://product.hstatic.net/1000377637/product/duy_5465_4c5313d069da44c3a357b56330156e22_master.jpg"
            alt="">
        <div class="main">
            <div class="product-cate">
                <div style="margin-bottom: 10px">
                    <span>Kids</span>
                    <span>
                        <i class="pi pi-star"></i>&nbsp;
                        <i class="pi pi-star"></i>&nbsp;
                        <i class="pi pi-star"></i>&nbsp;
                        <i class="pi pi-star"></i>&nbsp;
                        <i class="pi pi-star"></i>&nbsp;
                    </span>
                </div>
                <span
                    style="color: #333; display: block; font-weight: 500; width: 100%; white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">Full
                    color for women Full color for women for women</span>
            </div>

            <div class="product-price">
                <span style="text-decoration: line-through;">20.000</span>
                <span style="font-weight: bold; color: red;">40.000</span>
            </div>

            <div class="bottom">
                <div class="color-list">
                    <div class="color">

                    </div>
                    <div class="color">

                    </div>
                </div>
                <div class="size-list">
                    <div class="size">
                        S
                    </div>

                    <div class="size">
                        M
                    </div>

                    <div class="size">
                        L
                    </div>
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

            i{
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
                background-color: #EEEEEE;
                margin-right: 10px;
                text-align: center;
                line-height: 20px;
            }
        }
    }
}
</style>