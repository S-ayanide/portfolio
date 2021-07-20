import styled from 'styled-components'

const ResponsiveRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: ${props => props.alignItems ?? 'center'};
  justify-content: ${props => props.justifyContent ?? 'center'};

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export { ResponsiveRow }
