export default defineNuxtConfig({
  ssr: false,
  srcDir: 'src/',
  css: ['~/assets/styles/global.scss'],
  build: {
    transpile: ['chart.js', 'vuetify'],
  },
  modules: ['@nuxtjs/tailwindcss'],
  imports: {
    dirs: [
      'composables/**'
    ]
  },
  vite: {
    logLevel: 'warn',
    optimizeDeps: {
      include: [
        'vue',
        'chart.js',
        'axios',
      ],
    },
    define: {
      'process.env.DEBUG': false,
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
