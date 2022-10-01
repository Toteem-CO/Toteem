<template>
  <div class="flex items-center justify-start" :class="{ 'flex-col': bottomLegend }">
    <!-- Chart Container -->
    <div class="relative h-32 w-32 min-h-32 min-w-32 flex items-center justify-center">
      <slot name="icon" />
      <canvas class="absolute h-32 w-32" :id="id" ref="canvasRef"></canvas>
    </div>
    <!-- Legend -->
    <div :class="{ 'pl-4': !bottomLegend, 'pt-4': bottomLegend }" v-if="displayLegend">
      <div class="flex items-center py-1" v-for="(label, index) in labels">
        <div class="h-4 w-6 rounded-md mr-2" :style="`background-color: ${colors[index]}`"></div>
        <div>
          <span class="text-base font-semibold">{{ values[index].toLocaleString() }} €</span> {{ label }}
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
    bottomLegend: { type: Boolean, default: false },
    compact: { type: Boolean, default: false },
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
        padding: props.compact ? 5 : 10,
        boxPadding: props.compact ? 2 : 5,
        bodyAlign: 'center',
        callbacks: {
          ...(props.compact
            ? {
                beforeLabel: (ctx) => `${ctx.label} :`,
                label: (ctx) => `${ctx.parsed.toLocaleString('fr-FR')} €`,
              }
            : {
                label: (ctx) => `${ctx.label} : ${ctx.parsed.toLocaleString('fr-FR')} €`,
              }),
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
    if (canvasRef.value) {
      chart.value = new Chartjs.Chart(canvasRef.value, { type, data, options });
    }
  });

  onBeforeUnmount(() => {
    if (chart.value && chart.value.destroy) {
      chart.value.destroy();
    }
  });
</script>
