// tailwind.config.js

// module.exports = {
//   // - content: [],
//   content: ["./App.{js,jsx,ts,tsx}", "./<custom-folder>/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }


/** @type {import('tailwindcss').Config} */
const nativewind = require("nativewind/tailwind/native")

module.exports = {
  content: ["./app/**/*.{js}", "./index.js"],
  theme: {
    extend: {},
  },
  plugins: [nativewind()],
}