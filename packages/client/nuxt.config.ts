export default defineNuxtConfig({
  ssr: false,
  //rootDir: 'packages/client',
  workspaceDir: 'packages/client',
  srcDir: 'src/',
  css: ['~/assets/styles/global.scss'],
  modules: ['@nuxtjs/tailwindcss'],
  build: {
    transpile: ['chart.js'],
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
  },
  tailwindcss: {
    cssPath: '~/assets/styles/tailwind.scss',
    configPath: 'tailwind.config.js',
    injectPosition: 'first',
  },
});
