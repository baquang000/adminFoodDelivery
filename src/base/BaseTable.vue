<script setup lang="ts">
type TColumn = {
  prop: string;
  label: string;
  width: string;
};

const props = defineProps({
  data: {
    type: Array,
    required: true,
  },
  columns: {
    type: Array<TColumn>,
    required: true,
  },
});
</script>

<template>
  <el-table :data="props.data" style="width: 100%">
    <el-table-column
      v-for="column in columns"
      :key="column.prop"
      :prop="column.prop"
      :label="column.label"
      :width="column.width"
    />
    <el-table-column fixed="right" label="Thao tác" min-width="140">
      <template #default>
        <div class="icon-wrap">
          <span class="icon">
            <Plus style="width: 1em; height: 1em; color: green" />
          </span>
          <span class="icon">
            <Edit style="width: 1em; height: 1em; color: blue" />
          </span>
          <span class="icon">
            <Delete style="width: 1em; height: 1em; color: red" />
          </span>
        </div>
      </template>
    </el-table-column>
  </el-table>
</template>

<style scoped lang="scss">
.icon-wrap {
  display: flex;
  align-items: center;
  .icon {
    cursor: pointer;
    width: 30px;
    height: 30px;
    border: 1px solid rgba(128, 128, 128, 0.336);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    margin-left: 8px;
  }
}
</style>
