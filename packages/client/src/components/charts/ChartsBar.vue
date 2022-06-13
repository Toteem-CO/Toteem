<template>
  <div class="h-10">
    <canvas :id="id" class="h-10"></canvas>
  </div>
</template>

<script setup lang="ts">
  import { Chart } from 'chart.js';

  const props = defineProps({
    values: { type: Array, default: [] },
    remainings: { type: Array, default: [] },
    valuesColors: { type: Array, default: [] },
    remainingsColors: { type: Array, default: [] },
    valuesLabels: { type: Array, default: [] },
    remainingsLabels: { type: Array, default: [] },
  });

  const id = ref<string>(Math.random().toString().substring(2));
  const data = {
    labels: [''],
    datasets: [
      {
        label: props.valuesLabels,
        data: props.values,
        backgroundColor: props.valuesColors,
        hoverBackgroundColor: props.valuesColors,
        borderRadius: { topLeft: 8, topRight: 0, bottomLeft: 8, bottomRight: 0 },
        borderSkipped: false,
      },
      {
        label: props.remainingsLabels,
        data: props.remainings,
        backgroundColor: props.remainingsColors,
        hoverBackgroundColor: props.remainingsColors,
        borderRadius: { topLeft: 0, topRight: 8, bottomLeft: 0, bottomRight: 8 },
        borderSkipped: false,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    indexAxis: 'y',
    layout: {
      autoPadding: false,
      padding: 0,
    },
    // scale: {
    //   max: 10000,
    // },
    scales: {
      x: {
        display: false,
        stacked: true,
        ticks: {
          display: false,
          padding: 0,
        },
        grid: {
          display: false,
        },
      },
      y: {
        display: false,
        stacked: true,
        ticks: {
          padding: 0,
        },
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        displayColors: false,
        padding: 10,
        boxPadding: 5,
        callbacks: {
          title: () => '',
          label: (ctx) => `${ctx.dataset.label} : ${ctx.parsed.x.toLocaleString('fr-FR')} €`,
        },
      },
    },
  };

  const type = 'bar';
  const chart = ref(null);

  onMounted(() => {
    chart.value = new Chart(id.value, { type, data, options });
  });
</script>
