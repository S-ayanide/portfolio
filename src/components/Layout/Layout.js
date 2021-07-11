import React, { useContext } from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { normalize } from 'styled-normalize'
import { Nav } from '../../components/Nav'
import { GlobalContext } from '../../context/globalContext'
import { darkTheme, lightTheme } from '../../theme'

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
    background: ${props => props.theme.backgroundLight};
  }
`

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
      <Nav />
      <main>{children}</main>
    </ThemeProvider>
  )
}

export { Layout }
