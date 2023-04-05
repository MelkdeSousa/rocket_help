/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './<custom directory>/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        product: {
          300: '#04d361',
          500: '#00b37e',
          700: '#00875f',
        },
        supporting: {
          primary: '#996dff',
          secondary: '#fba94c',
        },
        gray: {
          100: '#E1E1E6',
          200: '#C4C4CC',
          300: '#7C7C8A',
          400: '#323238',
          500: '#29292E',
          600: '#202024',
          700: '#121214',
        },
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
