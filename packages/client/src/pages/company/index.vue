<template>
  <div>
    <v-btn flat>
      Normal
    </v-btn>
    <SharedContentTitle>
      <template #title>Tableau de bord</template>
      <template #subtitle>Bonjour Julien, bienvenue sur l'espace entreprise de Company500 ! 🎉</template>
    </SharedContentTitle>

    <!-- Total Amount -->
    <TheCompanyDashboardCardPiggyBank class="mb-8" />

    <!-- Total Amount Disribution -->
    <TheCompanyDashboardCardDistribution class="mb-8" />

    <!-- Overall Performance & Contribution -->
    <div class="flex align-items justify-center mb-8">
      <TheCompanyDashboardCardOverallPerformance class="flex-1 mr-8" />
      <TheCompanyDashboardCardContribution class="flex-1" />
    </div>

    <!-- Fund Universe -->
    <TheCompanyDashboardCardFundUniverse class="mb-8" />

    <!-- Goals -->
    <TheCompanyDashboardCardGoals />
  </div>
</template>

<script setup lang="ts">
  definePageMeta({
    layout: 'private-app-company-layout',
  });
</script>
