import { Theme, ThemeUIStyleObject } from 'theme-ui'

const heading = {
  color: 'text',
  fontFamily: 'heading',
  lineHeight: 'heading',
  fontWeight: 'heading',
}

const buttonStyle: ThemeUIStyleObject = {
  fontFamily: 'sansSerif',
  textTransform: 'lowercase',
  backgroundColor: 'transparent',
  color: 'primary',
  border: '1px solid #33b3c3',
  transition: 'all .2s ease-in-out',
  ':hover': {
    color: 'white',
    backgroundColor: '#33b3c3',
  },
  cursor: 'pointer',
}

const theme: Theme = {
  breakpoints: ['30rem', '48rem', '56rem', '64rem'],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body: '"EB Garamond", system-ui, -apple-system, BlinkMacSystemFont, serif',
    heading: 'inherit',
    monospace: '"Xanh Mono", monospace',
    sansSerif: '"Montserrat", sans-serif',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#33b3c3',
    secondary: '#30c',
    muted: '#f6f6f6',
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
    },
    h1: {
      ...heading,
      fontSize: 5,
    },
    h2: {
      ...heading,
      fontSize: 4,
    },
    h3: {
      ...heading,
      fontSize: 3,
    },
    h4: {
      ...heading,
      fontSize: 2,
    },
    h5: {
      ...heading,
      fontSize: 1,
    },
    h6: {
      ...heading,
      fontSize: 0,
    },
    p: {
      color: 'text',
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
    },
    a: {
      color: 'primary',
    },
    pre: {
      fontFamily: 'monospace',
      overflowX: 'auto',
      code: {
        color: 'inherit',
      },
    },
    code: {
      fontFamily: 'monospace',
      fontSize: 'inherit',
    },
    table: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0,
    },
    th: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    td: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    img: {
      maxWidth: '100%',
    },
    hr: {
      backgroundColor: 'primary',
    },
  },
  text: {
    sectionTitle: {
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'center',
      fontSize: ['4rem', '8rem'],
      fontFamily: 'Bebas Neue',
      lineHeight: 1,
    },
    bookTitle: {
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'center',
      fontSize: ['2rem', '3rem', '3rem', '3rem', '4rem'],
      fontFamily: 'Bebas Neue',
      lineHeight: 1,
    },
    sectionSubtitle: {
      textTransform: 'lowercase',
      fontSize: '1.25rem',
      fontFamily: 'sansSerif',
    },
    poemTitle: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
    },
    poemAuthor: {
      fontSize: '1.25rem',
      fontStyle: 'italic',
      marginBottom: '1rem',
    },
  },
  links: {
    navigation: {
      textDecoration: 'none',
      color: 'black',
      fontFamily: 'sansSerif',
      display: 'flex',
      alignItems: 'center',
      gap: '.5rem',
      marginBottom: '1.5rem',
      ':hover': {
        textDecoration: 'underline',
      },
    },
    button: {
      ...buttonStyle,
      height: 42,
      paddingX: '1rem',
      paddingY: '.5rem',
      borderRadius: '.25rem',
      textDecoration: 'none',
      textAlign: 'center',
      textTransform: 'uppercase',
      whiteSpace: 'nowrap',
    },
    photo: {
      ':hover': {
        opacity: 0.75,
      },
    },
  },
  grids: {
    section: {
      flexDirection: ['column', 'column', 'column', 'row'],
      alignItems: 'center',
      gridTemplateColumns: ['1fr', '1fr', '1fr', '1fr 1fr'],
      gridTemplateRows: [
        'min-content 1fr',
        'min-content 1fr',
        'min-content 1fr',
        '1fr',
      ],
      gap: [0, 0, 0, '1rem'],
      padding: '2rem',
    },
    bookSection: {
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: [0, 0, 0, '1rem'],
      gridTemplateRows: [
        'min-content min-content',
        'min-content min-content',
        'min-content min-content',
        '3fr 2fr',
      ],
    },
  },
}

export default theme
