import React from 'react'
import styled from 'styled-components'
import RectangleCard from '../components/Cards/RectangleCard'
import CurrentlyReading from '../components/CurrentlyReading'
import ResponsiveRow from '../components/Layout/ResponsiveRow'
import { SectionDark } from '../components/Layout/Sections'
import Heading from '../components/Text/Heading'
import Subtitle from '../components/Text/Subtitle'
import Layout from '../containers/layout'
import { companies } from '../data/data'


const HeaderWrapper = styled.div`  
  flex-direction: column;
  justify-content: center;
  width: ${props => props.theme.screens.sm ? '90%' : '45%'};
`

const H1 = styled.h1`
  margin-top: ${props => (props.theme.screens.sm ? '0' : '1.5rem')};
  text-align: center;
  font-size: ${props => props.theme.screens.sm ? '2rem' : '3rem'};
`

const H2 = styled.h2`
  text-align: center;
  font-size: ${props => props.theme.screens.sm ? '2rem' : '2.5rem'};
`

const Image = styled.img`
  height: 4rem;
  line-height: 3rem;
`;

const Grid = styled.div`
  width: 60%;
  display: grid;  
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  grid-gap: 2rem;
  row-gap: 2rem;
`

const Home = () => {  
  return (
    <Layout header={'Home'}>
      <br />
      
      {/* Header */}
      <ResponsiveRow breakpoint="sm" justifyContent="space-around">          
        <HeaderWrapper>          
          <H1>Who is Sayan?</H1>
          <br />
          <Subtitle align="center">Sayan currently works at ChaosNative as a Chaos Engineer and contributor to Litmus. He helps design, architect, and execute Litmus Web with precision. He is not only passionate about development but also curious about breaking stuff with the practice of Chaos Engineering</Subtitle>
        </HeaderWrapper>
        <img style={{ width: '20rem' }} src="./desk2.gif" alt="Desk" />
      </ResponsiveRow>
      
      <br />

      {/* Experience */}
      <SectionDark>
        <H2>Companies/Communities I've worked with</H2>
        <br />
        <Grid>
          {companies.links.map((link) => (
            <Image
              key={link.name}
              src={link.image}
              alt={`${link.name} logo`}
            />
          ))}
        </Grid>
      </SectionDark>

      {/* Projects */}
      <Heading>Projects</Heading>
      <RectangleCard
        image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fg.foolcdn.com%2Feditorial%2Fimages%2F478100%2Fscared-man-looking-at-tablet-pc.jpg&f=1&nofb=1"
        title="Test"
        description="Test Description asdas dashdgg ggggggggg gggggg gggggggg gggggggggggggg gggggggggg ggggggg ggggg gggg gggggggggggggggggggg"
        button="Read Me"
      />
      <RectangleCard
        image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fg.foolcdn.com%2Feditorial%2Fimages%2F478100%2Fscared-man-looking-at-tablet-pc.jpg&f=1&nofb=1"
        title="Test"
        description="Test Description asdas dashdgg ggggggggg gggggg gggggggg gggggggggggggg gggggggggg ggggggg ggggg gggg gggggggggggggggggggg"
        button="Read Me"
      />
      <br />
      <Heading>Books</Heading>
      <CurrentlyReading />
    </Layout>
  )
}

export default Home
