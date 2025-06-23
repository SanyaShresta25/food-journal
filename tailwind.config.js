/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        gradientStart: '#f472b6', // pink-400
        gradientEnd: '#fb923c',   // orange-400
      },
      animation: {
        spin: 'spin 1s linear infinite',
      },
      fontFamily: {
       denk: ['"Denk One"', 'sans-serif']
      },
    },
  },
plugins: [require("tailwindcss-animate")],

}
