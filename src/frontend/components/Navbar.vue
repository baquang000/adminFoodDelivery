<script setup lang="ts"></script>

<template>
  <div class="navbar">
    <div class="top">
      <div class="top-item logo">
        <img
          src="https://maraviyainfotech.com/projects/carrot-tailwind/assets/img/logo/logo.png"
          alt=""
        />
      </div>
      <div class="top-item search">
        <input type="text" placeholder="Tìm kiếm ở đây..." />
        <button>
          <el-icon><Search /></el-icon>
        </button>
      </div>
      <div class="top-item action">
        <div class="item">
          <i class="pi pi-heart"></i>&nbsp;
          <span>Yêu thích</span>
        </div>
        <div class="item">
          <i class="pi pi-shopping-cart"></i>&nbsp;
          <span>Giỏ hàng</span>
        </div>
        <div class="item">
          <i class="pi pi-user"></i>&nbsp;
          <span>Tài khoản</span>
        </div>
      </div>
    </div>

    <div class="hr"></div>

    <div class="bottom">
      <ul>
        <li>Home</li>
        <li>Products</li>
        <li>Categories</li>
        <li>Blog</li>
        <li>Contact</li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.navbar {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1600px;
  height: auto;
  padding: 20px;

  .top {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    .top-item {
      margin: 0 20px;
      width: max-content;
      flex: 1;
    }

    .search {
      border: 1px solid #64b496;
      border-radius: 5px;
      height: 45px;
      display: flex;
      align-items: center;
      min-width: 600px;

      input {
        width: 100%;
        height: 100%;
        border: none;
        outline: none;
        border-radius: 5px;
        padding-left: 10px;
      }

      button {
        width: 120px;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        border: none;
        background-color: #64b496;
        color: white;
        font-weight: bold;
        font-size: 20px;
      }
    }

    .action {
      display: flex;
      align-items: center;
      justify-content: flex-end;

      .item {
        display: flex;
        align-items: center;
        width: max-content;
        margin-left: 20px;
        height: max-content;
        cursor: pointer;
      }
    }
  }

  .hr {
    width: 100%;
    height: 1px;
    background-color: rgba(128, 128, 128, 0.397);
    margin-top: 20px;
  }

  .bottom{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 20px;

    ul{
      width: 100%;
      display: flex;
      list-style: none;
      justify-content: center;
      align-items: flex-end;

      li{
        margin: 0 20px;
        cursor: pointer;
      }
    }
  }
}
</style>
