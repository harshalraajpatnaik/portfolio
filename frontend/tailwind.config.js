/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts,scss}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'void':       '#0a0d14',
        'slate-deep': '#121824',
        'crimson':    '#E53935',
        'energy':     '#FFD600',
        'cyan-glow':  '#00E5FF',
        'grass':      '#00E676',
        'psychic':    '#B388FF',
        'glass':      'rgba(18,24,36,0.75)',
      },
      fontFamily: {
        sans: ['Inter', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'ball-open': 'ball-open 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards',
        'fade-in': 'fade-in 0.6s ease forwards',
      },
      keyframes: {
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 12px rgba(229, 57, 53, 0.4)' },
          '50%': { opacity: '0.8', boxShadow: '0 0 24px rgba(229, 57, 53, 0.8)' },
        },
        'ball-open': {
          '0%':   { transform: 'scale(0.1) translateY(-40px)', opacity: '0' },
          '40%':  { transform: 'scale(1.05) translateY(0)', opacity: '1' },
          '60%':  { transform: 'scale(0.98)', opacity: '1' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'fade-in': {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backdropBlur: { xs: '2px' },
    },
  },
  plugins: [],
}
