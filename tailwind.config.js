/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'herobtngradient': 'linear-gradient(281.69deg, rgba(121, 64, 239, 0.08) 1.41%, rgba(255, 255, 255, 0.08) 110.34%)',
        'ourproject': 'linear-gradient(90deg, rgba(222,216,255,1) 0%, rgba(146,105,241,1) 4%, rgba(123,72,237,1) 100%)',
      },
    },
  },
  plugins: [],
}
