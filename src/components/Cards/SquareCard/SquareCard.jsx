import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const CardWrapper = styled.div`
  height: 100%;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  box-shadow: ${props =>
    `0px 4px 6px -1px ${props.theme.shadow} , 0px 2px 4px -1px ${props.theme.shadow} `};
  color: ${props => props.theme.textPrimary};

  :hover {
    box-shadow: ${props =>
      `0px 10px 15px -3px ${props.theme.hover} , 0px 4px 6px -2px ${props.theme.hover} `};
    transition: 0.2s ease;
    cursor: pointer;
  }
`

const CoverImage = styled.div`
  margin: 1rem auto;
  width: 100%;

  img {
    width: 100%;
    height: 13rem;
    border-radius: 0.7rem;
    object-fit: cover;
    overflow: hidden;
  }
`

const Title = styled.h1`
  font-weight: bold;
  font-size: 1rem;
`

const Description = styled.p`
  margin-top: 0.5rem;
  font-size: 0.8rem;
`

const SquareCard = ({
  title,
  description,
  coverImage,
  url,
  separateWindow,
}) => (
  <CardWrapper
    onClick={() =>
      separateWindow
        ? window.open(url)
        : window.location.assign(window.location.href + '/' + url)
    }
  >
    <CoverImage>
      <img src={coverImage} alt={'Cover Image'} />
    </CoverImage>
    <Title>{title}</Title>
    <Description>{description}</Description>
  </CardWrapper>
)

SquareCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  coverImage: PropTypes.string,
  url: PropTypes.string,
}

export { SquareCard }
