import React from 'react'
import styled from 'styled-components'
import {
  ResponsiveRow,
  SectionDark,
  SectionLight,
  Width,
  WrappedContainer,
} from '../components/Layout'

const Body = styled.div`
  padding: 3em 0;
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

const Avatar = styled.img`
  width: 35rem;
  object-fit: cover;
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
    <>
      <SectionLight>
        <Body>
          <WrappedContainer>
            <ResponsiveRow justifyContent="space-between">
              <Width width="50%">
                <Heading>Hello</Heading>
                <SubPara>
                  What's up! Toggle the switch above to change the theme
                </SubPara>
              </Width>
              <Width width="50%">
                <Avatar src="./img/Avatar.png" alt="Avatar" />
              </Width>
            </ResponsiveRow>
          </WrappedContainer>
        </Body>
      </SectionLight>
      <SectionDark>YOOOOO</SectionDark>
    </>
  )
}

export default Home
