<template>
  <UiCard>
    <!-- Title -->
    <template #title><IconsWallet class="h-10 w-10 mr-2" />Répartition des encours</template>
    <!-- Content -->
    <template #content>
      <div class="flex items-start">
        <!-- By Source -->
        <div class="flex-1">
          <h3 class="font-bold text-base mb-4">Par source</h3>
          <ChartsPie :values="values" :colors="colors" :labels="labels" compact>
            <template #icon><IconsSource class="h-24 w-24 absolute" /></template>
          </ChartsPie>
        </div>

        <div class="divider divider-horizontal"></div>

        <!-- By Project -->
        <div class="flex-1">
          <h3 class="font-bold text-base mb-4">Par projet</h3>
          <ChartsPie :values="values2" :colors="colors2" :labels="labels2" compact>
            <template #icon><IconsOldWoman class="h-24 w-24 absolute" /></template>
          </ChartsPie>
        </div>
      </div>

      <div class="flex items-start mt-8">
        <!-- By Themes -->
        <div class="flex-1">
          <h3 class="font-bold text-base mb-4">Par thème</h3>
          <ChartsPie :values="values3" :colors="colors3" :labels="labels3" compact>
            <template #icon><IconsThinking class="h-24 w-24 absolute" /></template>
          </ChartsPie>
        </div>

        <div class="divider divider-horizontal"></div>

        <!-- By Funds -->
        <div class="flex-1">
          <h3 class="font-bold text-base mb-4">Par fond</h3>
          <ChartsPie :values="values4" :colors="colors4" :labels="labels4" compact>
            <template #icon><IconsFund class="h-24 w-24 absolute" /></template>
          </ChartsPie>
        </div>
      </div>
    </template>
  </UiCard>
</template>

<script setup lang="ts">
  const values = [130000, 100000, 80000, 60000, 30000];
  const colors = ['#5A4FCF', '#35A953', '#F8870D', '#B3AFE3', '#FEB44A'];
  const labels = ['Participation', 'Intéressement', 'Performance', 'Abondement', 'Versements Volontaires'];

  const values2 = [250000, 150000];
  const colors2 = ['#5A4FCF', '#B3AFE3'];
  const labels2 = ['Projets Personnels', 'Retraite'];

  const values3 = [130000, 100000, 90000, 80000];
  const colors3 = ['#5A4FCF', '#35A953', '#F8870D', '#B3AFE3'];
  const labels3 = ['Innovation', 'Sport', 'Environnement', 'Immobilier'];

  const values4 = [130000, 100000, 80000, 60000, 30000];
  const colors4 = ['#5A4FCF', '#35A953', '#F8870D', '#B3AFE3', '#FEB44A'];
  const labels4 = ['Fond 1', 'Fond 2', 'Fond 3', 'Fond 4', 'Fond 5'];
</script>
