<template>
  <div class="relative h-32 w-32 flex items-center justify-center">
    <slot name="icon" />
    <canvas class="absolute h-32 w-32" :id="id"></canvas>
  </div>
</template>

<script setup lang="ts">
  import { Chart } from 'chart.js';

  const props = defineProps({
    data: { type: Array, default: [] },
    colors: { type: Array, default: [] },
    labels: { type: Array, default: [] },
  });

  const id = ref<string>(Math.random().toString().substring(2));
  const data = {
    labels: props.labels,
    datasets: [
      {
        data: props.data,
        backgroundColor: props.colors,
        hoverBackgroundColor: props.colors,
        borderWidth: 0,
      },
    ],
  };
  const options = {
    cutout: '70%',
    responsive: true,
    plugins: {
      tooltip: {
        displayColors: false,
        padding: 10,
        boxPadding: 5,
        callbacks: {
          label: (ctx) => `${ctx.label} : ${ctx.parsed.toLocaleString('fr-FR')} €`,
        },
      },
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
  };
  const type = 'doughnut';
  const chart = ref(null);

  onMounted(() => {
    chart.value = new Chart(id.value, { type, data, options });
  });
</script>
