/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightpink: "#FBE4EC",
        deeppink: "#C13371",
        pink: "#E49DBB" , 
        grey: "#F6EEF6" ,
      },
      fontFamily: {
        josefin: ['Josefin Sans', 'sans'],
        frank: ['Frank Ruhl Libre', 'serif'],
      },
      fontSize: {
        'sm': '14px',
        'md': '16px',
        'lg': '20px',
        'xl': '25px',
        'xxl': '40px',
      },
      fontWeight: {
        thin:  300,
        normal: 400,
        medium: 600,
        bold: 800,
      },
      scale: {
        '-1': '-1',
      },
    },
  },
  plugins: [],
}