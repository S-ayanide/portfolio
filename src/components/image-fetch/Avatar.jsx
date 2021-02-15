import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
`

const Avatar = () => {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "profile_picture.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 700, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
    }
  `)

  return (
    <Wrapper>
      <Img
        fluid={data.image.childImageSharp.fluid}
        alt="Choas Bird taking feedback"
        style={{ margin: 'auto', borderRadius: '50%' }}
      />
    </Wrapper>
  )
}

export { Avatar }
