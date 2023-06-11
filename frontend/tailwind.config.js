/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#fff',
        primaryLight: '#c56a4a',
        secondary: '#DA000D',
        tertiary: '#fffbf0',
        // Light grey (#F5F5F5), dark grey (#323232)
        light: '#2d2d2d',
        dark: '#222222'
      }
    }
  },
  // eslint-disable-next-line no-undef
  plugins: []
};
