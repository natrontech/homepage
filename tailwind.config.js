const { url } = require('inspector')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Gilroy-Regular', ...defaultTheme.fontFamily.sans],
        GilroyRegular: ['Gilroy-Regular'],
        GilroyMedium: ['Gilroy-Medium'],
        GilroyLight: ['Gilroy-Light'],
        GilroyHeavy: ['Gilroy-Heavy'],
        GilroyBold: ['Gilroy-Bold'],
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-1deg)' },
          '50%': { transform: 'rotate(1deg)' },
        }
      },
      colors: {
        transparent: "transparent",
        'black': '#1A1A1A',
        'white': '#FFFFFF',
        'primary': '#193BF5'
      },
      fontSize: {
        'xxl': ['12rem', '1']
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
  corePlugins: {
    fontFamily: true,
  },
}