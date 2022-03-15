import { Chart, DoughnutController, Tooltip, BarController, ArcElement, LinearScale, CategoryScale, BarElement } from 'chart.js';

export default defineNuxtPlugin(() => {
  Chart.register(DoughnutController, Tooltip, BarController, ArcElement, LinearScale, CategoryScale, BarElement);
})
