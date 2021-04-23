import React from 'react'
import styled from 'styled-components'
import { SectionDark } from '../components/Layout/Sections'
import Layout from '../containers/layout'
import { companies } from '../data/data'
import Books from '../section/Home/Books'
import Header from '../section/Home/Header'
import Project from '../section/Home/Project'
import Skills from '../section/Home/Skills'

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
  grid-template-columns: ${props =>
    props.theme.screens.sm
      ? '1fr 1fr 1fr'
      : 'repeat(auto-fit, minmax(80px, 1fr))'};
  grid-gap: 2rem;
  row-gap: 2rem;
`

const Home = () => {
  return (
    <Layout>
      <br />

      {/* Header */}
      <Header />

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
      <Project />
      <br />

      <SectionDark>
        {/* Programming SKills */}
        <H2>Skills</H2>
        <br />
        <Skills />
      </SectionDark>

      <br />
      {/* Books Currently Reading */}
      <H2>Books</H2>
      <Books />
    </Layout>
  )
}

export default Home
