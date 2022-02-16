const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: {
    files: [
      "./src/components/**/*.{vue,js}",
      "./src/layouts/**/*.vue",
      "./src/pages/**/*.vue",
      "./src/app.vue",
      "./src/plugins/**/*.{js,ts}",
      "./nuxt.config.{js,ts}",
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter var"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
  ],
};