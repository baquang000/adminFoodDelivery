<script setup lang="ts">
import { ACTION_ENUM } from "@/common/enum";
import { useAppStore } from "@/stores/app";
import { computed } from "vue";

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
  screen: {
    type: String,
  },
});

const emit = defineEmits(["edit", "delete"]);

const appStore = useAppStore();

const placeholderText = computed(() => "Tìm kiếm " + props.screen + "...");

const handleShowForm = (type: ACTION_ENUM, id?: number) => {
  appStore.setIsShowActionForm(true);
  appStore.setIsShowOverlay(true);
  appStore.setActionType(type);

  if (type === ACTION_ENUM.UPDATE) {
    emit("edit", id as number);
  }
};

const handleDelete = (id: number) => {
  emit("delete", id);
};
</script>

<template>
  <div class="table-top">
    <el-input
      style="width: 240px; height: 40px"
      :placeholder="placeholderText"
    />
    <el-button type="success" @click="handleShowForm(ACTION_ENUM.CREATE)">
      <Plus style="width: 1em; height: 1em; color: white" /> Thêm mới
    </el-button>
  </div>
  <el-table :data="props.data" style="width: 100%">
    <el-table-column
      v-for="column in columns"
      :key="column.prop"
      :prop="column.prop"
      :label="column.label"
      :width="column.width"
    >
      <template v-slot="scope">
        <div v-if="column.prop === 'image'">
          <img
            :src="scope.row[column.prop]"
            alt="image"
            style="width: 100px; height: auto"
          />
        </div>
      </template>
    </el-table-column>
    <el-table-column fixed="right" label="Thao tác">
      <template #default="{ row }">
        <div class="icon-wrap">
          <span class="icon">
            <Search style="width: 1em; height: 1em; color: green" />
          </span>
          <span class="icon">
            <Edit
              style="width: 1em; height: 1em; color: blue"
              @click="handleShowForm(ACTION_ENUM.UPDATE, row.id)"
            />
          </span>
          <span class="icon">
            <Delete
              style="width: 1em; height: 1em; color: red"
              @click="handleDelete(row.id)"
            />
          </span>
        </div>
      </template>
    </el-table-column>
  </el-table>
</template>

<style scoped lang="scss">
.table-top {
  width: 100%;
  display: flex;
  justify-content: space-between;

  .el-button {
    height: 40px;
  }
}

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
