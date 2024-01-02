/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        'ps':'300px',
        'pm':'500px'
      }
    },
  },
  plugins: [],
}