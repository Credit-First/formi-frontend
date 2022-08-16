/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'back-main': '#000d25',
        'back-sidebar': '#13132B',
        'back-item': '#222240',
        'text-sidebar': '#00ADE2',
        'text-detail': '#9090BA',
        'border-sidebar': '#3954FF',
        'btn-secondary': '#ED1690',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
