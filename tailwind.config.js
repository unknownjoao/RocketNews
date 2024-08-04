/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
  './public/**/*.{html,js}',
  '*.{html,js}'
],
  theme: {
    extend: {
      fontFamily: {
        'worksans': ['Work Sans', 'sans-serif'],
        'spartan': ['League Spartan', 'sans-serif'],
      }
    },
  },
  plugins: [],
}