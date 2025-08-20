/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef8ff",
          100: "#d6ecff",
          200: "#9fd2ff",
          300: "#66b6ff",
          400: "#339dff",
          500: "#0d86ff",
          600: "#0067d6",
          700: "#004ea3",
          800: "#003a7a",
          900: "#002a59"
        }
      }
    },
  },
  plugins: [],
};
