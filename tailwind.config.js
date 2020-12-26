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
      screens: {
        'sm' : '250px',
        'md' : '768px',
      },
      colors: {
        green: {
          'menu-green': '#00cc00',
        },
        lime: colors.lime,
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
