<template>
  <UiCard>
    <template #title><IconsFund class="h-10 w-10 mr-2" />Votre univers d'investissement</template>
    <template #content>
      <UiTable>
        <template #head>
          <UiTableRow>
            <UiTableCell v-for="head in heads" headCell>{{ head }}</UiTableCell>
          </UiTableRow>
        </template>

        <template #body>
          <UiTableRow v-for="fund in funds">
            <UiTableCell>{{ fund.project }}</UiTableCell>
            <UiTableCell class="text-primary font-semibold underline">{{ fund.name }}</UiTableCell>
            <UiTableCell>{{ fund.theme }}</UiTableCell>
            <UiTableCell>{{ fund.risk }}</UiTableCell>
            <UiTableCell>{{ fund.value }}</UiTableCell>
            <UiTableCell>{{ fund.performance }}</UiTableCell>
            <UiTableCell>{{ fund.total }}</UiTableCell>
          </UiTableRow>
        </template>
      </UiTable>
    </template>
  </UiCard>
</template>

<script setup lang="ts">
  const heads = ['Projet', 'Fond', 'Thème', 'Risque', 'Valeur Unitaire', 'Performance', 'Total Investi'];

  const funds = [
    {
      project: 'Retraite',
      name: 'Fond 1',
      theme: 'Environnement',
      risk: 5,
      value: 40,
      performance: 5,
      total: 1300000,
    },
    {
      project: 'Projet Personnel',
      name: 'Fond 2',
      theme: 'Innovation',
      risk: 6,
      value: 70,
      performance: 8,
      total: 1000000,
    },
    {
      project: 'Projet Personnel',
      name: 'Fond 3',
      theme: 'Sport',
      risk: 3,
      value: 20,
      performance: 2,
      total: 800000,
    },
    {
      project: 'Retraite',
      name: 'Fond 4',
      theme: 'Immobilier',
      risk: 2,
      value: 150,
      performance: 1,
      total: 600000,
    },
    {
      project: 'Retraite',
      name: 'Fond 5',
      theme: 'Immobilier',
      risk: 3,
      value: 90,
      performance: 2,
      total: 300000,
    },
  ];
</script>
