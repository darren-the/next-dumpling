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
        'home-desktop': [
          'news interviews',
          'news rss',
        ],
        'home-mobile': [
          'news',
          'interviews',
          'rss',
        ],
        'content-desktop': [
          'content-outer content-ad',
          'content-rec content-ad',
        ],
        'content-mobile': [
          'content-ad',
          'content-outer',
          'content-rec',
        ],
      },
      gridTemplateColumns: {
        'grid-view': 'repeat(2, minmax(0, 900px))',
        'content': 'auto 1fr',
        '2-auto': 'auto auto',
        '3-1fr': 'repeat(3, 1fr)',
        'home-desktop': '65% 35%',
        '2-memes': 'repeat(2, minmax(0, 500px))',
      },
      gridTemplateRows: {
        '2-auto': 'auto auto',
        'home-desktop': 'auto 1fr',
      },
    },
  },
  plugins: [
    require('@savvywombat/tailwindcss-grid-areas'),
  ],
}
