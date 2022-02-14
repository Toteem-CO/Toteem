<template>
  <section class="px-8 py-6">
    <h1 class="text-3xl font-medium text-gray-700">Tableau de bord</h1>
    <h2 class="mb-8">Bienvenue sur le tableau de bord de votre espace entreprise {{ firstName }} ! 🎉</h2>

    <div class="shadow-lg rounded-lg bg-white mb-8">
      <h3 class="p-2 flex items-center bg-violet-50 rounded-t-lg items-center justify-center">
        <span class="text-lg font-medium text-gray-900">💰 Synthèse Financière</span>
      </h3>
      <div class="p-4">
        <h4 class="text-gray-800 mb-4 pb-4 border-b-2 border-gray-100 font-medium text-lg">Montant des encours : <span class="font-bold text-[#5a4fcf]">{{ totalAmount }} €</span></h4>
        <div class="flex items-start justify-between">
          <div>
            <DoughnutChart :chartData="doughnutBySources" :options="doughnutBySourcesOptions" :height="200" />
          </div>
          <div>
            <DoughnutChart :chartData="doughnutByProjects" :options="doughnutByProjectsOptions" :height="180" />
          </div>
          <div>
            <DoughnutChart :chartData="doughnutByThemes" :options="doughnutByThemesOptions" :height="200" />
          </div>
        </div>
      </div>
    </div>

    <div class="shadow-lg rounded-lg bg-white">
      <h3 class="p-2 flex items-center bg-violet-50 rounded-t-lg items-center justify-center">
        <span class="text-lg font-medium text-gray-700">💖 Abondement Annuel</span>
      </h3>
      <div class="p-6">
        <div>
          <BarChart :chartData="contributionChart" :options="contributionChartOptions"  :height="50" />
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
  import { CurrencyEuroIcon } from '@heroicons/vue/outline';
  import { DoughnutChart, BarChart } from "vue-chart-3";
  import { Chart, registerables } from 'chart.js';
  import { useUsersStore } from '~/stores/users';

  Chart.register(...registerables);

  export default {
    components: { DoughnutChart, BarChart, CurrencyEuroIcon },

    mounted () {
      //this.fillData();
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
          data: [1000, 2000, 500, 200, 1000],
            backgroundColor: [
              "#77CEFF",
              "#0079AF",
              "#123E6B",
              "#97B0C4",
              "#A5C8ED",
            ],
          }]
        },
        doughnutBySourcesOptions: {
          plugins: {
            legend: {
              position: 'bottom',
              fullSize: false,
              labels: {
                textAlign: 'left',
                boxWidth: 20
              }
            },
            title: {
              display: true,
              text: "Par Source",
            },
          },
        },
        doughnutByProjects: {
          labels:
            ['Retraite', 'Projet Personnel'],
          datasets: [{
            data: [1000, 2000],
            backgroundColor: [
              "#77CEFF",
              "#0079AF",
            ],
          }]
        },
        doughnutByProjectsOptions: {
          plugins: {
            legend: {
              fullSize: false,
              position: 'bottom',
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
            data: [1000, 2000, 500, 200, 1000],
            backgroundColor: [
              "#77CEFF",
              "#0079AF",
              "#123E6B",
              "#97B0C4",
              "#A5C8ED",
            ],
          }]
        },
        doughnutByThemesOptions: {
          plugins: {
            legend: {
              fullSize: false,
              position: 'bottom',
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

    methods: {
      fillData () {
        this.datacollection = {
          labels: [this.getRandomInt(), this.getRandomInt()],
          datasets: [
            {
              label: 'Data One',
              backgroundColor: '#f87979',
              data: [this.getRandomInt(), this.getRandomInt()]
            }, {
              label: 'Data One',
              backgroundColor: '#f87979',
              data: [this.getRandomInt(), this.getRandomInt()]
            }
          ]
        };
      },
      getRandomInt () {
        return Math.floor(Math.random() * (50 - 5 + 1)) + 5;
      }
    }
  }
</script>
