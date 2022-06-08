import { Chart, DoughnutController, Tooltip, BarController, ArcElement, LinearScale, CategoryScale, BarElement, LineController, PointElement, LineElement } from 'chart.js';

export default defineNuxtPlugin(() => {
  Chart.register(
    DoughnutController,
    Tooltip,
    BarController,
    ArcElement,
    LinearScale,
    CategoryScale,
    BarElement,
    LineController,
    PointElement,
    LineElement
  );
})
