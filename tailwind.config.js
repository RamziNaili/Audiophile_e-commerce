/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {},
      colors: {
        primary: '#D87D4A',
        secondary: '#101010',
        gray: '#F1F1F1',
        ligthgray: '#FAFAFA',
        beige: '#FBAF85',
      },
    },
  },
  plugins: [],
};
