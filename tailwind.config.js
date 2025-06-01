// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
  extend: {
    colors: {
      brand: {
        light: '#dcd7ce',
        red: '#be1f25',
        dark: '#1e1e1e',
        gray: '#7a7976',
        border: '#3f3f3e',
      },
    },
  },
},
  plugins: [],
}