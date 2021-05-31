import React from 'react'
import styled from 'styled-components'
import Heading from '../components/Text/Heading'
import Subtitle from '../components/Text/Subtitle'
import Layout from '../containers/layout'
import { experience, volunteering } from '../data/data'

const Wrapper = styled.div`
  margin: 0 2rem;
`

const FlexAddon = styled.div`
  display: flex;
  margin: 2rem 2rem;
`

const Flex = styled.div`
  display: flex;  
`

const Logo = styled.img`
  width: 4rem;
  height: 4rem;
  margin-right: 1rem;
`

const Content = styled.div`
  width: 80%;
`

const Date = styled.div`
  width: 10%;
  margin-top: 0.5rem;
`

const Title = styled.h1`
  font-weight: bold;
  font-size: 1.6rem;
`

const Paragraph = styled.p`
  font-size: ${props => (props.theme.screens.sm ? '0.8rem' : '1rem')};
  width: 100%;
`

const Experience = () => {
  return (
    <Layout>
      <Wrapper>
        <Heading>Experience</Heading>
        {experience.map(individualExperience => (
          <FlexAddon>
            <Date>
              <Subtitle>{individualExperience.date}</Subtitle>
            </Date>
            <Content>
              <Flex>
                <Logo src={individualExperience.logo} alt="Logo"/>
                <div>
                  <Title>{individualExperience.company}</Title>
                  <Subtitle>{individualExperience.role}</Subtitle>
                </div>
              </Flex>              
              <hr />
              {individualExperience.details.map(bullet => (
                <ul>
                  <Paragraph>
                    <li>{bullet}</li>
                  </Paragraph>
                </ul>
              ))}
            </Content>
          </FlexAddon>
        ))}
        <br />
        <Heading>Volunteering Experience</Heading>
        {volunteering.map(volunteer => (
          <FlexAddon>
            <Content>
              <Flex>
                <Logo src={volunteer.logo} alt="Logo" />
                <div>
                  <Title>{volunteer.company}</Title>
                  <Subtitle>{volunteer.role}</Subtitle>
                </div>
              </Flex>
              <hr />
              {volunteer.details.map(bullet => (
                <ul>
                  <Paragraph>
                    <li>{bullet}</li>
                  </Paragraph>
                </ul>
              ))}
            </Content>
          </FlexAddon>
        ))}
      </Wrapper>
    </Layout>
  )
}

export default Experience
