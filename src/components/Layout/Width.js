import styled from 'styled-components'

const Width = styled.div`
  width: ${props => props.width ?? '100%'};
  margin: ${props => props.margin ?? '0 auto'};

  @media (max-width: 768px) {
    width: 90%;
  }
`

const WrappedContainer = ({ children }) => <Width width="70%">{children}</Width>

export { Width, WrappedContainer }
