<template>
  <UiCard>
    <template #title><IconsGoals class="h-10 w-10 mr-2" />Objectifs collectifs</template>
    <template #content>
      <div class="pb-6 text-lg font-medium text-gray-900">Offre : Toteem Boost 🚀</div>
      <div class="flex">
        <UiCardBlock class="flex-1">
          <template #title>Prime de participation :</template>
          <template #content>
            <div>Bénéfice financier (formule standard)</div>
          </template>
        </UiCardBlock>

        <div class="divider divider-horizontal"></div>

        <UiCardBlock class="flex-1">
          <template #title>Prime d'intéressement :</template>
          <template #content>
            <div>EBE / CA ≥ 5%</div>
            <div>Croissance du CA de 10%</div>
          </template>
        </UiCardBlock>
      </div>
    </template>
  </UiCard>
</template>
