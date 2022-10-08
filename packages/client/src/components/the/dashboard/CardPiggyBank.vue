<template>
  <UiCard>
    <template #title><IconsPiggyBank class="h-10 w-10 mr-2" /> Ma cagnotte d'épargne entreprise</template>
    <template #content>
      <div class="text-3xl font-extrabold text-primary">12 000 €</div>
      <div class="text-xs italic text-gray-700 pt-1 pl-1">Au {{ new Date().toLocaleDateString() }}</div>
    </template>
  </UiCard>
</template>
