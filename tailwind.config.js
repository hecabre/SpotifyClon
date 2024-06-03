/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "purple-heart": {
          50: "#eef0ff",
          100: "#dfe4ff",
          200: "#c6ccff",
          300: "#a3abfe",
          400: "#7f7ffa",
          500: "#6a60f4",
          600: "#5b43e8",
          700: "#4b32c8",
          800: "#402ea5",
          900: "#382d82",
          950: "#221a4c",
        },
      },
    },
  },
  plugins: [],
};
