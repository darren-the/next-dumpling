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
        ],
        'content': [
          'content-outer content-side',
          'content-rec content-side',
        ]
      },
      gridTemplateColumns: {
        'grid-view': 'repeat(2, minmax(auto, 500px))',
        'content': 'auto 1fr',
        '2-auto': 'auto auto'
      },
      gridtemplateRows: {
        '2-auto': 'auto auto',
      },
    },
  },
  plugins: [
    require('@savvywombat/tailwindcss-grid-areas'),
  ],
}
