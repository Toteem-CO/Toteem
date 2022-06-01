<template>
  <section class="px-8 py-6">
    <h1 class="text-3xl font-semibold text-gray-700">Tableau de bord</h1>
    <h2 class="mt-2 mb-8 font-medium">Bonjour Julien, bienvenue sur votre espace ! 🎉</h2>

    <UiCard>
      <template #title><IconsPiggyBank class="h-10 w-10 mr-2" /> Ma cagnotte d'épargne entreprise</template>
      <template #content> 12 000 € </template>
    </UiCard>

    <UiCard>
      <template #title><IconsWallet class="h-10 w-10 mr-2" /> Mes projets</template>
      <template #content>
        <div class="flex items-start">
          <div>
            <h3>Mes projets personnels</h3>
            <ChartsPie :data="data" :colors="colors" :labels="labels">
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

  const data = [2000, 4000];
  const colors = ['#5A4FCF', '#B3AFE3'];
  const labels = ['Bloqué', 'Disponible'];
</script>
