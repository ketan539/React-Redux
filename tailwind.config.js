/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
 
  theme: {
    extend: {
      colors: {
        'theme_blue':'#000077',
        'bermuda': '#78dcca',}
    
    },
  },
  plugins: [
     require('@tailwindcss/forms'), 
     
    ],
}