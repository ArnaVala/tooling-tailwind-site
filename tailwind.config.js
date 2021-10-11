module.exports = {
  purge: {
    enabled: true,
    content: ["*.html"],
  },
  darkMode: false,
  // here you can add your own fonts, colors etc.
  theme: {
    // set screen sizes
    screens: {
      sm: '480px',
      md: '768px',
      lg: '960px',
      xl: '1280px',
      xxl: '1440px',
    },
    // color theme palette
    colors: {
      dark: '#1e2b2e',
      green: '#3D5C52',
      light: '#C2D6D0',
      gray: '#F5F5F3',
      white: '#FFFFFF',
    },
    // fontfamily
    fontFamily: {
      headings: ['heimat-display-20', 'sans-serif'],
      body: ['heimat-sans', 'sans-serif'],
     
    },
    // font-weights
    fontWeight: {
      light: 300,
      regular: 400,
      DEFAULT: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      'extra-bold': 800,
    },
    fontSize: {
      sm: ['14px', '20px'], // small labels
      text: ['16px', '24px'],
      h1: ['80px', '88px'],
      h2: ['56px', '64px'],
      h3: ['40px', '48px'],
      h4: ['24px', '32px'],
      h5: ['16px', '24px'],
      h6: ['24px', '32px'],
      body: ['16px', '24px'],
      bodyBig: ['20px', '32px'],
      base: ['16px', '24px'],
      sm: ['14px', '20px'],
      s: ['24px', '32px'],
      m: ['32px', '40px'],
      lg: ['40px', '48px'],
      xl: ['56px', '64px'],
      xxl: ['64px', '72px'],
      xxxl: ['80px', '88px'],
      huge: ['96px', '104px']
    },
    // padding, margin, width, height, maxHeight, gap, inset, space, translate
    spacing: {
      'auto': 'auto',
      '0': '0rem',
      '2': '0.125rem',
      '4': '0.25rem',
      '8': '0.5rem',
      '16': '1rem',
      '24': '1.5rem',
      '32': '2rem',
      '40': '2.5rem',
      '48': '3rem',
      '64': '4rem',
      '80': '5rem',
      '96': '6rem',
      '112': '7rem',
      '128': '8rem',
      '160': '10rem',
      '192': '12rem',
      '224': '14rem',
      '240': '15rem',
      '256': '16rem',
      '272': '17rem',
      '288': '18rem',
      '320': '20rem',
      '352': '22rem',
      '384': '24rem',
      '416': '26rem',
      '448': '28rem',
      '480': '30rem',
      'screen-60': '60vw',
      'screen-75': '75vw',
      'screen-80': '80vw'
    },
    maxWidth: {
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%',
      '320': '20rem',
      '480': '30rem',
      '560': '35rem',
      '640': '40rem',
      '720': '45rem',
      '960': '60rem',
      '1120': '70rem',
      '1280': '80rem',
      '1440': '90rem',
      '1920': '120rem'
    },
    extend: {
      screens: {
        'portrait': { 'raw': '(orientation: portrait)', 'min': '960px'},
      }
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [],
}
