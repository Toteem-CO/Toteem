<template>
  <section class="px-8 py-6">
    <h1 class="text-3xl font-medium text-gray-700">Tableau de bord</h1>
    <h2 class="mb-8">Bienvenue sur le tableau de bord de votre espace entreprise {{ firstName }} ! 🎉</h2>


    <div class="p-2 shadow-xl rounded-xl bg-white">
      <h3 class="flex items-center">
        <CurrencyEuroIcon aria-hidden="true" class="w-5 h-5 mr-2" />
        <span>Synthèse Financière</span>
      </h3>
      <div>
        <h4>Montant des encours : {{ totalAmount }} €</h4>
        <div class="flex items-start justify-between">
          <div>
            <DoughnutChart :chartData="doughnutBySources" :options="doughnutBySourcesOptions" height="200" />
          </div>
          <div>
            <DoughnutChart :chartData="doughnutByProjects" :options="doughnutByProjectsOptions" height="180" />
          </div>
          <div>
            <DoughnutChart :chartData="doughnutByThemes" :options="doughnutByThemesOptions" height="200" />
          </div>
        </div>
      </div>
      <div>
        <h4>Abondement annuel</h4>
        <div>
          <BarChart :chartData="contributionChart" :options="contributionChartOptions"  />
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
            axis: 'y',
            data: [80],
            base: 0,
            barPercentage: 1,
            fill: true,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
            ],
          }]
        },
        contributionChartOptions: {
          indexAxis: 'y',
          scale: {
            max: 100,
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
              text: "Par source de versement",
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
              text: "Par projet",
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
              text: "Par thématique d'investissement",
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
        return 1246554.12
      }
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
