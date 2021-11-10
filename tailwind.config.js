module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brownColor: "#111",
        brownColor1: "#444",
        brownColor2: "#2b2a2a",
        yellowColor: "#ffb400",
        bg1:"#ffb400",
        bg2:"#444",
        bg3:"#2b2a2a",
        bg4:"#111",
      }
    },
    container: {
      padding: {
        default: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
