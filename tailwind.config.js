module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // media veya class
  theme: {
    extend: {},
  },
  plugins: [ require('@tailwindcss/forms'), require('tailwind-scrollbar')],
}
