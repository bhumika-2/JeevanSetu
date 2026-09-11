/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        teal: {
          50: '#EDF7F5',
          100: '#D3ECE7',
          200: '#A6D9CF',
          300: '#79C5B6',
          400: '#3FA491',
          500: '#0F6B62',
          600: '#0C554E',
          700: '#0A443E',
          800: '#08332F',
          900: '#052220'
        },
        indigo: {
          50: '#EAEEF3',
          100: '#CBD5E1',
          200: '#93A5BC',
          300: '#5D7595',
          400: '#33517A',
          500: '#1E3A5F',
          600: '#182F4C',
          700: '#132539',
          800: '#0D1A28',
          900: '#080F17'
        },
        saffron: {
          50: '#FEF6E8',
          100: '#FCE7C0',
          200: '#FAD48C',
          300: '#F7C158',
          400: '#F6B33A',
          500: '#F5A524',
          600: '#D6890F',
          700: '#A6690C',
          800: '#764B09',
          900: '#452C05'
        },
        canvas: '#F6F9F8',
        ink: '#0E1F1B'
      },
      fontFamily: {
        display: ['"Manrope"', 'system-ui', 'sans-serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        card: '0 1px 2px rgba(14,31,27,0.04), 0 8px 24px -12px rgba(14,31,27,0.12)',
        pop: '0 12px 32px -8px rgba(15,107,98,0.28)'
      },
      borderRadius: {
        xl2: '1.25rem'
      },
      keyframes: {
        'pulse-ring': {
          '0%': { transform: 'scale(0.9)', opacity: '0.7' },
          '70%': { transform: 'scale(1.6)', opacity: '0' },
          '100%': { transform: 'scale(1.6)', opacity: '0' }
        },
        'rise-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        wave: {
          '0%, 100%': { transform: 'scaleY(0.4)' },
          '50%': { transform: 'scaleY(1)' }
        }
      },
      animation: {
        'pulse-ring': 'pulse-ring 1.8s cubic-bezier(0.4,0,0.6,1) infinite',
        'rise-in': 'rise-in 0.5s ease-out both',
        wave: 'wave 1s ease-in-out infinite'
      }
    }
  },
  plugins: []
}
