/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      'jakarta-bold': ['jakarta-bold'],
    },
    extend: {
      colors: {
        'custom-blue': '#88aef8',
        'custom-darkgray': '#6a6a6a',
        'custom-lightgray': '#e7e7e7',
        'border-color': '#d3d3d3'
      },
      transitionProperty: {
        'button-animation': 'top, bottom, right, left',
      },
    },
  },
  plugins: [],
}
