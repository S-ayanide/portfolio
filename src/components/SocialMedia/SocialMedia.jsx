import React from 'react'
import styled, { useTheme } from 'styled-components'
import SocialData from '../../data/SocialMedia'
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon,
} from '../../svg'
import { Width } from '../Layout'

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;

  .icon {
    width: 1.5rem;
    height: 1.5rem;
  }
`

const ExtraSpaceForSM = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    margin-bottom: 2rem;
  }
`

const Link = styled.a`
  text-decoration: none;
  margin-right: 1rem;
  cursor: pointer;
`

const IconList = index => {
  const color = useTheme().icon
  switch (index) {
    case 0:
      return <TwitterIcon fill={color} className="icon" />
    case 1:
      return <LinkedinIcon fill={color} className="icon" />
    case 2:
      return <YoutubeIcon fill={color} className="icon" />
    case 3:
      return <InstagramIcon fill={color} className="icon" />
    case 4:
      return <FacebookIcon fill={color} className="icon" />
    default:
      return null
  }
}

const SocialMedia = ({ width }) => (
  <Width width={width} margin={0}>
    <Grid>
      {SocialData.social.map((item, index) => (
        <Link key={item.url} target="_blank" href={item.url}>
          {IconList(index)}
        </Link>
      ))}
    </Grid>
    <ExtraSpaceForSM />
  </Width>
)

export { SocialMedia }
