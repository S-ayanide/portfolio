import React, { useContext } from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { normalize } from 'styled-normalize'
import { GlobalContext } from '../../context/globalContext'
import { darkTheme, lightTheme } from '../../theme'

// 1.
const GlobalStyle = createGlobalStyle`
  ${normalize}

  * {
    text-decoration: none;
  }

  html {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    font-size: 16px;
  }

  body {
    font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;;
    background: ${props => props.theme.background};
  }
`

// 2.
const Layout = ({ children }) => {
  const currentTheme = useContext(GlobalContext)

  let theme
  switch (currentTheme.theme) {
    case 'dark':
      theme = darkTheme
      break
    case 'light':
      theme = lightTheme
      break
    default:
      theme = lightTheme
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <main>{children}</main>
    </ThemeProvider>
  )
}

export default Layout
