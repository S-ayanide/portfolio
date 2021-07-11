import React from 'react'
import styled from 'styled-components'
import { Flex } from '../components/Layout'

const Body = styled.div`
  padding: 3em 5em;
`

const Heading = styled.div`
  font-size: 5em;
  font-weight: 800;
  color: ${props => props.theme.textPrimary};
`

const SubPara = styled.p`
  font-size: 1.5em;
  color: ${props => props.theme.textSecondary};
`

const Para = styled.p`
  font-size: 1.2em;
  line-height: 1.5;
  color: ${props => props.theme.textSecondary};
  width: 80%;
`

const Content = styled.div`
  padding: 10em 0;
`

const Home = () => {
  return (
    <Body>
      <Heading>Hello</Heading>
      <SubPara>What's up! Toggle the switch above to change the theme</SubPara>
      <Content>
        <Flex center column>
          <Heading>Article</Heading>
          <Para>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit quis ipsa, sunt, consectetur voluptate dolores
            pariatur nisi distinctio iusto vero iure officia. Vero sunt, ducimus
            sit eveniet dolor impedit itaque voluptate ipsam! Omnis totam,
            beatae dicta fugit praesentium fugiat dolores laborum, officiis,
            labore aperiam tempore! Debitis, provident! Rem, exercitationem
            enim?
          </Para>
        </Flex>
      </Content>
    </Body>
  )
}

export default Home
