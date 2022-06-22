<template>
  <div class="flex items-center justify-start">
    <!-- Chart Container -->
    <div class="relative h-32 w-32 flex items-center justify-center">
      <slot name="icon" />
      <canvas class="absolute h-32 w-32" :id="id" ref="canvasRef"></canvas>
    </div>
    <!-- Legend -->
    <div class="pl-4" v-if="displayLegend">
      <div class="flex items-center py-1" v-for="(label, index) in labels">
        <div class="h-4 w-6 rounded-md mr-2" :style="`background-color: ${colors[index]}`"></div>
        <div>
          <span class="text-base font-semibold">{{ values[index] }} €</span> {{ label }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import * as Chartjs from 'chart.js';

  const props = defineProps({
    values: { type: Array, default: [] },
    colors: { type: Array, default: [] },
    labels: { type: Array, default: [] },
    displayLegend: { type: Boolean, default: true },
  });

  const id = ref<string>('PIE-' + Math.random().toString().substring(2));
  const canvasRef = ref(null);
  const data = {
    labels: props.labels,
    datasets: [
      {
        data: props.values,
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
  const chart = shallowRef(null);

  onMounted(() => {
    chart.value = new Chartjs.Chart(canvasRef.value, { type, data, options });
  });

  onBeforeUnmount(() => {
    chart.value.destroy();
  });
</script>
