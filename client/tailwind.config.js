/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        'rotate-bottom-top': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' } // Corrected line
        },
      },
      animation: {
        'rotate-bottom-top': 'rotate-bottom-top 10s linear infinite',
      },
    },
  },
  plugins: [],
};


