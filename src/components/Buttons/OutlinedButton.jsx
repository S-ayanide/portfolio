import React from 'react'
import styled from 'styled-components'

const Button = styled.div`
  border-radius: 0.3rem;
  border: 1px solid #ccc;
  height: 3rem;
  width: ${props => props.width ?? '100%'};
  display: table;
  cursor: pointer;
`

const Content = styled.div`
  display: table-cell;
  text-align: center;
  vertical-align: middle;
  color: ${props => props.theme.textPrimary};
`

const OutlinedButton = ({ action, children, width }) => (
  <Button width={width} onClick={action}>
    <Content>{children}</Content>
  </Button>
)

export { OutlinedButton }
