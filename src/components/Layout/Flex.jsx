import styled, { css } from 'styled-components'

const Flex = styled.div`
  display: flex;
  justify-content: ${props => props.justifyContent ?? 'space-between'};
  ${props =>
    props.center &&
    css`
      justify-content: center;
    `};
  ${props =>
    props.column &&
    css`
      flex-direction: column;
    `}
`

export { Flex }
