module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'dark-teal':'#0E1E25',
        'light-gray':'#FAFAFA',
        'light-orange':'#FDEBC8',
        'dark-orange':'#9C4221',
        'primary-orange':'#F08A5D'
      },
      transitionProperty: {
        'height': 'height'
      }
    },
  },
  variants: {
    extend: {},
    variants: {
      display: ['responsive', 'group-hover', 'group-focus'],
     },
  },
  plugins: [
    // Other plugins
    require('tailwindcss-animatecss')({
          classes: ['animate__animated', 'animate__fadeIn', 'animate__bounceIn', 'animate__lightSpeedOut'],
          settings: {
            animatedSpeed: 1000,
            heartBeatSpeed: 1000,
            hingeSpeed: 2000,
            bounceInSpeed: 750,
            bounceOutSpeed: 750,
            animationDelaySpeed: 1000
          },
          variants: ['responsive', 'hover', 'reduced-motion'],
        }),
  ]
}
