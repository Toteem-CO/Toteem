<template>
  <section class="px-8 py-6">
    <h1 class="text-3xl font-semibold text-gray-700">Tableau de bord</h1>
    <h2 class="mt-2 mb-8 font-medium">Bonjour Julien, bienvenue sur votre espace ! 🎉</h2>

    <UiCard class="mb-8">
      <template #title><IconsPiggyBank class="h-10 w-10 mr-2" /> Ma cagnotte d'épargne entreprise</template>
      <template #content><span class="text-3xl font-extrabold text-primary">12 000 €</span></template>
    </UiCard>

    <UiCard>
      <template #title><IconsWallet class="h-10 w-10 mr-2" /> Mes projets</template>
      <template #content>
        <div class="flex items-start">
          <div class="flex-1">
            <h3 class="font-bold text-base mb-4">Mes projets personnels</h3>
            <ChartsPie :values="values" :colors="colors" :labels="labels">
              <template #icon><IconsHouse class="h-24 w-24 absolute" /></template>
            </ChartsPie>
          </div>
          <div class="divider divider-horizontal"></div>
          <div class="flex-1">
            <h3 class="font-bold text-base mb-4">Ma retraite</h3>
            <ChartsPie :values="values2" :colors="colors2" :labels="labels2">
              <template #icon><IconsOldWoman class="h-24 w-24 absolute" /></template>
            </ChartsPie>
          </div>
        </div>
      </template>
    </UiCard>
  </section>
</template>

<script setup lang="ts">
  definePageMeta({ layout: 'private-app-layout' });

  const values = [4000, 2000];
  const colors = ['#5A4FCF', '#B3AFE3'];
  const labels = ['Bloqué', 'Disponible'];

  const values2 = [6000];
  const colors2 = ['#5A4FCF'];
  const labels2 = ['Bloqué'];
</script>
