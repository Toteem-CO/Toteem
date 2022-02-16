import { defineNuxtConfig } from "nuxt3";

export default defineNuxtConfig({
  srcDir: "src/",
  buildModules: ["@pinia/nuxt"],
  build: {
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
    logLevel: "info",
    optimizeDeps: {
      include: [
        "@headlessui/vue",
        "@heroicons/vue/solid",
        "@heroicons/vue/outline",
        "vue",
        "pinia",
      ],
    },
  },
  publicRuntimeConfig: {
    API_URL: process.env.API_URL,
  },
});
