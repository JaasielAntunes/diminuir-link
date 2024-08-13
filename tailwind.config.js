import animate from 'tailwindcss-animate'

/** @type {import('tailwindcss').Config} */
export const darkMode = ['class']
export const content = [
  './pages/**/*.{ts,tsx,vue}',
  './components/**/*.{ts,tsx,vue}',
  './app/**/*.{ts,tsx,vue}',
  './src/**/*.{ts,tsx,vue}'
]
export const prefix = ''
export const theme = {
  container: {
    center: true,
    padding: '2rem',
    theme: {
      screens: {
        sm: '350px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px'
      }
    }
  },
  extend: {
    colors: {
      primary: '#0a2b41',
      secondary: '#337ab7',
      border_secondary: '#337ab7',
      midnight: '#1C274C',
      blue_dark: '#134b70',
      footer: '#051a28',
      bright: '#EEEEEE',
      low_white: 'rgba(255, 255, 255, 0.7)',
      gray: '#e2e2e2',
      gray_dark: '#777777',
      border_gray: '#CCCCCC',
      darkness: '#555555',
      vector: '#999999',
      header: '#0A2B41',
      border: '#ffffff0d',
      checkbox_color: '#D9D9D9'
    },
    keyframes: {
      'accordion-down': {
        from: { height: 0 },
        to: { height: 'var(--radix-accordion-content-height)' }
      },
      'accordion-up': {
        from: { height: 'var(--radix-accordion-content-height)' },
        to: { height: 0 }
      }
    },
    animation: {
      'accordion-down': 'accordion-down 0.2s ease-out',
      'accordion-up': 'accordion-up 0.2s ease-out'
    }
  }
}
export const plugins = [animate]
