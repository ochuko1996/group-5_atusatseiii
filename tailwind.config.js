/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "main-red": "rgb(var(--color-danger))"
      }

    },
    screens: {
      xs: '480px',
      ss: '577px',
      sm: '768px',
      md: '1060px',
      lg: '1200px',
      xl: '1400px'
    }
  },
  plugins: [],
}
