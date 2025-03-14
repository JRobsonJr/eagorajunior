import { Theme, ThemeUIStyleObject } from 'theme-ui'

const heading = {
  color: 'text',
  fontFamily: 'heading',
  lineHeight: 'heading',
  fontWeight: 'heading',
}

const buttonStyle: ThemeUIStyleObject = {
  textTransform: 'lowercase',
  backgroundColor: 'transparent',
  color: 'primary',
  border: '2px solid',
  borderColor: 'primary',
  transition: 'all .2s ease-in-out',
  ':hover': {
    color: 'white',
    backgroundColor: 'primary',
  },
  cursor: 'pointer',
}

const theme: Theme = {
  breakpoints: ['30rem', '48rem', '56rem', '64rem', '90rem'],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body: 'Gothic A1, sans-serif',
    heading: 'inherit',
    monospace: '"Xanh Mono", monospace',
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
    primary: '#de6e86',
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
      textAlign: 'start',
      fontSize: '2.5rem',
      fontFamily: 'Inter',
      lineHeight: 1,
      fontWeight: '900',
      color: 'primary',
      textTransform: 'lowercase',
    },
    headline: {
      fontSize: ['1.5rem', '1.5rem', '1.75rem', '1.75rem', '1.7rem', '2rem'],
    },
    bookTitle: {
      fontSize: ['1.5rem', '1.5rem', '1.5rem', '1.75rem', '1.75rem', '2rem'],
      color: 'white',
      fontFamily: 'Inter',
      lineHeight: 1,
      fontWeight: '900',
    },
    sectionSubtitle: {
      fontSize: ['1rem','1.25rem'],
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
      fontWeight: '600',
      height: 42,
      paddingX: '1rem',
      paddingY: '.5rem',
      borderRadius: '.25rem',
      textDecoration: 'none',
      textAlign: 'center',
      textTransform: 'lowercase',
      whiteSpace: 'nowrap',
    },
    'button--selected': {
      ...buttonStyle,
      fontWeight: '600',
      height: 42,
      paddingX: '1rem',
      paddingY: '.5rem',
      borderRadius: '.25rem',
      textDecoration: 'none',
      textAlign: 'center',
      textTransform: 'lowercase',
      whiteSpace: 'nowrap',
      
      color: 'white',
      borderColor: 'white',
    },
    photo: {
      ':hover': {
        opacity: 0.75,
      },
    },
  },
  grids: {
    section: {
      scrollMarginTop: '96px',
      flexDirection: ['column', 'column', 'column', 'row'],
      alignItems: 'flex-end',
      gridTemplateColumns: ['1fr', '1fr', '1fr', '1fr 1fr'],
      gap: ['1.5rem', '2rem'],
      paddingX: ['2rem', '2rem', '2rem', '4rem', '8rem'],
      paddingY: ['2rem', '2rem', '2rem', '4rem'],
    },
    fullWidthSection: {
      scrollMarginTop: '96px',
      alignItems: 'center',
      paddingX: ['2rem', '2rem', '2rem', '4rem', '8rem'],
      paddingY: ['2rem', '2rem', '2rem', '4rem'],
      width: '100%',
    },
  },
}

export default theme
