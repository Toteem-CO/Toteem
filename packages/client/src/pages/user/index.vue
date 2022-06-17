<template>
  <div>
    <SharedContentTitle>
      <template #title>Tableau de bord</template>
      <template #subtitle>Bonjour Julien, bienvenue sur votre espace ! 🎉</template>
    </SharedContentTitle>

    <!-- Piggy Bank Card -->
    <TheDashboardCardPiggyBank class="mb-8" />

    <!-- Projects Card -->
    <TheDashboardCardMyProjects class="mb-8" />

    <!-- Investments Performance Card -->
    <TheDashboardCardInvestmentsPerformance class="mb-8" />

    <!-- Contribution & Scheduled Payment -->
    <div class="flex align-items justify-center mb-8">
      <TheDashboardCardContribution class="flex-1 mr-8" />
      <TheDashboardCardScheduledPayment class="flex-1" />
    </div>

    <!-- Toteem Profile -->
    <TheDashboardCardProfile />
  </div>
</template>

<script setup lang="ts">
  definePageMeta({ layout: 'private-app-layout' });
</script>
