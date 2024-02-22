/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#05C8C6",
        secondary: "#808d95",
        tertiary: "#E6F5F3",
        success: "#4CAF50",
        error: "red",
        warning: "#FFC107",
      },
      width: {
        550: "550px",
      },
      boxShadow: {
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
        "inset-active": "inset 0 4px 0px rgba(0,0,0,.1)",
      },
      fontFamily: {
        koulen: ["Koulen", "sans-serif"],
        circular: ["Circular Std", "sans-serif"],
      },
    },
  },
  plugins: [],
};
