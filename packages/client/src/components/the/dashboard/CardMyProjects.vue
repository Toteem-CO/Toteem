<template>
  <UiCard>
    <!-- Title -->
    <template #title><IconsWallet class="h-10 w-10 mr-2" /> Mes projets</template>
    <!-- Content -->
    <template #content>
      <div class="flex items-start">
        <!-- Personal Projects -->
        <div class="flex-1">
          <h3 class="font-bold text-base mb-4">Mes projets personnels</h3>
          <ChartsPie :values="values" :colors="colors" :labels="labels">
            <template #icon><IconsHouse class="h-24 w-24 absolute" /></template>
          </ChartsPie>
        </div>
        <div class="divider divider-horizontal"></div>
        <!-- Retirement -->
        <div class="flex-1">
          <h3 class="font-bold text-base mb-4">Ma retraite</h3>
          <ChartsPie :values="values2" :colors="colors2" :labels="labels2">
            <template #icon><IconsOldWoman class="h-24 w-24 absolute" /></template>
          </ChartsPie>
        </div>
      </div>
    </template>
  </UiCard>
</template>

<script setup lang="ts">
  const values = [4000, 2000];
  const colors = ['#5A4FCF', '#B3AFE3'];
  const labels = ['Bloqué', 'Disponible'];

  const values2 = [6000];
  const colors2 = ['#5A4FCF'];
  const labels2 = ['Bloqué'];
</script>
