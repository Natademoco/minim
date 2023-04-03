/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '480px',
      'sm': '768px',
      'md': '1060px',
      'lg': '1280px',
      'xl': '1536px',
    },
    extend: {},
  },
  plugins: [],
}

