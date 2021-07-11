import React from 'react'
import styled from 'styled-components'
import { Flex, Width } from '../Layout'
import Burger from './Burger'

const NavBar = styled.div`
  background-color: ${props => props.theme.backgroundDark};
  padding: 5px 0;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
`

const Nav = () => {
  return (
    <NavBar>
      <Width width="80%">
        <Flex>
          <p>Sayan Mondal</p>
          <Burger />
        </Flex>
      </Width>
    </NavBar>
  )
}

export { Nav }
