<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
    labels?: string[];
    series?: number[];
    title?: string;
}>();

const data = computed(() => {
    return {

        series: [{
            data: [21, 22, 10, 28, 16, 21, 13, 30]
        }],
        chartOptions: {
            chart: {
                height: 350,
                type: 'bar',
                events: {
                    click: function () { }
                }
            },
            plotOptions: {
                bar: {
                    columnWidth: '45%',
                    distributed: true,
                }
            },
            dataLabels: {
                enabled: false
            },
            legend: {
                show: false
            },
            xaxis: {
                categories: [
                    ['John', 'Doe'],
                    ['Joe', 'Smith'],
                    ['Jake', 'Williams'],
                    'Amber',
                    ['Peter', 'Brown'],
                    ['Mary', 'Evans'],
                    ['David', 'Wilson'],
                    ['Lily', 'Roberts'],
                ],
                labels: {
                    style: {
                        fontSize: '12px'
                    }
                }
            }
        },
    }
});
</script>

<template>
    <div id="chart">
        <apexchart type="bar" height="350" :options="data.chartOptions" :series="data.series"></apexchart>
    </div>
</template>
