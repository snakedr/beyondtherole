/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Georgia', '"Times New Roman"', 'serif'],
        hand: ['Caveat', 'cursive'],
      },
      colors: {
        'lite-bg': '#ffffff',
        'lite-text': '#111111',
        'think-bg': '#0a0a0a',
        'think-text': '#e2e8f0',
        'think-accent': '#818cf8',
      },
      keyframes: {
        'fade-in': { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        'slide-up': { '0%': { transform: 'translateY(20px)', opacity: '0'}, '100%': { transform: 'translateY(0)', opacity: '1'} }
      },
      animation: {
        'fade-in': 'fade-in 0.4s ease-in',
        'slide-up': 'slide-up 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.lite-text'),
            '--tw-prose-headings': theme('colors.lite-text'),
            '--tw-prose-lead': theme('colors.lite-text'),
            '--tw-prose-links': theme('colors.lite-text'),
            '--tw-prose-bold': theme('colors.lite-text'),
            '--tw-prose-counters': theme('colors.lite-text'),
            '--tw-prose-bullets': theme('colors.lite-text'),
            '--tw-prose-hr': theme('colors.lite-text'),
            '--tw-prose-quotes': theme('colors.lite-text'),
            '--tw-prose-quote-borders': theme('colors.lite-text'),
            '--tw-prose-captions': theme('colors.lite-text'),
            '--tw-prose-code': theme('colors.lite-text'),
            '--tw-prose-pre-code': theme('colors.lite-text'),
            '--tw-prose-pre-bg': '#f9f9f9',
            '--tw-prose-invert-body': theme('colors.think-text'),
            '--tw-prose-invert-headings': theme('colors.think-text'),
            '--tw-prose-invert-links': theme('colors.think-accent'),
            
            fontFamily: theme('fontFamily.serif').join(', '),
            
            'h1, h2, h3, h4, h5, h6': {
              fontFamily: theme('fontFamily.serif').join(', '),
            },
            
            a: {
              textDecoration: 'underline',
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}