/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      "edu-sa": ["Edu SA Beginner", "cursive"],
      mono: ["Roboto Mono", "monospace"],
    },
    colors: {
      white: "#fff",
      black: "#000",
      transparent: "#ffffff00",
      darkVoilet: "#0D051F",
      gray: "#abb8c3",
      lightGray: "#EEE5FF",
      lightVoilet: "#EEE5FFBD",
      orange: "#ff6900",
      palePink: "#f78da7",
      cyanBlue: "#6610f2",
    },
    fontFamily: {
      sora: ["Sora", "Sans-serif"],
    },
  },
  plugins: [],
};
