/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: ['class', '.think'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Spectral', 'serif'],
      },
      colors: {
        'psyho-lite-accent': '#10b981', // emerald-500 from Tailwind.json
        'psyho-think-accent': '#4f46e5', // indigo-600 from Tailwind.json
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}