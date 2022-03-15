const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: {
    files: [
      './src/components/**/*.{vue,js}',
      './src/layouts/**/*.vue',
      './src/pages/**/*.vue',
      './src/app.vue',
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Inter var'", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  daisyui: {
    themes: [{
      mytheme: {
        'primary': '#5A4FCF',
        'primary-content': '#F5F5F5',
        'secondary': '#FB6F58',
        'accent': '#F8870D',
        'neutral': '#3D4451',
        'neutral-content': '#F5F5F5',
        'base-100': '#FFFFFF',
        'base-200': '#FAFAFA',
        'info': '#B3AFE3',
        'success': '#35A953',
        'warning': '#FBBD23',
        'error': '#EA4436',
      },
    }],
  },
  plugins: [
/*    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),*/
    require('daisyui'),
  ],
};
