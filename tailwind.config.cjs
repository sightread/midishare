const colors = require("tailwindcss/colors")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "500px",
      md: "760px",
      lg: "1100px",
    },
    extend: {},
  },
  plugins: [],
}
