import { Typography } from '@material-ui/core'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const CardWrapper = styled.div`
  height: fit-content;
  width: 96%;
  margin: 1rem 1rem;
  padding: 1rem 0;
  display: flex;
  flex-direction: row;
  border-radius: 1rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  :hover {
    box-shadow: 12px 12px 2px 1px rgba(0, 0, 255, 0.2);
    transition: 0.2s ease;
  }
`

const ImageWrapper = styled.div`
  width: 25%;
  height: 10rem;
  padding: 0 1rem;
`

const Image = styled.img`
  width: 90%;
  height: 10rem;
  object-fit: contain;
`

const VerticalDiv = styled.div`
  position: relative;
  width: 73%;
  height: 9.5rem;
`

const Button = styled.button`
  position: absolute;
  font-size: 1rem;
  width: 25%;
  bottom: 0;
  background: #272727;
  color: white;
  cursor: pointer;
  box-shadow: 0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12);
  border-radius: 0.5rem;
  border: none;
  padding: 0.5rem;
`

const RectangleCard = ({ image, title, description, button }) => {
  return (
    <CardWrapper>
      {image ? (
        <ImageWrapper>
          <Image src={image} alt="Image" />
        </ImageWrapper>
      ) : (
        <></>
      )}
      <VerticalDiv aria-label="Vertical Data">
        <Typography variant="h5" style={{ fontWeight: 'bold' }}>
          {title}
        </Typography>
        <div style={{ margin: '1rem 0' }} />
        <Typography>{description}</Typography>
        <div style={{ margin: '1rem 0' }} />
        <Button>{button}</Button>
      </VerticalDiv>
    </CardWrapper>
  )
}

RectangleCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  button: PropTypes.string,
}

export default RectangleCard
