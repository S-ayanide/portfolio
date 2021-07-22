import React from 'react'
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

const Blogs = () => (
  <Box>
    <Heading>Recent Blogs</Heading>
    <Grid>
      <SquareCard
        title={'Yo'}
        description={'HHHHHHH'}
        coverImage={
          'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fbuzzsouthafrica.com%2Fwp-content%2Fuploads%2Fblogs-2.jpg&f=1&nofb=1'
        }
        url={'#'}
      />
      <SquareCard
        title={'Yo'}
        description={'HHHHHHH'}
        coverImage={
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.6nCVjA0S936UiBlDUsov4QAAAA%26pid%3DApi&f=1'
        }
        url={'#'}
      />
      <SquareCard
        title={'Yo'}
        description={'HHHHHHH'}
        coverImage={
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.yTuUTOr1VB-7yxyLv4WBVQHaEK%26pid%3DApi&f=1'
        }
        url={'#'}
      />
    </Grid>
  </Box>
)

export { Blogs }
