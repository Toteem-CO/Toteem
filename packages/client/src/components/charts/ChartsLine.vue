<template>
  <div class="h-48">
    <canvas :id="id" class="h-48" ref="canvasRef"></canvas>
  </div>
</template>

<script setup lang="ts">
  import { Chart } from 'chart.js';

  const props = defineProps({
    values: { type: Array, default: [] },
    color: { type: String, default: '' },
    labels: { type: Array, default: [] },
  });

  const id = ref<string>(Math.random().toString().substring(2));
  const canvasRef = ref(null);
  const data = {
    labels: props.labels,
    datasets: [
      {
        label: 'Performance',
        data: props.values,
        borderColor: props.color,
        fill: false,
        cubicInterpolationMode: 'monotone',
      },
    ],
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        displayColors: false,
        padding: 10,
        boxPadding: 5,
        callbacks: {
          title: () => '',
          label: (ctx) => `${ctx.label} : ${ctx.parsed.y.toLocaleString('fr-FR')} €`,
        },
      },
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    scales: {
      x: {
        display: true,
        title: {
          display: false,
        },
      },
      y: {
        display: true,
        title: {
          display: false,
        },
      },
    },
  };
  const type = 'line';
  const chart = ref(null);

  onMounted(() => {
    chart.value = new Chart(canvasRef.value, { type, data, options });
  });

  onBeforeUnmount(() => {
    chart.value.destroy();
  });
</script>
