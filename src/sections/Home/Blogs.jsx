import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { SquareCard } from '../../components/Cards/SquareCard'
import { Flex } from '../../components/Layout'
import { LoadingDots } from '../../components/LoadingDots'
import { Subtitle } from '../../components/Text'
import Heading from '../../components/Text/Heading'

const Box = styled.div`
  height: 100%;
  min-height: 20rem;
  border-radius: 1rem;
  width: 100%;
  background: ${props => props.theme.backgroundLight};
`

const Grid = styled.div`
  display: grid;
  min-height: 10rem;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-gap: 50px;
  padding: 0 1rem 2rem 1rem;
`

const ReadMore = styled(Link)`
  color: ${props => props.theme.highlight};
  font-weight: 500;

  :hover {
    cursor: pointer;
  }
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
        {blogData.length === 0 ? (
          <div style={{ paddingLeft: '1rem' }}>
            <LoadingDots />
          </div>
        ) : (
          <>
            {blogData.map(blog => (
              <SquareCard
                separateWindow
                title={blog.title}
                description={blog.description}
                coverImage={blog.cover_image}
                url={blog.url}
              />
            ))}
          </>
        )}
      </Grid>
      <Flex center>
        <Subtitle>
          <ReadMore to={'/blog'}>Read More</ReadMore>
        </Subtitle>
      </Flex>
    </Box>
  )
}

export { Blogs }
