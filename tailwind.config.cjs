/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      '2xl': 32,
    },
    colors: {
      transparent: 'transparent',
      black: '#000000',
      white: '#fff',
      gray: {
        900: '#121214',
        800: '#121214',
        400: '#7C7C8A',
        100: '#E1E1E6',
        200: '#C4C4CC',
      },
      cyan: {
        500: '#81D8F7',
        300: '#99E1FB'
      }
    },
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif'
      }
    },
  },
  plugins: [],
}