<script setup lang="ts"></script>

<template>
  <div class="navbar">
    <div class="top">
      <div class="top-item logo">
        <img src="https://maraviyainfotech.com/projects/carrot-tailwind/assets/img/logo/logo.png" alt="" />
      </div>
      <div class="top-item search">
        <input type="text" placeholder="Tìm sản phẩm bạn muốn..." />
        <button>
          <el-icon>
            <Search />
          </el-icon>
        </button>
      </div>
      <div class="top-item action">
        <div class="item">
          <i class="pi pi-shopping-bag"></i>&nbsp;
          <span>Đơn hàng</span>
        </div>
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
          <span> Đăng nhập</span>
          <span>&nbsp;|&nbsp;</span>
          <span>Đăng ký</span>
        </div>
      </div>
    </div>


    <div class="bottom">
      <i style="margin-left: 65px; font-weight: bold; cursor: pointer;" class="pi pi-bars"></i>
      <ul>
        <li class="active">Trang chủ</li>
        <li>Sản phẩm</li>
        <li>Danh mục</li>
        <li>Bài viết</li>
        <li>Liên hệ</li>
      </ul>
    </div>
  </div>
  <div class="hr"></div>
</template>

<style lang="scss" scoped>
.navbar {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
  padding: 20px 150px;
  font-weight: 500;

  .top {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;

    .top-item {
      margin: 0 20px;
      width: max-content;
    }

    .search {
      border: 1px solid #3F51B5;
      border-radius: 5px;
      height: 45px;
      display: flex;
      align-items: center;
      width: 100%;

      input {
        width: 100%;
        height: 100%;
        border: none;
        outline: none;
        border-radius: 5px;
        padding-left: 10px;
      }

      button {
        width: 60px;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        border: none;
        background-color: #3F51B5;
        color: white;
        font-weight: bold;
        font-size: 20px;
        cursor: pointer;

        &:hover {
          background-color: #1f39cc;
        }
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
        margin-left: 25px;
        height: max-content;
        cursor: pointer;
      }
    }
  }

  .bottom {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 20px;

    ul {
      width: 100%;
      display: flex;
      list-style: none;
      justify-content: center;
      align-items: flex-end;
      margin-top: 10px;

      li {
        margin: 0 50px;
        cursor: pointer;
        padding-bottom: 5px;

        &.active {
          border-bottom: 3px solid #3F51B5;
        }
      }
    }
  }
}

.hr {
  width: 100%;
  height: 1px;
  background-color: rgba(128, 128, 128, 0.205);
  margin-top: 10px;
}
</style>
