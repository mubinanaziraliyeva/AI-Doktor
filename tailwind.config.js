/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./**/*.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: [
      "light",
      "dark",
      "dracula", // Sizga kerakli tema
      "cupcake", // Agar boshqalari ham kerak bo'lsa
      "aqua",
    ],
  },
};
