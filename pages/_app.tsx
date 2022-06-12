import React from 'react'

import { ThemeProvider } from 'theme-ui'

import theme from '../lib/theme'

const App = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <Component {...pageProps} />
  </ThemeProvider>
)

export default App
