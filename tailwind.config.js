/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'logo': ['Dancing Script', 'cursive'],
        'carter': ['Carter One', 'cursive'],
      },
    },
  },
  plugins: [require("daisyui")],
}
