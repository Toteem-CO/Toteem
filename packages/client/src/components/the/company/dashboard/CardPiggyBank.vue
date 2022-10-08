<template>
  <UiCard>
    <template #title><IconsPiggyBank class="h-10 w-10 mr-2" />Montant total des encours</template>
    <template #content>
      <div class="text-3xl font-extrabold text-primary">400 000 €</div>
      <div class="text-xs italic text-gray-700 pt-1 pl-1">Au {{ new Date().toLocaleDateString() }}</div>

    </template>
  </UiCard>
</template>
