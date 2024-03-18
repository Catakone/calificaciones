/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
     colors : {
        'owo': '#0D9488',
        'uwu': '#394648',
      }
     },
     fontFamily: {
      'questrial': ['Questrial', 'sans-serif'],

    }
    },
  plugins: [],
}