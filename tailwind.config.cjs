/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#009EFF',
        secondary: '#00E7FF',
        danger: '#DC143C',
        white: '#FFFFFF',
        black: '#000000',
        background: '#F5F5F5',
      },
    },
  },
  plugins: [],
}
