/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'main-bg': '#0a0511',
        'main': '#f8f8f2',
        'accent': {
          DEFAULT: 'rgb(214 143 159)',
          light: 'rgb(253 200 235)',
          dark: 'rgb(177 111 127)',
          5: 'rgb(214 143 159 / 0.05)',
          10: 'rgb(214 143 159 / 0.1)',
          20: 'rgb(214 143 159 / 0.2)',
          30: 'rgb(214 143 159 / 0.3)',
          40: 'rgb(214 143 159 / 0.4)',
          60: 'rgb(214 143 159 / 0.6)',
          80: 'rgb(214 143 159 / 0.8)',
          90: 'rgb(214 143 159 / 0.9)'
        },
        'semi-transparent': 'rgba(22, 13, 37, 0.87)',
        'link': 'rgb(253 200 235)',
        'grid': 'rgba(214, 143, 159, 0.03)'
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'scanline': 'scanline 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgb(214 143 159 / 0.3), 0 0 10px rgb(214 143 159 / 0.2)' },
          '100%': { boxShadow: '0 0 10px rgb(214 143 159 / 0.4), 0 0 20px rgb(214 143 159 / 0.3)' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        }
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(var(--grid) 1px, transparent 1px), linear-gradient(90deg, var(--grid) 1px, transparent 1px)',
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#f8f8f2',
            a: {
              color: 'rgb(214 143 159)',
              '&:hover': {
                color: 'rgb(253 200 235)'
              }
            },
            blockquote: {
              borderLeftColor: 'rgb(214 143 159)',
              color: '#f8f8f2'
            },
            'code::before': {
              content: '""'
            },
            'code::after': {
              content: '""'
            }
          }
        }
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
};