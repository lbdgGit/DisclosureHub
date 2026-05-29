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
        // Design system : "Signal from the dark"
        void:     '#050810',
        surface:  '#0B0F1A',
        panel:    '#111827',
        border:   '#1E2A3B',
        muted:    '#4A5568',
        body:     '#B0BCCF',
        bright:   '#E8EFF8',

        // Accents
        signal:   '#FF6B35',   // orange brûlé — alerte radar
        cold:     '#38BDF8',   // bleu froid — signal fréquence
        classified:'#D4B896',  // beige sépia — document déclassifié
        verified: '#4ADE80',   // vert — confirmation
        redacted: '#EF4444',   // rouge — zone censurée
      },
      fontFamily: {
        display: ['var(--font-syne)', 'sans-serif'],
        mono:    ['var(--font-jetbrains)', 'monospace'],
        serif:   ['var(--font-instrument)', 'Georgia', 'serif'],
        body:    ['var(--font-syne)', 'sans-serif'],
      },
      fontSize: {
        '2xs': '0.625rem',
      },
      backgroundImage: {
        'noise':       "url('/noise.svg')",
        'grid-faint':  'linear-gradient(rgba(255,107,53,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,107,53,0.03) 1px, transparent 1px)',
        'radial-void': 'radial-gradient(ellipse at center, #0B1428 0%, #050810 70%)',
      },
      backgroundSize: {
        'grid': '60px 60px',
      },
      animation: {
        'pulse-slow':  'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'scan':        'scan 3s linear infinite',
        'flicker':     'flicker 5s step-end infinite',
        'float':       'float 6s ease-in-out infinite',
        'blink':       'blink 1.2s step-end infinite',
      },
      keyframes: {
        scan: {
          '0%':   { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        flicker: {
          '0%, 100%': { opacity: '1' },
          '92%':      { opacity: '1' },
          '93%':      { opacity: '0.4' },
          '94%':      { opacity: '1' },
          '95%':      { opacity: '0.6' },
          '96%':      { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0' },
        },
      },
      boxShadow: {
        'signal':    '0 0 20px rgba(255,107,53,0.3), 0 0 60px rgba(255,107,53,0.1)',
        'cold':      '0 0 20px rgba(56,189,248,0.3), 0 0 60px rgba(56,189,248,0.1)',
        'panel':     '0 4px 6px -1px rgba(0,0,0,0.5), 0 2px 4px -2px rgba(0,0,0,0.3)',
        'card':      '0 0 0 1px rgba(30,42,59,1), 0 4px 24px rgba(0,0,0,0.4)',
      },
    },
  },
  plugins: [],
};
