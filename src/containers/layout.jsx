import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Menu from '../menu/menu'
import { theme } from '../styles'
import Footer from './footer'
import Header from './header'

const Main = styled.div`
  margin-top: ${props => props.theme.screens.md ? '10%' : props.theme.screens.lg ? '30%' : ''};
  margin-left: ${props => props.theme.screens.lg ? '0' : '25%'}; /* Same as the width of the sidenav */
  font-size: 28px; /* Increased text to enable scrolling */
  padding: 0;
`

const Layout = ({ children, header }) => {
  return (
    <ThemeProvider theme={theme()}>
      <Menu />
      <Main>
        <Header>{header}</Header>
        {children}
        <Footer />
      </Main>
    </ThemeProvider>
  )
}

export default Layout
