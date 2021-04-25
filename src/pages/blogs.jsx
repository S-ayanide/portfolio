import React from 'react';
import styled from 'styled-components';
import SquareCard from '../components/Cards/SquareCard';
import Layout from '../containers/layout';
import { blogs } from '../data/data';

const Grid = styled.div`
  width: 95%;
  padding: 1rem 0;
  margin: 0 auto;
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: ${props =>
    props.theme.screens.sm
      ? '1fr'
      : 'repeat(auto-fit, minmax(15rem, 1fr))'};
  grid-gap: 2rem;
  row-gap: 2rem;
`

const Blogs = () => {
    
  return (
    <Layout>      
      <Grid>
        {blogs.map(blog =>        
          <SquareCard
            title={blog.title}
            description={blog.description}
            coverImage={blog.cover_image}
            url={blog.url}
          />
        )}
      </Grid>        
    </Layout>
  )
}

export default Blogs
