import React, { useContext, useEffect } from 'react'
import styled, { css } from 'styled-components'
import Layout from '../components/Layout'
import { GlobalContext } from '../context/globalContext'

const Container = styled.div`
  margin: 0 auto;
  padding: 0 32px;
  width: auto;
  height: 100%;

  ${props =>
    props.fluid &&
    css`
      padding: 0;
      margin: 0;
      max-width: 100%;
    `}
`

const Flex = styled.div`
  display: flex;
  align-items: center;
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

const NavBar = styled.div`
  background-color: ${props => props.theme.secondaryBackground};
  padding: 20px 0;
`

const SwitchButton = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${props => props.theme.button};
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 34px;
  }

  span:before {
    position: absolute;
    content: '';
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: ${props => props.theme.secondaryBackground};
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
  }

  input:checked + span {
    background-color: ${props => props.theme.button};
  }

  input:focus + span {
    box-shadow: 0 0 1px #2196f3;
  }

  input:checked + span:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
`

const Body = styled.div`
  padding: 3em 5em;
`

const Heading = styled.div`
  font-size: 5em;
  font-weight: 800;
  color: ${props => props.theme.text};
`

const SubPara = styled.p`
  font-size: 1.5em;
  color: ${props => props.theme.text};
`

const Para = styled.p`
  font-size: 1.2em;
  line-height: 1.5;
  color: ${props => props.theme.text};
  width: 80%;
`

const Content = styled.div`
  padding: 10em 0;
`

const Home = () => {
  const { theme, themeSwitchHandler } = useContext(GlobalContext)

  useEffect(() => {
    window.localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <Layout>
      <NavBar>
        <Flex center>
          {/* 2. */}
          <SwitchButton>
            <input
              type="checkbox"
              onChange={() =>
                themeSwitchHandler(theme === 'dark' ? 'light' : 'dark')
              }
            />
            <span></span>
          </SwitchButton>
        </Flex>
      </NavBar>
      <Body>
        <Container>
          <Heading>Hello</Heading>
          <SubPara>
            What's up! Toggle the switch above to change the theme
          </SubPara>
          <Content>
            <Container>
              <Flex center column>
                <Heading>Article</Heading>
                <Para>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Reprehenderit quis ipsa, sunt, consectetur voluptate dolores
                  pariatur nisi distinctio iusto vero iure officia. Vero sunt,
                  ducimus sit eveniet dolor impedit itaque voluptate ipsam!
                  Omnis totam, beatae dicta fugit praesentium fugiat dolores
                  laborum, officiis, labore aperiam tempore! Debitis, provident!
                  Rem, exercitationem enim?
                </Para>
              </Flex>
            </Container>
          </Content>
        </Container>
      </Body>
    </Layout>
  )
}

export default Home
