/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00040F",
        secondary: "#00F6FF",
        dimWhite: "rgba(255, 255, 255, .7)",
        dimBlue: "rgba(9, 151, 124, .1)"
      },
      fontFamily: {
        poppins: ["Poppins", "sans-sarif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px"
    },
  },
  plugins: [],
}
