/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#7E49FF",
        },

        secondary: {
          light: "#94A3B8",
          DEFAULT: "#475467",
        },
      },
    },
  },
  plugins: [],
};  
