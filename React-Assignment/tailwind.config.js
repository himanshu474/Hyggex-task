/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      mont: ['Montserrat', "sans-serif"],
      lato: ['Lato', "sans-serif"],
      inter: ["Inter", "sans-serif"],
    },
    extend: {
      maxWidth: {
        maxContent: "1440px",
      },
      Shadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        '4xl': [
          '0 35px 35px rgba(0, 0, 0, 0.25)',
          '0 45px 65px rgba(0, 0, 0, 0.15)'
        ]
      },
      colors: {
        background: "#F9F9F9",
      },
    },
  },
  plugins: [],
}

