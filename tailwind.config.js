// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust paths as needed
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        brand: "#0aff9d", // Example custom color
        text: "#ebecf3",
        darkBg: "#080808",
        lightBg: "#232323",
        light: "#B3C8CF",
        // Add more custom colors here if needed
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        jost: ["Jost", "sans-serif"],
        // Add more custom fonts here if needed
      },
    },
  },
  plugins: [],
  darkMode: "selector", // Change to "media" for OS preference or "class" for manual control
};
