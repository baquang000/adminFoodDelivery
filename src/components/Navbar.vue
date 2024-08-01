<script lang="ts" setup></script>

<template>
  <div class="navbar-container">
    <el-input style="width: 360px" placeholder="Nhập từ khóa tìm kiếm ..." />
    <el-dropdown>
      <span class="el-dropdown-link">
        <img width="30" height="30" src="https://i.pinimg.com/originals/57/3e/f8/573ef8a82f3be88831bb4d22cc5eae29.gif" alt="">
        Admin
        <el-icon class="el-icon--right">
          <arrow-down />
        </el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>Đơn hàng mới (20)</el-dropdown-item>
          <el-dropdown-item>Đánh giá mới (15)</el-dropdown-item>
          <el-dropdown-item>Hoạt động (10)</el-dropdown-item>
          <el-dropdown-item divided>Thoát</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<style scoped lang="scss">
.navbar-container {
  display: flex;
  align-items: center;
  height: 60px;
  width: 100%;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  padding: 0 20px;

  .el-dropdown{
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    .el-dropdown-link {
      font-size: 16;
      display: flex;
      align-items: flex-end;
      outline: none;
      cursor: pointer;
      
      img{
        border-radius: 50%;
        object-fit: cover;
      }
    }
  }
}
</style>
