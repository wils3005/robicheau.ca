module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        primary: "#f58220",
        secondary: "#373636",
      },
      height: {
        fit: "fit-content",
      },
      padding: {
        vid: "56.25%",
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
