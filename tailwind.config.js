/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'brand-primary': '#F06A8A',
        'brand-secondary': 'rgba(26, 46, 5,0.3)'
      },
      scale: {
        103: '1.03'
      },
      backgroundImage: {
        banner: `url(../public/images/banner.jpg)`
      }
    },
  },
  plugins: [],
}

