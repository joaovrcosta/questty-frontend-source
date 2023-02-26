/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        primary: "#FFFCE6",
        blue: "#45A6FF",
        blackBlue: "#10162F"
      },
      fontFamily: {
        poppins: "Poppins",
        inter: "Inter"
      }
    },
  },
  plugins: [],
}
