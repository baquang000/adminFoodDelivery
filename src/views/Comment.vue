<script lang="ts" setup>
import BaseTable from "@/base/BaseTable.vue";
import { useComment } from "@/composables/useComment";
import { useCommentStore } from "@/stores/comment";
import { storeToRefs } from "pinia";
import { computed, onMounted } from "vue";

const commentStore = useCommentStore();

const { commentList } = storeToRefs(commentStore);

const tableData = computed(() => commentList.value);

const { getComments, deleteComment } = useComment();

const tableColumns = [
  { prop: "productId", label: "ID sản phẩm", width: "auto" },
  { prop: "userId", label: "ID người dùng", width: "auto" },
  { prop: "content", label: "Nội dung", width: "auto" },
  { prop: "image", label: "Ảnh", width: "auto" },
];

const handleEditData = (id: number) => {};

const handleDelete = async (id: number) => {
  await deleteComment(id);
  await getComments();
};

onMounted(() => getComments());
</script>

<template>
  <div class="comment-container">
    <div class="comment-featured">
      <el-card></el-card>
      <el-card></el-card>
      <el-card></el-card>
      <el-card></el-card>
    </div>
    <div class="comment-list">
      <BaseTable
        :data="tableData"
        :columns="tableColumns"
        screen="danh mục"
        @edit="handleEditData"
        @delete="handleDelete"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.comment-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .comment-featured {
    width: 100%;
    display: flex;
    align-items: center;

    .el-card {
      height: 200px;
      flex: 1;
      margin: 20px;
    }
  }

  .comment-list {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;
    .el-input {
      margin-bottom: 20px;
    }
  }
}
</style>
