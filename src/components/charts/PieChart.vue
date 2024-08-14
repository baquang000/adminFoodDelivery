<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  labels?: string[];
  series?: number[];
}>();

const data = computed(() => {
  return {
    options: {
      labels: props.labels,
    },
    series: props.series,
  };
});
</script>

<template>
  <div>
    <apexchart
      width="300"
      type="donut"
      :options="data.options"
      :series="data.series"
    ></apexchart>
  </div>
</template>
