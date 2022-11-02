/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      'jakarta-extrabold': ['jakarta-extrabold'],
      'jakarta-bold': ['jakarta-bold'],
      'jakarta-medium': ['jakarta-medium'],
      'jakarta-regular': ['jakarta-regular'],
    },
    extend: {
      colors: {
        'custom-blue': '#88aef8',
        'custom-darkgray': '#6a6a6a',
        'custom-lightgray': '#e7e7e7',
        'custom-bg-gray': '#f5f5f5',
        'border-color': '#d3d3d3',
      },
      gridTemplateAreas: {
        'home': [
          'news interviews',
          'news rss',
        ]
      },
      gridTemplateColumns: {
        'preview': 'repeat(2, minmax(auto, 500px))'
      }
    },
  },
  plugins: [
    require('@savvywombat/tailwindcss-grid-areas'),
  ],
}
