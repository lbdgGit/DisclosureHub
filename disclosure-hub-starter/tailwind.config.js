/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy:       '#1B2A4A',
        'navy-deep':'#0F1B30',
        'navy-mid': '#243558',
        gold:       '#C9A84C',
        'gold-light':'#E8C96A',
        cream:      '#FAF8F4',
        'text-primary':   '#1B2A4A',
        'text-secondary': '#4A5D78',
        'text-muted':     '#8A9BB5',
        border:     '#E2E8F0',
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        body:    ['DM Sans', 'sans-serif'],
        mono:    ['DM Mono', 'monospace'],
      },
      fontSize: {
        '2xs': '0.6875rem',
      },
      maxWidth: {
        '8xl': '88rem',
      },
      boxShadow: {
        'card':  '0 4px 24px rgba(27,42,74,0.06)',
        'card-hover': '0 8px 32px rgba(27,42,74,0.12)',
        'gold':  '0 4px 20px rgba(201,168,76,0.2)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4,0,0.6,1) infinite',
      },
    },
  },
  plugins: [],
};
