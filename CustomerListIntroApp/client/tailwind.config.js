/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode : "class",
  theme: {
    extend: {
      boxShadow : {
        "input" : "inset 0 0 0 220px white !important",
        "input-dark" : "inset 0 0 0 220px #6b7280 !important"
      }
    },
  },
  plugins: [],
}

