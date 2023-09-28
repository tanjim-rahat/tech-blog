/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#1A1A1A",
        main: "#4ADE80",
      },
      fontFamily: {
        mono: "'Azeret Mono', monospace",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
