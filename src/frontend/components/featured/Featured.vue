<script setup lang="ts">
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'
</script>


<template>
    <div style="width: 100vw;">
        <Carousel :autoplay="3000" :wrap-around="true">
            <Slide key="1">
                <div class="carousel__item">
                    <div class="left">
                        <h1>FASHION FOR MEN</h1>
                        <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor quis quas vel
                            reprehenderit earum? Cumque culpa ipsum ea, qui nostrum itaque illum tenetur, quisquam
                            maiores amet dignissimos id dicta beatae.</span>
                        <el-button style="height: 45px;" type="primary">SHOP NOW</el-button>
                    </div>

                    <div class="right">
                        <img src="https://www.tranquilitymarketing.co.uk/wp-content/uploads/2023/03/e-commerce-girl.png"
                            alt="">
                    </div>
                </div>
            </Slide>

            <Slide key="2">
                <div class="carousel__item">
                    <div class="right" style="margin-right: 100px">
                        <img src="https://www.tranquilitymarketing.co.uk/wp-content/uploads/2023/06/man-laptop.png"
                        alt="">
                    </div>

                    <div class="left">
                        <h1>FASHION FOR MEN</h1>
                        <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor quis quas vel
                            reprehenderit earum? Cumque culpa ipsum ea, qui nostrum itaque illum tenetur, quisquam
                            maiores amet dignissimos id dicta beatae.</span>
                        <el-button style="height: 45px;" type="primary">SHOP NOW</el-button>
                    </div>
                </div>
            </Slide>

            <template #addons>
                <Navigation />
                <Pagination />
            </template>
        </Carousel>
    </div>
</template>

<style scoped lang="scss">
.carousel__item {
    height: 80vh;
    width: 100%;
    font-size: 20px;
    border-radius: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 200px;
    background-color: #F3F3F3;

    h1{
        font-size: 50px;
    }

    .left {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        span {
            text-align: left;
            margin: 40px 0;
            color: gray;
        }
    }

    .right {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }


    }

}

.carousel__prev,
.carousel__next {
    box-sizing: content-box;
    border: 5px solid white;
}
</style>