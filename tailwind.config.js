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
      keyframes: {
        slideLeft: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        slideLeft: 'slideLeft 0.3s ease-out',
      },
    },
  },
  plugins: [],
};
