/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {},
    transform: {
      "transform-btn": ["translateX(80px) rotate(360deg)"],
    },

    boxShadow: {
      "shadow-btns": [
        "0px 0px 0px 2px #f0edf1",
        "2px 2px 7px #a7aaaf",
        "-2px -2px 7px #ffffff",
      ],
    },

    dropShadow: {
      "neon-shadow": ["0px 0px 10px #999999", "0px 0px 20px #999999"],
      "shadow-btn": [
        "inset 10px 10px 15px #a7aaf",
        "inset -10px -10px 15px #ffffff",
      ],
    },
  },
  plugins: [require("tailwind-scrollbar"), require("@tailwindcss/forms")],
};
