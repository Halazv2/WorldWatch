/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Beige (#DDD0C8), dark grey (#323232)
        primary: '#DDD0C8',
        secondary: '#323232',
        // Light grey (#F5F5F5), dark grey (#323232)
        light: '#F5F5F5',
        dark: '#323232'
      }
    }
  },
  plugins: []
};
