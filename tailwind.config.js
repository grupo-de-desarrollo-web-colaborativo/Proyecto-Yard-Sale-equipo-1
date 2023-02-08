/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  // content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1020px',
      xl: '1440px',
    },
    extend: {
      colors: {
        mossGreen: '#acd9b2',
        mercury: '#e7e7e7',
        white: '#ffffff',
        Boulder: '#797979',
        Silver: '#c7c7c7',
      },
      // width: {
      //   88: '23.4375rem',
      // },
      // height: {
      //   88: '23.25rem',
      // },
    },
  },
  plugins: [],
};
