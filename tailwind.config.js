/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    colors: {
      'dark-red': '#E06666',
      'red': '#EA9999',
      'dark-green': '#7ABD7E',
      'green': '#B6D7A8',
      'dark-yellow': '#FFC571',
      'yellow': '#FAD5A0',
      'gray': '#D7D7D7AB',
      'dark-gray': '#6D6D6D',
      'white': '#FFFFFF',
    },
    extend: {},
  },
  plugins: [],
}