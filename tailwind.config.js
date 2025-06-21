/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",           // for Vite
    "./src/**/*.{js,ts,jsx,tsx}", // all components
  ],
  theme: {
    extend: {
      animation: {
        wave: 'waveMove 10s ease-in-out infinite',
      },
      keyframes: {
        waveMove: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(-20px)' },
        },
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        inter: ['"Inter"', 'sans-serif'],
        prata: ['"Prata"', 'serif'],
      },
    },
  },
  plugins: [],
};
