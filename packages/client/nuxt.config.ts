import { defineNuxtConfig } from 'nuxt';

export default defineNuxtConfig({
  ssr: false,
  srcDir: 'src/',
  css: ['~/assets/styles/tailwind.scss', '~/assets/styles/global.scss'],
  build: {
    transpile: ['chart.js'],
/*     postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    }, */
  },
  postcss: {
    plugins: {
      tailwindcss: {},
    },
  },
  imports: {
    dirs: [
      'composables/**'
    ]
  },
  vite: {
    logLevel: 'info',
    optimizeDeps: {
      include: [
        'vue',
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
