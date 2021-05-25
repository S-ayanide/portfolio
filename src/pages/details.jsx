import localforage from 'localforage';
import React from 'react';
import styled from 'styled-components';
import Layout from '../containers/layout';
import { talks } from '../data/data';

const Wrapper = styled.div`
  padding: 0 2rem;
`

const Video = styled.div`
  margin: 0 auto;
  margin: 2rem 0;
  padding: 2rem 0;
  background: #333652;
  border-radius: 0.5rem;
`

const Title = styled.h1`
  font-weight: bold;
  font-size: 1.6rem;
`

const Date = styled.h3`  
  font-size: 0.9rem;
  color: grey;
`

const Paragraph = styled.p`
  font-size: 1rem;
  margin: 1rem 0;
`

const Details = () => {

  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    localforage.getItem('talk').then(value => setIndex(value));
  })

  return (
    <Layout>
      <Wrapper>
        <Video>
          <iframe width="95%" height="500" style={{display: 'block', margin: '0 auto'}} src={talks[index].url} title={talks[index].title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </Video>        
        <Title>{talks[index].title}</Title>
        <Date>{talks[index].date}</Date>
        <br />
        <Paragraph>{talks[index].description}</Paragraph>
      </Wrapper>
    </Layout>
  )
}

export default Details
