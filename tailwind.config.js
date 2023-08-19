/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      extend: {
        colors: {
          black: "#000",
        },
        fontFamily: {
          cairoRegular: ['cairo-regular', 'sans-serif'],
        }
      },
    },
  }
}