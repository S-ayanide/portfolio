import React from 'react';
import styled from 'styled-components';
import ResponsiveRow from '../../../components/Layout/ResponsiveRow';
import Subtitle from '../../../components/Text/Subtitle';

const HeaderWrapper = styled.div`
  flex-direction: column;
  justify-content: center;
  width: ${props => (props.theme.screens.sm ? '90%' : '45%')};
`

const H1 = styled.h1`
  margin-top: ${props => (props.theme.screens.sm ? '0' : '1.5rem')};
  text-align: center;
  font-size: ${props => (props.theme.screens.sm ? '2rem' : '3rem')};
`

const Header = () => 
    <ResponsiveRow breakpoint="sm" justifyContent="space-around">
        <HeaderWrapper>
          <H1>Who is Sayan?</H1>
          <br />
          <Subtitle align="center">
            Sayan currently works at ChaosNative as a Chaos Engineer and
            contributor to Litmus. He helps design, architect, and execute
            Litmus Web with precision. He is not only passionate about
            development but also curious about breaking stuff with the practice
            of Chaos Engineering
          </Subtitle>
        </HeaderWrapper>
        <img style={{ width: '20rem' }} src="./desk2.gif" alt="Desk" />
    </ResponsiveRow>

export default Header