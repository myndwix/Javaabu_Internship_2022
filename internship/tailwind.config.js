module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        '100': '28rem',
        '104': '32rem',
        '106': '36rem',
        '108': '39rem',
        '110': '42rem',
        '114': '44rem',
        '116': '46rem',
        '120': '50rem'
      },

      minWidth: {
        's': '16rem',
      },

      height: {
        'screen-h16': 'calc(100vh + 4rem)',
        '100': '28rem',
        '104': '32rem',
        '106': '36rem',
        '108': '39rem'
      },

      margin: {
        '84': '22rem'
      },

      backgroundImage:{
        'macbook': "url('../icons/macbook.svg')"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
