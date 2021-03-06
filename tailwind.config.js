module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Helvetica"],
      serif: ["Georgia"],
    },
    extend: {
      backgroundImage: {
        hero: "url('/bg-white2.jpg')",
        quote: "url('/fleet.jpg')",
      },
      colors: {
        highlight1: "#138BC5",
      },
    },
  },
  plugins: [],
};
