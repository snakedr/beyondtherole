/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: ['class', '.is-think'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Spectral', 'Playfair Display', 'serif'],
        hand: ['Caveat', 'cursive'],
      },
      colors: {
        'lite-bg': '#F8FAFC',
        'lite-text': '#1e293b',
        'think-bg': '#0a0a0a',
        'think-text': '#e2e8f0',
        'think-accent': '#818cf8', // Indigo-400
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0'},
          '100%': { transform: 'translateY(0)', opacity: '1'},
        }
      },
      animation: {
        'fade-in': 'fade-in 0.4s ease-in',
        'slide-up': 'slide-up 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}