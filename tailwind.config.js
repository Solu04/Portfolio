/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px'

    },
    extend: {
      colors: {
        darkBlue: '#02122E',
        lightBlue: '#02183F',
        lightGreenishBlue: '#36D1DF',
      },
    },
  },
  plugins: [],
}
