/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "Pizaa-COVER": "url('./src/assets/images/PIZZA-COVER.jpg')",
      },
    },
  },
  plugins: [],
};
