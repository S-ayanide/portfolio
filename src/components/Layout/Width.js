import styled from 'styled-components'

const Width = styled.div`
  width: ${props => props.width ?? '100%'};
  margin: 0 auto;
`

const WrappedContainer = ({ children }) => <Width width="70%">{children}</Width>

export { Width, WrappedContainer }
