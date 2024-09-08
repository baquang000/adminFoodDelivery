<script lang="ts" setup>
import ProductList from '../components/product/ProductList.vue';

</script>

<template>
    <h2 style="margin-top: 50px;">Sản phẩm theo danh mục</h2>
    <div class="category-details">
        <div class="left">
            <div class="filter-item">
                <span>Giá</span>
                <div class="hr"></div>
                <div style="display: flex; align-items: center; margin-top: 10px;">
                    <input type="checkbox" />
                    <span>Cao -> Thấp</span>
                </div>

                <div style="display: flex; align-items: center; margin-top: 10px;">
                    <input type="checkbox" />
                    <span>Thấp -> Cao</span>
                </div>
            </div>

            <div class="filter-item">
                <span>Màu sắc</span>
                <div class="hr"></div>
                <div style="display: flex; align-items: center; margin-top: 10px;">
                    <input type="checkbox" />
                    <span>white</span>
                    <div class="color" style="background-color: white">

                    </div>
                </div>

                <div style="display: flex; align-items: center; margin-top: 10px;">
                    <input type="checkbox" />
                    <span>Black</span>
                    <div class="color" style="background-color: black;">

                    </div>
                </div>

                <div style="display: flex; align-items: center; margin-top: 10px;">
                    <input type="checkbox" />
                    <span>Orange</span>
                    <div class="color" style="background-color: orange;">

                    </div>
                </div>

                <div style="display: flex; align-items: center; margin-top: 10px;">
                    <input type="checkbox" />
                    <span>Red</span>
                    <div class="color" style="background-color: red;">

                    </div>
                </div>

                <div style="display: flex; align-items: center; margin-top: 10px;">
                    <input type="checkbox" />
                    <span>Green</span>
                    <div class="color" style="background-color: green;">

                    </div>
                </div>

                <div style="display: flex; align-items: center; margin-top: 10px;">
                    <input type="checkbox" />
                    <span>Blue</span>
                    <div class="color" style="background-color: blue;">

                    </div>
                </div>
            </div>

            <div class="filter-item">
                <span>Kích cỡ</span>
                <div class="hr"></div>
                <div style="display: flex; align-items: center; margin-top: 10px;">
                    <input type="checkbox" />
                    <span>S</span>
                </div>

                <div style="display: flex; align-items: center; margin-top: 10px;">
                    <input type="checkbox" />
                    <span>M</span>
                </div>

                <div style="display: flex; align-items: center; margin-top: 10px;">
                    <input type="checkbox" />
                    <span>L</span>
                </div>
            </div>
        </div>


        <div class="right">
            <ProductList :hiddenTitle="true" />
        </div>
    </div>
</template>


<style lang="scss" scoped>
.category-details {
    width: 100%;
    padding: 0 200px;
    display: flex;
    align-items: flex-start;
    height: auto;
    justify-content: space-between;
    margin-top: 100px;

    .left {
        background-color: #F7F7F8;
        border-radius: 5px;
        width: 20%;
        padding: 20px;
        color: gray;
        margin-top: 65px;

        .filter-item {
            width: 100%;
            height: auto;
            min-height: 120px;
            margin-bottom: 20px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;

            span {
                font-size: 14px;
                min-width: 50px;
                width: auto;

                &:first-child {
                    font-weight: 400;
                    font-size: inherit;
                    color: #333;
                }
            }

            .hr {
                width: 80%;
                height: 1px;
                background-color: rgba(105, 99, 99, 0.363);
                margin-bottom: 20px;
            }

            input {
                margin-right: 20px;
                width: 20px;
                height: 20px;

                &:hover {
                    cursor: pointer;
                }
            }

            .color {
                width: 20px;
                height: 20px;
                border: 5px;
                border-radius: 5px;
                margin-left: 50px;
            }
        }
    }

    .right {
        width: 100%;
    }
}
</style>
