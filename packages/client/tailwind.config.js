import defaultTheme from 'tailwindcss/defaultTheme';

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Inter var'", ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        'ttm-layout': '0 0 14px 0 rgba(0, 0, 0, 0.1)',
      },
    },
  },
  daisyui: {
    themes: [
      {
        'toteem-light': {
          primary: '#5A4FCF',
          'primary-content': '#F5F5F5',
          secondary: '#FB6F58',
          accent: '#F8870D',
          neutral: '#3D4451',
          'neutral-content': '#F5F5F5',
          'base-100': '#FFFFFF',
          'base-200': '#FAFAFA',
          info: '#edecfa',
          success: '#35A953',
          warning: '#FBBD23',
          error: '#EA4436',
        },
      },
      {
        'toteem-dark': {
          ...require('daisyui/src/colors/themes')['[data-theme=dark]'],
          primary: '#5A4FCF',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};
