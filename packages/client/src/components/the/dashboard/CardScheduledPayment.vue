<template>
  <UiCard>
    <template #title><IconsCalendar class="h-10 w-10 mr-2" /> Mon versement programmé</template>
    <template #content>
      <div class="font-semibold">{{ value }} € / Mois, jusqu'au 31/12/2022</div>
      <div class="font-semibold text-primary underline">Modifier</div>
    </template>
  </UiCard>
</template>

<script setup lang="ts">
  const value = 100;

  const amount = computed(() => value.toLocaleString('fr-FR'));
</script>
