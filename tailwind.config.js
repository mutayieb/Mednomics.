export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: '#0D7377', dark: '#095456', light: '#4FACA8' },
        secondary: { DEFAULT: '#FF6B6B', light: '#FF7A99' },
        success: { DEFAULT: '#06D6A0', dark: '#05B386' },
        accent: { DEFAULT: '#FFD93D', dark: '#E6C234' },
        danger: { DEFAULT: '#EF233C', dark: '#DC2626' },
        background: '#0A1628',
        'light-bg': '#F8FAFC',
        'light-card': '#FFFFFF'
      },
      fontFamily: {
        heading: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace']
      },
      animation: {
        blob: 'blob 8s infinite',
        heartbeat: 'heartbeat 1.5s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite'
      },
      keyframes: {
        blob: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' }
        },
        heartbeat: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        }
      }
    }
  },
  plugins: []
}
