module.exports = {
  content: [
    "./public/**/*.html",
    "./**/*.html",
    "./src/**/*.{js,ts,jsx,tsx,tsx}" // include any JS/TSX sources
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
};
