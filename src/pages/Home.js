import React from 'react'
import styled from 'styled-components'
import { OutlinedButton } from '../components/Buttons'
import {
  Flex,
  ResponsiveRow,
  Width,
  WrappedContainer,
} from '../components/Layout'
import { SocialMedia } from '../components/SocialMedia'

const Heading = styled.div`
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 1.5;
  color: ${props => props.theme.textPrimary};

  @media (max-width: 768px) {
    font-size: 1rem;
    font-weight: 400;
  }
`

const Avatar = styled.img`
  width: 40rem;
  object-fit: cover;
  margin-left: -45%;

  @media (max-width: 768px) {
    margin-left: 0;
    margin: 1rem 0;
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
  }
`

const Home = () => {
  return (
    <>
      <WrappedContainer>
        <ResponsiveRow justifyContent="space-between">
          <Width width="50%">
            <Avatar src="./img/Avatar.png" alt="Avatar" />
          </Width>
          <Width width="50%">
            <Flex column>
              <Heading>
                Hello, I'm Sayan Mondal, Seasoned Software Engineer and
                Technical Evangelist experienced in creating and executing
                software solutions to enhance business productivity.
              </Heading>
              <br />
              <br />
              <OutlinedButton width={'13rem'}>Download Resume</OutlinedButton>
              <br />
              <SocialMedia width={'13rem'} />
            </Flex>
          </Width>
        </ResponsiveRow>
      </WrappedContainer>
    </>
  )
}

export default Home
