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
  isHiddenComponent: {
    type: Boolean,
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
    v-if="!isHiddenComponent"
    style="width: 240px; height: 40px"
    :placeholder="placeholderText"
      />
      <el-button
        v-if="!isHiddenComponent"
        type="success"
        @click="handleShowForm(ACTION_ENUM.CREATE)"
        >
        <Plus style="width: 1em; height: 1em; color: white" /> Thêm mới
      </el-button>
    </div>
    <div class="base-table">
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
  
          <div v-if="column.prop === 'status'">
            <div
              :class="
                scope.row[column.prop] === 'active' ? 'status on' : 'status off'
              "
            ></div>
          </div>
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="Thao tác">
        <template #default="{ row }">
          <div class="icon-wrap">
            <span class="icon" v-if="!isHiddenComponent">
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
  </div>
</template>

<style scoped lang="scss">

.base-table{
  width: 100%;
  position: relative;
  height: 500px; 
  overflow-y: auto;
  margin-top: 20px;
}

.base-table::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #f5f5f5;
}

.base-table::-webkit-scrollbar {
  width: 6px;
  background-color: #f5f5f5;
}

.base-table::-webkit-scrollbar-thumb {
  background-color: rgba(128, 128, 128, 0.562);
}


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

.status {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-left: 25%;

  &.on {
    background-color: rgb(85, 209, 85);
  }

  &.off {
    background-color: orange;
  }
}
</style>
