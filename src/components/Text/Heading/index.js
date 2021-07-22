import React from 'react'
import styled from 'styled-components'

const HeadingWrapper = styled.div`
  padding: 0.5rem 2rem;
  color: ${props => props.theme.textPrimary};
`

const Heading = ({ children }) => {
  return (
    <HeadingWrapper>
      <h2 style={{ fontWeight: 'bold', fontFamily: 'Press Start 2P' }}>
        {children}
      </h2>
    </HeadingWrapper>
  )
}

export default Heading
