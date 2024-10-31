// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",          // Includes all files within app and its subdirectories
    "./app/components/**/*.{js,jsx,ts,tsx}", // Specifically for components directory
    "./public/index.html",                   // Includes any HTML in public
  ],
  theme: {
    extend: {
      colors: {
        brand: "#0aff9d", 
        text: "#ebecf3",
        darkBg: "#080808",
        lightBg: "#232323",
        light: "#B3C8CF",
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        jost: ["Jost", "sans-serif"],
      },
    },
  },
  plugins: [],
  darkMode: "class", // For manual dark mode control
};
