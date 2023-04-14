/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Poppins', 'sans-serif']
    },

    extend: {
      backgroundColor: {
        'blue-500': '#476EE6',
        'gray-50': '#F7F9FB',
        'gray-100': '#D7D7D7',
      },

      colors: {
        'green': '#3EC97E',
        'blue-500': '#476EE6',
        'gray-100': '#D7D7D7',
        'gray-150': '#6A6A6A',
        'gray-200': '#3C3C43B8',
        'gray-250' : '#808080',
        'gray-300': '#787486',
        'black-100': '#1A1A1A',
      },
    },
  },
  plugins: [],
}