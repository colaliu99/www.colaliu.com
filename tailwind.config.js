/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Noto Sans SC', 'sans-serif'],
        // Added 'Songti SC' (iOS), 'STSong', 'SimSun' (Windows) for better cross-platform support
        serif: ['Noto Serif SC', 'Songti SC', 'STSong', 'SimSun', 'serif'],
      },
    },
  },
  plugins: [],
}