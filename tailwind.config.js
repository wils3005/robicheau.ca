module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        primary: "#f472b6",
        secondary: "#373636",
      },
      height: {
        fit: "fit-content",
      },
      width: {
        fit: "fit-content",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
