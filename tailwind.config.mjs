/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
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
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            'h1, h2, h3, h4, h5, h6': {
              fontFamily: theme('fontFamily.sans').join(', '),
              color: theme('colors.slate[800]'),
            },
            p: {
              color: theme('colors.slate[700]'),
            },
            a: {
              color: theme('colors.indigo[600]'),
              '&:hover': {
                color: theme('colors.indigo[800]'),
              },
            }
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}