module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'dark-teal':'#0E1E25',
        'light-gray':'#FAFAFA',
        'light-orange':'#FDEBC8',
        'dark-orange':'#9C4221'
      }
    },
  },
  variants: {
    extend: {},
    variants: {
      display: ['responsive', 'group-hover', 'group-focus'],
     },
  },
  plugins: [],
}
