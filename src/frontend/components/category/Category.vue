<script setup lang="ts">
</script>

<template>
    <div class="category-container">
        <div class="category-img">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrGBzCoy8_Dp0eTcqOABfwTbmpa5QHGxw06g&s"
                alt="">
        </div>

        <span style="margin-top: 50px; font-weight: bold;">T-Shirt</span>
        <span>67 item</span>
    </div>
</template>


<style lang="scss" scoped>
.category-container {
    width: 15%;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    flex-direction: column;
    background-color: #F7F7F8;
    border-radius: 10px;
    margin: 50px 25px;
    cursor: pointer;


    .category-img {
        display: flex;
        width: 120px;
        height: 120px;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        background-color: #ECF0FF;
        position: absolute;
        top: -50%;
        transform: translateY(50%);

        img {
            width: 80%;
            height: 80%;
            object-fit: cover;
            border-radius: 50%;
        }
    }

    span{
        color: gray;
    }
}
</style>