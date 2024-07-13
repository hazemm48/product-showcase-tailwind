/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        "dark-blue": "#1D364D",
        "light-pink": "#f5f1ee",
        "indigo-25": "#EDF0F8",
      },
      aspectRatio: {
        image: "9/16",
      },
    },
  },
  plugins: [],
};
