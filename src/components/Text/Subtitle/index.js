import React from 'react'
import styled from 'styled-components'

const SubtitleWrapper = styled.p`
  font-size: ${props => props.theme.screens.md ? '0.8rem' : '1rem'};
  text-align: ${props => props.align ?? 'left'};
`

const Subtitle = ({ children, align }) => {
  return <SubtitleWrapper align={align}>{children}</SubtitleWrapper>
}

export default Subtitle
