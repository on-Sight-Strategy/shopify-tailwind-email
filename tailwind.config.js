module.exports = {
  theme: {
    fontFamily: {
      sans: ['Courier New', 'sans-serif'],
    },
    extend: {
      colors: {
        // Global colors
        transparent: 'transparent',
        current: 'currentColor',
        black: '#000000',
        white: '#ffffff',
        day: '#F9F8F2',

        // Brand colors
        // ...
      },
    },
  },
  corePlugins: {
    textOpacity: false,
    backgroundOpacity: false,
    borderOpacity: false,
  }
}