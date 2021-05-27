import { Link as GatsbyLink } from 'gatsby'
import localforage from 'localforage'
import React from 'react'
import styled from 'styled-components'
import Layout from '../containers/layout'
import { talks } from '../data/data'

const Wrapper = styled.div`
  padding: ${props => props.theme.screens.sm ? '0 1rem' : '0 2rem'};
`

const Video = styled.div`
  margin: ${props => (props.theme.screens.sm ? '3.5rem auto' : '0 auto')};
  padding: ${props => (props.theme.screens.sm ? '0.5rem 0' : '2rem 0')};
  background: #333652;
  border-radius: 0.5rem;
`

const Title = styled.h1`
  font-weight: bold;
  font-size: 1.6rem;
  margin-top: 2rem;
`

const Date = styled.h3`
  font-size: 0.9rem;
  color: grey;
`

const Paragraph = styled.p`
  font-size: ${props => props.theme.screens.sm ? "0.8rem" : "1rem"};
  margin: ${props => props.theme.screens.sm ? "0" : "1rem 0"};
  width: ${props => props.theme.screens.sm ? "90%" : props.theme.screens.xl ? "50%" : "65%"};
`

const Name = styled.p`
  font-size: ${props => props.theme.screens.sm ? "0.9rem" : "1rem"};
  margin: ${props => props.theme.screens.sm ? "0 1rem" : "1rem 0"};
  width: ${props => props.theme.screens.sm ? "100%" : "65%"};
  line-height: ${props => props.theme.screens.sm ? "3rem" : '0'};
`

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: ${props => props.theme.screens.sm ? 'column' : 'row'};
  margin: 1rem 0;
`

const SpeakerFlex = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;
`

const Speakers = styled.div`
  width: ${props => props.theme.screens.sm ? "100%" : "20rem"};
`

const Line = styled.hr`
  display: ${props => props.theme.screens.sm ? "none" : "block"};
  transform: rotate(90deg);
  width: 10rem;
  margin-left: -8rem;
  margin-top: 5rem;
`

const Section = styled.div`
  margin-top: ${props => props.theme.screens.sm ? "0" : "-7rem"};
`

const Avatar = styled.img`
  border-radius: 50%;
  width: ${props => props.theme.screens.sm ? "3rem" : "4rem"};
  object-fit: contain;
`

const Anchor = styled(GatsbyLink)`
  text-decoration: none;
  color: black;
`

const Details = () => {
  const [index, setIndex] = React.useState(0)
  console.log(window.innerWidth);
  
  React.useEffect(() => {
    localforage.getItem('talk').then(value => setIndex(value))    
  })

  return (
    <Layout>
      <Wrapper>
        <Video>
          {window.innerWidth > 640 ? 
            <iframe
            width="95%"
            height="500"
            style={{ display: 'block', margin: '0 auto' }}
            src={talks[index].url}
            title={talks[index].title}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          : 
          <iframe
            width="95%"
            height="200"
            style={{ display: 'block', margin: '0 auto' }}
            src={talks[index].url}
            title={talks[index].title}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          }
          
        </Video>
        <Title>{talks[index].title}</Title>
        <Date>{talks[index].date}</Date>
        <br />
        <Flex>
          <Paragraph>{talks[index].description}</Paragraph>
          <Speakers>
            <Line />
            <Section>
              <Title>Speakers</Title>
              {talks[index].speakers.map(speaker => (
                <Anchor to={speaker.link}>
                  <SpeakerFlex>
                    <Avatar src={speaker.image} alt="Speaker Image" />
                    <Name>{speaker.name}</Name>
                  </SpeakerFlex>
                </Anchor>
              ))}
            </Section>
          </Speakers>
        </Flex>
      </Wrapper>
    </Layout>
  )
}

export default Details
