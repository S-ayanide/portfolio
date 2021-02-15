import React from 'react'
import styled from 'styled-components'
import RectangleCard from '../components/Cards/RectangleCard'
import CurrentlyReading from '../components/CurrentlyReading'
import Heading from '../components/Text/Heading'
import Layout from '../containers/layout'

const HeaderSection = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Home = () => {
  return (
    <Layout header={'Home'}>
      <HeaderSection>
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
          <h1>Sayan</h1>
          <p>Some details</p>
        </div>
        <img style={{width: '20rem'}} src="./desk2.gif" alt="Desk" />
      </HeaderSection>
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
