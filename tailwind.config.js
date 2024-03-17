/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        barlow: ['"Barlow"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        text: '#060709',
        grey: '#7B7B7B',
        primary: '#11998E',
        shade: '#B9F2E5',
        'linear-red': '#FF6A49',
        'linear-yellow': '#E78860',
        'linear-blue': '#61E7D3',
        background: '#E0EDEA',
      },
    },
  },
  plugins: [],
};
