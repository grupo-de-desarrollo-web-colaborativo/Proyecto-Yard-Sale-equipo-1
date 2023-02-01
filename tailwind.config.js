/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        clrPrimary: '#acd9b2',
        clrPrimary10: '#e7e7e7',
        clrSecondary: '#ffffff',
        clrText: '#797979',
        clrText10: '#c7c7c7',
      },
    },
  },
  plugins: [],
};
