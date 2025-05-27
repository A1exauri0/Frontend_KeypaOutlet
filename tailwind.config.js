// tailwind.config.js
module.exports = {
  darkMode: 'class', // 👈 MUY IMPORTANTE
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue,html}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'),
  ],
};
