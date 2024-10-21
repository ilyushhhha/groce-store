/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)'
      }
    //   animation: {
    //     'popup-enter': 'popup-enter 0.3s ease-out forwards',
    //     'popup-leave': 'popup-leave 0.3s ease-out forwards',
    //   },
    //   keyframes: {
    //     'popup-enter': {
    //       '0%': { opacity: '0', transform: 'scale(0.9)' },
    //       '100%': { opacity: '1', transform: 'scale(1)' },
    //     },
    //     'popup-leave': {
    //       '0%': { opacity: '1', transform: 'scale(1)' },
    //       '100%': { opacity: '0', transform: 'scale(0.9)' },
    //     },
      }},
  plugins: [],
};

