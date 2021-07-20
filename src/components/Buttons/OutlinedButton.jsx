import React from 'react'
import styled from 'styled-components'

const Button = styled.div`
  border-radius: 0.3rem;
  border: 1px solid #ccc;
  height: 3rem;
  width: ${props => props.width ?? '100%'};
  display: table;
  cursor: pointer;
  position: relative;

  .animation {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.ripple};
    top: 0;
    transform: scale(0);
    opacity: 0.5;
    border-radius: 0.3rem;
  }

  :hover > .animation {
    animation: ripple 3s;
  }

  @keyframes ripple {
    0% {
      transform: scaleX(0);
    }
    20% {
      transform: scaleX(1);
      opacity: 0.3;
    }
    100% {
      transform: scaleX(1);
      opacity: 0;
    }
  }
`

const Content = styled.div`
  display: table-cell;
  text-align: center;
  vertical-align: middle;
  color: ${props => props.theme.textPrimary};
`

const OutlinedButton = ({ action, children, width }) => (
  <Button width={width} onClick={action}>
    <div className="animation"></div>
    <Content>{children}</Content>
  </Button>
)

export { OutlinedButton }
