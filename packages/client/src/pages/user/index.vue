<template>
  <section class="px-8 py-6">
    <h1 class="text-3xl font-semibold text-gray-700">Tableau de bord</h1>
    <h2 class="mt-2 mb-8 font-medium">Bonjour Julien, bienvenue sur votre espace ! 🎉</h2>

    <UiCard>
      <template #title><IconsPiggyBank class="h-10 w-10 mr-2" /> Ma cagnotte d'épargne entreprise</template>
      <template #content>
        12 000 €
      </template>
    </UiCard>

  </section>
</template>

<script setup lang="ts">

  definePageMeta({ layout: 'private-app-layout' });

</script>
