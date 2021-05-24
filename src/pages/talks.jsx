import { Typography } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
import SquareCard from '../components/Cards/SquareCard'
import { SectionDark } from '../components/Layout/Sections'
import {talks} from '../data/data';
import Layout from '../containers/layout'

const Header = styled.div`
  display: flex;
  flex-direction: ${props => (props.theme.screens.md ? 'column' : 'row')};
  justify-content: space-between;

  .content {
    margin: ${props => (props.theme.screens.md ? '0 auto' : 'auto')};
    width: ${props => (props.theme.screens.md ? '85%' : '60%')};
    padding: ${props => (props.theme.screens.md ? '2rem 3rem' : '5rem 1rem')};
    font-size: 1.6rem;
  }

  .loudspeaker {
    width: 20rem;
    margin: ${props => (props.theme.screens.md ? '0 auto' : 'auto')};
  }
`

const Grid = styled.div`
  width: 95%;
  padding: 1rem 0;
  margin: 0 auto;
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: ${props =>
    props.theme.screens.sm ? '1fr' : 'repeat(auto-fit, minmax(20rem, 1fr))'};
  grid-gap: 2rem;
  row-gap: 2rem;
`

const Title = styled.div`
  display: flex;
  padding: 1rem 2rem;
`

const Talks = () => {
  return (
    <Layout>
      <Header>
        <Typography className="content">
          A list of talks that I've been invited to and had the opportunity to
          share my experience with some amazing group of people
        </Typography>
        <img
          className="loudspeaker"
          src="./loudspeaker.gif"
          alt="Loudspeaker"
        />
      </Header>
      <Title>
        <img
          style={{ width: '4.5rem', height: '4.5rem', marginRight: '2rem' }}
          src="./mic.gif"
          alt="Mic"
        />
        <Typography
          style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            height: '1rem',
            lineHeight: '4rem',
          }}
        >
          Catch up on my talks so far
        </Typography>
      </Title>
      <SectionDark>
        <Grid>
          {talks.map(talk => (
            <SquareCard
            title={talk.title}
            description={talk.date}
            coverImage={talk.image}
            url={
              'https://events.google.com/io/session/49bf2d18-0ff4-4c4f-8753-4db3a8675f3e?lng=en'
            }
          />
          ))}
        </Grid>
      </SectionDark>
    </Layout>
  )
}

export default Talks
