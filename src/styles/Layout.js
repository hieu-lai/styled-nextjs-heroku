import React from 'react'
import {ThemeProvider } from 'styled-components'
import GlobalStyle from './GlobalStyle'
import { lightTheme, darkTheme } from './Themes'

const Layout = ({ children }) => (
  <ThemeProvider theme={lightTheme}>
    <>
      <GlobalStyle />
      {children}
    </>
  </ThemeProvider>
)

export default Layout