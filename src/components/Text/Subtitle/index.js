import React from 'react'
import styled from 'styled-components'

const SubtitleWrapper = styled.p`
  font-size: 1rem;
  text-align: ${props => props.align ?? 'left'};
`

const Subtitle = ({ children, align }) => {
  return <SubtitleWrapper align={align}>{children}</SubtitleWrapper>
}

export default Subtitle
