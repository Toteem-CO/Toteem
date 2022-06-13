<template>
  <UiCard>
    <template #title><IconsThinking class="h-10 w-10 mr-2" /> Ma stratégie d'investissement</template>
    <template #content>
      <div class="flex items-start">
        <div class="flex-1">
          <h3 class="font-bold text-base mb-4">Profil Toteem</h3>
          <div class="flex items-center justify-center">
            <IconsSmileyTongue class="h-24 w-24" />
            <div class="flex-1 py-2 px-6">
              <h4 class="font-bold text-primary">Le Gourmand</h4>
              <p class="leading-tight text-sm">
                Vous avez le goût du risque.<br />Misez majoritairement sur les marchés actions pour un maximum de
                performance.
              </p>
            </div>
          </div>
        </div>

        <div class="flex-1">
          <h3 class="font-bold text-base mb-4">Centres d'intérêts</h3>
          <div class="flex items-center justify-between">
            <div class="flex flex-col items-center justify-center">
              <IconsBadminton class="h-16 w-16 mb-2" /><span class="text-sm font-bold">Sport</span>
            </div>
            <div class="flex flex-col items-center justify-center">
              <IconsEcology class="h-16 w-16 mb-2" /><span class="text-sm font-bold">Environnement</span>
            </div>
            <div class="flex flex-col items-center justify-center">
              <IconsSmartWatch class="h-16 w-16 mb-2" /><span class="text-sm font-bold">Innovation</span>
            </div>
          </div>
        </div>
      </div>
    </template>
  </UiCard>
</template>

<script setup lang="ts"></script>
