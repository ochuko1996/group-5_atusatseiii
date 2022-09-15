/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors:{
        mainRed: "rgb(211, 0, 2)"
      }

    },
    screens:{
      xs: '480px',
      ss: '620px',
      sm: '768px',
      md: '1060px',
      lg: '1200px',
      xl: '1400px'
    }
  },
  plugins: [],
}
