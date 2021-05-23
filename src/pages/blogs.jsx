import React, { useState } from 'react'
import styled from 'styled-components'
import SquareCard from '../components/Cards/SquareCard'
import { Search } from '../components/Search'
import Layout from '../containers/layout'
import { blogs } from '../data/data'

const Grid = styled.div`
  width: 95%;
  padding: 1rem 0;
  margin: 0 auto;
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: ${props =>
    props.theme.screens.sm ? '1fr' : 'repeat(auto-fit, minmax(15rem, 1fr))'};
  grid-gap: 2rem;
  row-gap: 2rem;
`

const SearchWrapper = styled.div`
  padding: 1rem 2.8rem;
`

const Blogs = () => {

  const [search, setSearch] = useState(null);

  // Filter the blogs based on search results
  const filteredBlogs = blogs.filter(blog => {
    if (search === null) return blog;
    if (blog.title.toLowerCase().includes(search.toLowerCase()))
      return blog;
    return null;
  });

  return (
    <Layout>
      <SearchWrapper>
      <Search
          placeholder={'Enter title to search'}
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
        </SearchWrapper>
      <Grid>
        {filteredBlogs.map(blog => (
          <SquareCard
            title={blog.title}
            description={blog.description}
            coverImage={blog.cover_image}
            url={blog.url}
          />
        ))}
      </Grid>
    </Layout>
  )
}

export default Blogs
