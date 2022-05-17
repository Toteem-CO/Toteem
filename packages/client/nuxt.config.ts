import { defineNuxtConfig } from 'nuxt';

export default defineNuxtConfig({
  ssr: false,
  srcDir: 'src/',
  css: ['~/assets/styles/fonts.scss', '~/assets/styles/tailwind.scss', '~/assets/styles/global.scss'],
  buildModules: ['@pinia/nuxt'],
  build: {
    transpile: ['chart.js'],
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  vite: {
    logLevel: 'info',
    optimizeDeps: {
      include: [
        'vue',
        'pinia',
        'vue-chart-3',
        'chart.js',
        'axios',
      ],
    },
  },
  runtimeConfig: {
    public: {
      API_URL: process.env.API_URL,
    },
  },
  meta: {
    title: 'Toteem',
    link: [{ rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.png' }],
  }
});
