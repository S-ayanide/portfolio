import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const CardWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 1rem;
  background: #f4f5f7;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  :hover {
    box-shadow: 12px 12px 2px 1px rgba(0, 0, 255, 0.2);
    transition: 0.2s ease;
    cursor: pointer;
  }
`

const CoverImage = styled.div`
  margin: 0 auto;
  margin-bottom: 1rem;
  width: 100%;
  object-fit: contain;
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

export default SquareCard
