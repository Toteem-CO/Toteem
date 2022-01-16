import { defineNuxtConfig } from "nuxt3";

export default defineNuxtConfig({
  srcDir: "src/",
  buildModules: ["nuxt-windicss"],
  publicRuntimeConfig: {
    API_URL: process.env.API_URL,
  },
});
