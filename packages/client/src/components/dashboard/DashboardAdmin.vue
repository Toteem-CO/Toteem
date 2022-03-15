<template>
  <section class="px-8 py-6">
    <h1 class="text-3xl font-medium text-gray-700">Tableau de bord</h1>
    <h2 class="mb-8">Bienvenue sur le tableau de bord de votre espace entreprise {{ firstName }} ! 🎉</h2>

    <div class="shadow-lg rounded-lg bg-white mb-8">
      <h3 class="px-6 py-2 flex rounded-t-lg items-center justify-start text-lg text-[#5a4fcf] border-b border-gray-100">
        <div class="pt-0.5"><PresentationChartLineIcon aria-hidden="true" class="w-5 h-5 mr-1" /></div><div class="">Synthèse Financière</div>
      </h3>
      <div class="p-6">
        <h4 class="text-gray-800 mb-6 flex flex-col items-center justify-center">
          <div class="font-medium text-3xl text-[#5a4fcf]">{{ totalAmount }} €</div>
          <div class="text-sm italic">Encours Totaux</div>
        </h4>
        <div class="flex items-start justify-between">
          <div class="w-80">
            <DoughnutChart class="flex justify-center" :chartData="doughnutBySources" :options="doughnutBySourcesOptions" :height="200" :width="200" />
            <div class="flex flex-wrap items-center justify-center text-xs pt-2">
              <div class="flex items-center justify-center px-2"><div class="bg-[#5a4fcf] w-6 h-2.5 mr-1 border border-gray-200"></div>Participation</div>
              <div class="flex items-center justify-center px-2"><div class="bg-[#b3afe3] w-6 h-2.5 mr-1 border border-gray-200"></div>Interessement</div>
              <div class="flex items-center justify-center px-2"><div class="bg-[#ede9fe] w-6 h-2.5 mr-1 border border-gray-200"></div>Abondement</div>
              <div class="flex items-center justify-center px-2"><div class="bg-[#f5f3ff] w-6 h-2.5 mr-1 border border-gray-200"></div>Performance</div>
              <div class="flex items-center justify-center px-2"><div class="bg-[#f9fafb] w-6 h-2.5 mr-1 border border-gray-200"></div>Versements Volontaires</div>
            </div>
          </div>
          <div class="w-80">
            <DoughnutChart class="flex justify-center" :chartData="doughnutByProjects" :options="doughnutByProjectsOptions" :height="200" :width="200" />
            <div class="flex flex-wrap items-center justify-center text-xs pt-2">
              <div class="flex items-center justify-center px-2"><div class="bg-[#5a4fcf] w-6 h-2.5 mr-1 border border-gray-200"></div>Projet Personnel</div>
              <div class="flex items-center justify-center px-2"><div class="bg-[#b3afe3] w-6 h-2.5 mr-1 border border-gray-200"></div>Retraite</div>
            </div>
          </div>
          <div class="w-80">
            <DoughnutChart class="flex justify-center" :chartData="doughnutByThemes" :options="doughnutByThemesOptions" :height="200" :width="200" />
            <div class="flex flex-wrap items-center justify-center text-xs pt-2">
              <div class="flex items-center justify-center px-2"><div class="bg-[#5a4fcf] w-6 h-2.5 mr-1 border border-gray-200"></div>Environement</div>
              <div class="flex items-center justify-center px-2"><div class="bg-[#b3afe3] w-6 h-2.5 mr-1 border border-gray-200"></div>Social</div>
              <div class="flex items-center justify-center px-2"><div class="bg-[#ede9fe] w-6 h-2.5 mr-1 border border-gray-200"></div>Innovation</div>
              <div class="flex items-center justify-center px-2"><div class="bg-[#f5f3ff] w-6 h-2.5 mr-1 border border-gray-200"></div>Immobilier</div>
              <div class="flex items-center justify-center px-2"><div class="bg-[#f9fafb] w-6 h-2.5 mr-1 border border-gray-200"></div>Arts</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="shadow-lg rounded-lg bg-white">
      <h3 class="px-6 py-2 flex rounded-t-lg items-center justify-start text-lg text-[#5a4fcf] border-b border-gray-100">
        <div class="pt-0.5"><HeartIcon aria-hidden="true" class="w-5 h-5 mr-1" /></div><div class="">Abondement Annuel</div>
      </h3>
      <div class="p-6">
        <div>
          <BarChart :chartData="contributionChart" :options="contributionChartOptions" :height="50" />
        </div>
        <div class="flex items-center flex-row font-semibold mt-2">
          <div class="flex-1"><span class="text-[#5a4fcf]">Versé :</span> {{ currentContribution }} €</div>
          <div><span class="text-[#b3afe3]">Max :</span> {{ maxContribution }} €</div>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
  import { PresentationChartLineIcon, HeartIcon } from '@heroicons/vue/outline';
  import { BarChart, DoughnutChart } from "vue-chart-3";
  import { useUsersStore } from '~/stores/users';

  export default {
    components: { DoughnutChart, BarChart, PresentationChartLineIcon, HeartIcon },

    setup() {
      definePageMeta({ layout: 'private-app-layout' });
    },

    data () {
      return {
        store: useUsersStore(),
        contributionChart: {
          labels: [''],
          datasets: [{
            label: '',
            data: [8000],
            backgroundColor: [
              'rgba(90, 79, 207, 1)',
            ],
            hoverBackgroundColor: [
              'rgba(90, 79, 207, 1)',
            ],
            borderRadius: { topLeft: 8, topRight: 0, bottomLeft: 8, bottomRight: 0 },
            borderSkipped: false,
          },
            {
              label: '',
              data: [2000],
              backgroundColor: [
                'rgba(179, 175, 227, 1)',
              ],
              hoverBackgroundColor: [
                'rgba(179, 175, 227, 1)',
              ],
              borderRadius: { topLeft: 0, topRight: 8, bottomLeft: 0, bottomRight: 8 },
              borderSkipped: false,
            }]
        },
        contributionChartOptions: {
          indexAxis: 'y',
          layout: {
            autoPadding: false,
            padding: 0,
          },
          scale: {
            max: 10000,
          },
          scales: {
            x: {
              display: false,
              stacked: true,
              ticks: {
                display: false,
                padding: 0,
              },
              grid: {
                display: false
              }
            },
            y: {
              display: false,
              stacked: true,
              ticks: {
                padding: 0,
              },
              grid: {
                display: false,
              }
            }
          },
          plugins: {
            legend: {
              display: false,
            },
            tooltip: {
              enabled: false,
            }
          }
        },
        doughnutBySources: {
          labels:
              ['Participation', 'Interessement', 'Abondement', 'Performance', 'Versements Volontaires'],
          datasets: [{
            data: [2000, 1000, 1000, 500, 200],
            backgroundColor: [
              "#5a4fcf",
              "#b3afe3",
              "#ede9fe",
              "#f5f3ff",
              "#f9fafb",
            ],
            hoverBackgroundColor: [
              "#5a4fcf",
              "#b3afe3",
              "#ede9fe",
              "#f5f3ff",
              "#f9fafb",
            ]
          }]
        },
        doughnutBySourcesOptions: {
          responsive: false,
          plugins: {
            tooltip: {
              displayColors: false,
              padding: 10,
              boxPadding: 5,
              callbacks: {
                label: (ctx) => `${ctx.label} : ${ctx.parsed.toLocaleString('fr-FR')} €`,
              }
            },
            legend: {
              display: false,
            },
            title: {
              display: true,
              text: "Par Source",
            },
          },
        },
        doughnutByProjects: {
          labels:
              ['Projet Personnel', 'Retraite'],
          datasets: [{
            data: [2000, 1000],
            backgroundColor: [
              "#5a4fcf",
              "#b3afe3",
            ],
            hoverBackgroundColor: [
              "#5a4fcf",
              "#b3afe3",
            ],
          }]
        },
        doughnutByProjectsOptions: {
          plugins: {
            tooltip: {
              displayColors: false,
              padding: 10,
              boxPadding: 5,
              callbacks: {
                label: (ctx) => `${ctx.label} : ${ctx.parsed.toLocaleString('fr-FR')} €`,
              }
            },
            legend: {
              display: false,
            },
            title: {
              display: true,
              text: "Par Projet",
            },
          },
        },
        doughnutByThemes: {
          labels:
              ['Environement', 'Social', 'Innovation', 'Immobilier', 'Arts'],
          datasets: [{
            data: [2000, 1000, 800, 500, 200],
            backgroundColor: [
              "#5a4fcf",
              "#b3afe3",
              "#ede9fe",
              "#f5f3ff",
              "#f9fafb",
            ],
            hoverBackgroundColor: [
              "#5a4fcf",
              "#b3afe3",
              "#ede9fe",
              "#f5f3ff",
              "#f9fafb",
            ]
          }]
        },
        doughnutByThemesOptions: {
          plugins: {
            tooltip: {
              displayColors: false,
              padding: 10,
              boxPadding: 5,
              callbacks: {
                label: (ctx) => `${ctx.label} : ${ctx.parsed.toLocaleString('fr-FR')} €`,
              }
            },
            legend: {
              display: false,
            },
            title: {
              display: true,
              text: "Par Thématique",
            },
          },
        }
      };
    },

    computed: {
      firstName() {
        return this.store.getCurrentUserFirstName;
      },
      totalAmount() {
        return 1246554.12.toLocaleString('fr-FR');
      },
      maxContribution() {
        return 10000.00.toLocaleString('fr-FR');
      },
      currentContribution() {
        return 8000.00.toLocaleString('fr-FR');
      },
    },
  };
</script>
