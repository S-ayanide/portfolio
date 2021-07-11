import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import { GlobalContext } from '../../context/globalContext'

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  margin: 0;

  li {
    padding: 18px 10px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0d2538;
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`

const SwitchButton = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  margin: ${props => (props.theme.screens.sm ? '10px 10px' : '10px 20px')};

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${props => props.theme.button};
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 34px;
  }

  span:before {
    position: absolute;
    content: '';
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: ${props => props.theme.backgroundLight};
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
  }

  input:checked + span {
    background-color: ${props => props.theme.button};
  }

  input:focus + span {
    box-shadow: 0 0 1px #2196f3;
  }

  input:checked + span:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
`

const RightNav = ({ open }) => {
  const { theme, themeSwitchHandler } = useContext(GlobalContext)

  useEffect(() => {
    window.localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <Ul open={open}>
      <li>Home</li>
      <li>About</li>
      <li>Portfolio</li>
      <li>Blog</li>
      <li>Contact</li>
      <SwitchButton>
        <input
          type="checkbox"
          onChange={() =>
            themeSwitchHandler(theme === 'dark' ? 'light' : 'dark')
          }
        />
        <span></span>
      </SwitchButton>
    </Ul>
  )
}

export default RightNav
