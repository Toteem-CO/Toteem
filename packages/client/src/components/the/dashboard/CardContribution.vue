<template>
  <UiCard>
    <template #title><IconsGift class="h-10 w-10 mr-2" /> Abondement</template>
    <template #content>
      <ChartsBar
        :values="values"
        :valuesLabels="valuesLabels"
        :valuesColors="valuesColors"
        :remainings="remainings"
        :remainingsColors="remainingsColors"
        :remainingsLabels="remainingsLabels"
      />
      <div class="flex items-center justify-center">
        <div class="flex-1 font-semibold"><span class="text-primary">Versé : </span>{{ wired }} €</div>
        <div class="flex-1 font-semibold text-right">
          <span class="text-[#B3AFE3]">Restant : </span>{{ remaining }} €
        </div>
      </div>
    </template>
  </UiCard>
</template>

<script setup lang="ts">
  const values = [8000];
  const remainings = [2000];
  const valuesColors = ['#5a4fcf'];
  const remainingsColors = ['#B3AFE3'];
  const valuesLabels = ['Versé'];
  const remainingsLabels = ['Restant'];

  const wired = computed(() => [...values].pop());
  const remaining = computed(() => [...remainings].pop());
</script>
