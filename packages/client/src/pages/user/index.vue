<template>
  <section class="px-8 py-6">
    <h1 class="text-3xl font-semibold text-gray-700">Tableau de bord</h1>
    <h2 class="mt-2 mb-8 font-medium">Bonjour Julien, bienvenue sur votre espace ! 🎉</h2>

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
  </section>
</template>

<script setup lang="ts">
  definePageMeta({ layout: 'private-app-layout' });
</script>
