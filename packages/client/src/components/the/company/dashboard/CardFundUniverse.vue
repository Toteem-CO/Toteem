<template>
  <UiCard>
    <template #title><IconsFund class="h-10 w-10 mr-2" />Univers d'investissement</template>
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
            <UiTableCell>
              <span class="text-primary font-bold underline">{{ fund.name }}</span>
            </UiTableCell>
            <UiTableCell>{{ fund.theme }}</UiTableCell>
            <UiTableCell>
              <div
                class="badge badge-sm"
                :class="{
                  'badge-success': fund.risk < 4,
                  'badge-warning': fund.risk < 6 && fund.risk >= 4,
                  'badge-error': fund.risk >= 6,
                }"
              >
                {{ fund.risk }} / 7
              </div>
            </UiTableCell>
            <UiTableCell>{{ fund.value }} €</UiTableCell>
            <UiTableCell>
              <span :class="`text-${fund.performance < 0 ? 'error' : 'success'}`" class="font-bold"
                >{{ fund.performance < 0 ? '-' : '+' }} {{ fund.performance }} %</span
              >
            </UiTableCell>
            <UiTableCell>
              <span class="font-bold text-primary">{{ fund.total.toLocaleString() }} €</span>
            </UiTableCell>
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
      total: 130000,
    },
    {
      project: 'Projet Personnel',
      name: 'Fond 2',
      theme: 'Innovation',
      risk: 6,
      value: 70,
      performance: 8,
      total: 100000,
    },
    {
      project: 'Projet Personnel',
      name: 'Fond 3',
      theme: 'Sport',
      risk: 3,
      value: 20,
      performance: 2,
      total: 80000,
    },
    {
      project: 'Retraite',
      name: 'Fond 4',
      theme: 'Immobilier',
      risk: 2,
      value: 150,
      performance: 1,
      total: 60000,
    },
    {
      project: 'Retraite',
      name: 'Fond 5',
      theme: 'Immobilier',
      risk: 3,
      value: 90,
      performance: 2,
      total: 30000,
    },
  ];
</script>
