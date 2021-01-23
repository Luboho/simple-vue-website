const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        '200px': '200px',
        '96': '24rem',
      },
      height: {
        5000: '5000px'
      },
      screens: {
        'xs': '200px'
      },
      colors: {
        green: {
          'menu-green': '#00cc00',
        },
        lime: colors.lime,
        amber: colors.amber
      },
      fontSize: {
        'xs': '.70rem',
       }
    },
  },
  variants: {
    extend: {
      display: ['responsive', 'group-hover', 'group-focus'],
      rotate: ['hover'],
    },
  },
  plugins: [],
}
