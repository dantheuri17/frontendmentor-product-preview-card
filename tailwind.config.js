
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-cyan": "var(--dark-cyan)",
        "cream": "var(--cream)",
        "very-dark-blue": "var(--very-dark-blue)",
        "dark-grayish-blue": "var(--dark-grayish-blue)"
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        fraunces: ['Fraunces', 'sans-serif']
      }
    },
  },
  plugins: [],
}
