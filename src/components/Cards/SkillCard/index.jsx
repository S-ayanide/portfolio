import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const CardWrapper = styled.div`
    position: relative;
    margin: 0.5rem 0.5rem;
    padding: 0 0.5rem;
    border-radius: 1rem;
    background: #FFFFFF;
    height: 13rem;
    width: ${props => props.theme.screens.lg ? '20rem' : '25rem'};
`

const Header = styled.h2`
    font-size: 1rem;    
    font-weight: bold;
    margin: 1rem 0;
    color: #FFFFFF;
    margin-left: 0.5rem;
    width: fit-content;
    padding: 0.2rem 2rem;
    border-radius: 2rem;
    background: #272727;
`

const SkillWrapper = styled.div`       
    width: 75%;    
    display: grid;
    grid-template-columns: repeat(4, 1fr);  
    height: 9rem;
`

const Image = styled.img`
    width: 3rem;
    height: 3rem;
    margin: 0 0.4rem;
`

const Anchor = styled.img`
    position: absolute;
    width: 5rem;
    height: 4rem;
    background: #272727;
    border-radius: 80px 0 0 80px;
    padding: 0.5rem;
    right: 0;
    bottom: 0;
    margin-bottom: 0.5rem;
`

const SkillCard = ({ heading, skillImage, name, anchorImage }) => 
  <CardWrapper>
      <Header>{heading}</Header>      
      <SkillWrapper>
      {
          skillImage.map((skill,i) => < Image src={skill} alt={name[i]}/>)
      }
      </SkillWrapper>
      <Anchor src={anchorImage} alt='anchor'/>
  </CardWrapper>

SkillCard.propTypes = {
  heading: PropTypes.string,
  skillImage: PropTypes.Array,
  name: PropTypes.string,
  anchorImage: PropTypes.string,
}

export default SkillCard
