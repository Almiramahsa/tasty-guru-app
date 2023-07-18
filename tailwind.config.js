/** @type {import('tailwindcss').Config} */
const forms = require('@tailwindcss/forms');

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        jakarta: ['Plus Jakarta Sans', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],

      }
    }
  },
  
    plugins: [forms],
  
}
