/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#EFF7FA',
          100: '#D6ECF3',
          200: '#AED9E8',
          300: '#7FC0D9',
          400: '#4FA8C9',
          500: '#1976A3',
          600: '#156D9A',
          700: '#105A82',
          800: '#0C4766',
          900: '#083550',
        },
        teal: {
          50: '#E6F7F6',
          100: '#C2EEEC',
          200: '#8FDEDB',
          300: '#5BCDCA',
          400: '#27BDB9',
          500: '#148A86',
          600: '#117975',
          700: '#0E6360',
          800: '#0B4D4A',
          900: '#083836',
        },
        mint: {
          50: '#EAF5EF',
          100: '#D0EBD9',
          200: '#A1D7B4',
          300: '#72C38E',
          400: '#43AF69',
          500: '#2E9B55',
          600: '#248045',
          700: '#1B6635',
          800: '#124C26',
          900: '#093316',
        },
        charcoal: '#243444',
        warm: {
          50: '#FBF9F6',
          100: '#F5F1EA',
          200: '#EDE5D8',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Noto Sans Devanagari', 'system-ui', 'sans-serif'],
        hindi: ['Noto Sans Devanagari', 'Inter', 'sans-serif'],
      },
      fontSize: {
        'base-lg': ['1.125rem', { lineHeight: '1.75' }],
      },
      maxWidth: {
        '8xl': '88rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.4s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'breathe-in': 'breatheIn 4s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        breatheIn: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.6' },
          '50%': { transform: 'scale(1.15)', opacity: '1' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
      },
    },
  },
  plugins: [],
};
