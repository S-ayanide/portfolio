import React from 'react'
import styled from 'styled-components'

const FooterWrapper = styled.div`
  text-align: center;
  background: ${props => props.theme.colors.lightGray};
  font-size: 12px;
  position: absolute;
  bottom: 0;
  left: ${props => props.theme.screens.lg ? '0' : ''};
  padding: 1rem 0;
  width: ${props => props.theme.screens.lg ? '100%' : '75%'};
`

const Footer = () => {
  return <FooterWrapper>{(new Date()).getFullYear()} @ Sayan Mondal</FooterWrapper>
}

export default Footer
