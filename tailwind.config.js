/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js}"],
  theme: {
    extend: {      
      backgroundImage:{
        "header-bg-color": "linear-gradient(0deg, rgb(255, 255, 255),rgba(255, 255, 255, 0) 100%)"
      },
      borderRadius:{
        "32": "32px"
      },
      colors:{
        "btn-color": "rgb(171, 239, 95)",
        "btn-color-2": "rgb(28, 28, 28)",
        "border-color": "rgb(171, 239, 95)",
        "btn-color-3": "rgba(171, 239, 95, 0.5)",
        "title-color": "rgb(33, 33, 33)",
        "item-color-1": "rgb(73, 73, 73)",
        "item-color-2": "rgb(115, 115, 115)",
      },
      fontFamily:{
        "Manrope": "Manrope",
      },
      fontSize:{
        "14": "14px",
        "28": "28px",
        "32": "32px",
        "64": "64px",
      },
      lineHeight:{
        "44": "44px",
        "49": "49px",
        "87": "87px",
      },      
           
    },
  },
  plugins: [
    require('daisyui'),
  ],
}