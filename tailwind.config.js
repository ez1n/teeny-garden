/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        '9/20': '45%'
      },
      colors: {
        'brand-primary': '#F06A8A',
        'brand-secondary': 'rgba(26, 46, 5,0.3)',
        backdrop: 'rgba(0,0,0,0.4)'
      },
      scale: {
        103: '1.03'
      },
      backgroundImage: {
        banner: `url(../public/images/banner.jpg)`
      },
      zIndex: {
        1: '1',
      }
    },
  },
  plugins: [],
}

