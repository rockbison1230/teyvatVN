/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        quattrocento: ['"Quattrocento"', "serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
