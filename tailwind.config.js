/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'back-main': '#000d25',
        'back-sidebar': '#13132B',
        'back-item': '#222240',
        'back-tooltip': '#323255',
        'text-sidebar': '#00ADE2',
        'text-detail': '#9090BA',
        'border-sidebar': '#3954FF',
        'btn-secondary': '#ED1690',
        'symbol-main': '#ED1690',
        'back-ranking': '#113C5E',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
