/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#07111f",
        navy: "#0b1d33",
        ocean: "#1167d8",
        skysoft: "#eaf4ff"
      },
      boxShadow: {
        clean: "0 18px 55px rgba(7, 17, 31, 0.12)"
      }
    }
  },
  plugins: []
};
