import { fontFamily } from 'tailwindcss/defaultTheme';
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      atyp: 'var(--font-AtypDisplay)',
    },
    extend: {
      colors: {
        design: {
          base: 'rgb(25,23,25)',
          ligbase: '#F2F2F2 ',
          secBase: 'rgb(142,78,198)',
          tirBase: 'rgb(19,17,19)',
          text: '#F2F2F2',
          dirtext: '#101010',
          grytext: '#D9D9D9',
        },
      },
      boxShadow: {
        des: '0px 5px 0px 0px #000',
      },
    },
  },
  plugins: [],
};
