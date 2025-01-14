export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
// tailwind.config.js
module.exports = {
  darkMode: 'class',  // Enables dark mode based on class
  theme: {
    extend: {
      colors: {
        darkBackground: '#1a202c',
        darkText: '#cbd5e0',
      },
    },
  },
};
