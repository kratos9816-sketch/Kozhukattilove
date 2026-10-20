/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        luxury: {
          black: '#080808',
          dark: '#121212',
          card: '#181818',
          border: '#262626',
          ivory: '#F6F3EE',
          'ivory-light': '#FAF8F5',
          burgundy: '#4B101D',
          'burgundy-light': '#681728',
          rose: '#C98791',
          'rose-soft': '#F4E8EB',
          gold: '#D6B77A',
          'gold-light': '#E9D6AB'
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'Georgia', 'serif'],
        display: ['"Playfair Display"', 'Cormorant Garamond', 'serif']
      },
      letterSpacing: {
        'luxury-wide': '0.22em',
        'luxury-widest': '0.35em'
      }
    },
  },
  plugins: [],
}
