/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "header-image": "url('./src/assets/images/PIZZA-COVER.jpg')",
      },
    },
  },
  plugins: [],
};
