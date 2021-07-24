import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { SquareCard } from '../../components/Cards/SquareCard'
import Heading from '../../components/Text/Heading'

const Box = styled.div`
  height: 100%;
  border-radius: 1rem;
  width: 100%;
  background: ${props => props.theme.backgroundLight};
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-gap: 50px;
  padding: 0 1rem 2rem 1rem;
`

const Blogs = () => {
  const [blogData, setBlogData] = useState([])

  useEffect(() => {
    fetch('/api/blogs/4')
      .then(res => res.json())
      .then(data => setBlogData(data))
  }, [])

  return (
    <Box>
      <Heading>Recent Blogs</Heading>
      <Grid>
        {blogData.map(blog => (
          <SquareCard
            separateWindow
            title={blog.title}
            description={blog.description}
            coverImage={blog.cover_image}
            url={blog.url}
          />
        ))}
      </Grid>
    </Box>
  )
}

export { Blogs }
