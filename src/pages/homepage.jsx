import React from 'react'
import styled from 'styled-components'
import RectangleCard from '../components/Cards/RectangleCard'
import Center from '../components/Layout/Center'
import ResponsiveRow from '../components/Layout/ResponsiveRow'
import { SectionDark } from '../components/Layout/Sections'
import Subtitle from '../components/Text/Subtitle'
import Layout from '../containers/layout'
import { companies } from '../data/data'

const HeaderWrapper = styled.div`
  flex-direction: column;
  justify-content: center;
  width: ${props => (props.theme.screens.sm ? '90%' : '45%')};
`

const H1 = styled.h1`
  margin-top: ${props => (props.theme.screens.sm ? '0' : '1.5rem')};
  text-align: center;
  font-size: ${props => (props.theme.screens.sm ? '2rem' : '3rem')};
`

const H2 = styled.h2`
  text-align: center;
  font-size: ${props => (props.theme.screens.sm ? '2rem' : '2.5rem')};
`

const Image = styled.img`
  height: ${props => (props.theme.screens.sm ? '3rem' : '4rem')};
  line-height: 3rem;
`

const Grid = styled.div`
  width: ${props => (props.theme.screens.sm ? '90%' : '60%')};
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: ${props => (props.theme.screens.sm ? '1fr 1fr 1fr' : 'repeat(auto-fit, minmax(80px, 1fr))')};
  grid-gap: 2rem;
  row-gap: 2rem;
`

const Home = () => {
  return (
    <Layout>
      <br />

      {/* Header */}
      <ResponsiveRow breakpoint="sm" justifyContent="space-around">
        <HeaderWrapper>
          <H1>Who is Sayan?</H1>
          <br />
          <Subtitle align="center">
            Sayan currently works at ChaosNative as a Chaos Engineer and
            contributor to Litmus. He helps design, architect, and execute
            Litmus Web with precision. He is not only passionate about
            development but also curious about breaking stuff with the practice
            of Chaos Engineering
          </Subtitle>
        </HeaderWrapper>
        <img style={{ width: '20rem' }} src="./desk2.gif" alt="Desk" />
      </ResponsiveRow>

      <br />

      {/* Experience */}
      <SectionDark>
        <H2>Companies & Communities I've worked with</H2>
        <br />
        <Grid>
          {companies.links.map(link => (
            <Image key={link.name} src={link.image} alt={`${link.name} logo`} />
          ))}
        </Grid>
      </SectionDark>

      <br />
      
      {/* Projects */}
      <H2>Projects</H2>
      <br />
      <RectangleCard
        image="https://github.com/S-ayanide/Dooraemi-Version2.0/blob/master/assets/logo/DooraemiLogo.jpg?raw=true"
        title="Dooraemi: The Smart Doorbell"
        description="A smart Doorbell to receive alert and know who is outside, no matter where you are! 😉👌"
        button="Read More"
      />
      <RectangleCard
        image="https://camo.githubusercontent.com/aa7cf90f12c62b33455d0564bb26075495f1c375d0119b941cd90255f763e967/68747470733a2f2f692e6962622e636f2f77437033766a672f636f6c6c696e2e6a7067"
        title="Collin CLI"
        description="An interactive CLI to initialize boilerplate project template and also push it over to github to get users started directly with the project and not waste any time."
        button="Read More"
      />
      <RectangleCard
        image="https://avatars.githubusercontent.com/in/73114?s=120&u=9c47ce76f850a77b3f32853df4d634f19ad368ba&v=4"
        title="CodeSniffy"
        description="Sniffy is wise and caring dog to ease your tasks by sniff the size of PRs, he'll let you know automatically as well as attach any labels depending on area the PR is submitted."
        button="Read More"
      />
      <RectangleCard
        image="https://marcomjobs.netlify.app/static/media/marcomjobs_logo.3f17ee2e.png"
        title="Marcom Jobs"
        description="Marcomjobs is a job seekers platform assisting Vietnamese and Indian people to look for jobs as well as Job-related activities like Career Tips, Job Reviews, Educational Communities, etc"
        button="Read More"
      />
      <Center><p style={{color: '#873260', marginTop: '0.8rem', fontSize: '1rem'}}>View More</p></Center>
      <br />

      {/* Books Currently Reading */}
      <H2>Books</H2>
      {/* <CurrentlyReading /> */}
      <RectangleCard
        image="https://images-na.ssl-images-amazon.com/images/I/41sscWDYKXL._SX258_BO1,204,203,200_.jpg"
        title="Currently Reading"
        description="With Redux, you manage the state of a web application in a single, simple object, practically eliminating most state-related bugs."
        button="Read More"
      />
    </Layout>
  )
}

export default Home
