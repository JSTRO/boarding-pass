module.exports = {
  content: [ './**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        primary: '#4169e1',
      },
      scale: {
        '200': '2',
        '250': '2.5',
        '275': '2.75',
      },
      maxWidth: {
       '1/4': '25%',
       '1/2': '50%',
       '3/4': '75%',
      },
      minWidth: {
        '3/4': '75%',
      }
    },
  },
  plugins: [],
}
