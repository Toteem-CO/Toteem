<template>
  <UiCard>
    <template #title
      ><IconsPerformance class="h-10 w-10 mr-2" /> Performance de mes placements :
      <span class="font-extrabold text-primary">+ 600 € (+ 5 %)</span></template
    >
    <template #content>
      <ChartsLine class="h-48" :values="values" :labels="labels" :color="color" />
    </template>
  </UiCard>
</template>

<script setup lang="ts">
  const values = [300, 320, 350, 355, 340, 380, 450, 440, 440, 500, 505, 520];
  const labels = Array(12)
    .fill(0)
    .map((d, i) =>
      new Date(new Date().setMonth(new Date().getMonth() - i)).toLocaleDateString('fr-FR', {
        year: 'numeric',
        month: 'short',
      })
    )
    .reverse();
  const color = '#5a4fcf';
</script>
