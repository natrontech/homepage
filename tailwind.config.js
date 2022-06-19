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
          '0%, 100%': { transform: 'rotate(-5deg)' },
          '50%': { transform: 'rotate(5deg)' },
        }
      },
      colors: {
        transparent: "transparent",
        'stroke': '#001858',
        'paragraph': '#172c66',
        'button-text': '#001858',
        'main': '#f3d2c1',
        'highlight': '#fef6e4',
        'highlight-dark': '#F5EDDC',
        'secondary': '#8bd3dd',
        'tertiary': '#f582ae',
        'tertiary-dark': '#D16F94',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
  corePlugins: {
    fontFamily: true,
  },
}