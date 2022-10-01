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
      keyframes: {
        animarrow: {
          '0%': {
            transform: 'rotate(0)'
          },
          '100%': {
            transform: 'rotate(90deg)'
          },
        },
        animarrowback: {
          '0%': {
            transform: 'rotate(90deg)'
          },
          '100%': {
            transform: 'rotate(0)'
          },
        },
        extendform: {
          '0%': {
            height: '0rem'
          },
          '100%': {
            height: '130rem'
          },
        },
        retraceform: {
          '0%': {
            height: '130rem'
          },
          '100%': {
            height: '0rem'
          },
        },
        appear: {
          '0%': {
            opacity: '0'
          },
          '100%': {
            opacity: '100%'
          },
        },
        disappear: {
          '0%': {
            opacity: '100%'
          },
          '100%': {
            opacity: '0'
          },
        }
      }
    },
  },
  plugins: [require('@tailwindcss/forms'),],
}
