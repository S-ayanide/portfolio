import styled, { css } from 'styled-components'

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
