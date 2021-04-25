import { AppBar, IconButton } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { Link as GatsbyLink } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import { Avatar } from '../components/image-fetch/Avatar'
import { primaryRoute } from '../routes/primary'
import { useTheme } from '../styles'

const Sidebar = styled.div`
  height: ${props => (props.theme.screens.lg ? 'fit-content' : '100%')};
  width: ${props => (props.theme.screens.lg ? '100%' : '15%')};
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #272727;
  overflow-x: hidden;
  padding-top: ${props => (props.theme.screens.lg ? '0' : '20px')};
`

const DisplayPicture = styled.div`
  margin-top: ${props => (props.theme.screens.lg ? '2%' : '10%')};
  display: flex;
  justify-content: center;
  width: ${props =>
    props.theme.screens.lg
      ? '10%'
      : props.theme.screens.xl
      ? '80%'
      : props.theme.screens.xxxl
      ? '80%'
      : '100%'};
  margin-left: ${props =>
    props.theme.screens.lg
      ? '45%'
      : props.theme.screens.xl
      ? '10%'
      : props.theme.screens.xxxl
      ? '10%'
      : '0'};
`

const PersonalDetails = styled.div`
  margin-top: ${props => (props.theme.screens.lg ? '1rem' : '5%')};
  color: white;
  text-align: center;
  margin-bottom: 20px;
`

const MenuItem = styled(GatsbyLink)`
  text-decoration: none;
  color: white;
`

const MenuList = styled.li`
  padding: 2% 0;
  padding-left: 3%;

  :hover {
    background: rgb(187, 187, 187);
    color: black;
    font-weight: 600;
  }
`

const Tabs = styled.div`
  color: white;
  display: flex;
  margin: 0 auto;
`

const Tab = styled(GatsbyLink)`
  padding: 1rem 2rem;
  text-decoration: none;
  color: white;
`

const Menu = () => {
  const { lg, md } = useTheme().screens

  return (
    <Sidebar>
      {md ? (
        <IconButton
          edge="false"
          style={{ color: 'white' }}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
      ) : (
        <>
          <>
            <DisplayPicture>
              <Avatar />
            </DisplayPicture>
            <PersonalDetails>
              <h2 style={{ fontWeight: '600', letterSpacing: '1px' }}>
                Sayan Mondal
              </h2>
              <p
                style={{
                  fontWeight: '100',
                  marginTop: '0.7rem',
                  margin: '0 1rem',
                  letterSpacing: '2px',
                  fontSize: '0.8rem',
                }}
              >
                Software Developer Engineer
              </p>
            </PersonalDetails>
          </>
          {lg ? (
            <>
              <AppBar
                style={{ background: '#272727' }}
                color="inherit"
                position="static"
              >
                <Tabs>
                  <Tab to={primaryRoute.home}>Home</Tab>

                  <Tab to={primaryRoute.resume}>Resume</Tab>

                  <Tab to={primaryRoute.experience}>Experience</Tab>

                  <Tab to={primaryRoute.blog}>Blogs</Tab>

                  <Tab to={primaryRoute.talks}>Talks</Tab>

                  <Tab to={primaryRoute.contact}>Get In Touch</Tab>
                </Tabs>
              </AppBar>
            </>
          ) : (
            <nav style={{ marginTop: '15%' }}>
              <ul style={{ listStyle: 'none' }}>
                <MenuItem to={primaryRoute.home}>
                  <MenuList>Home</MenuList>
                </MenuItem>

                <MenuItem to={primaryRoute.resume}>
                  <MenuList>Resume</MenuList>
                </MenuItem>

                <MenuItem to={primaryRoute.experience}>
                  <MenuList>Experience</MenuList>
                </MenuItem>

                <br></br>

                <MenuItem to={primaryRoute.blog}>
                  <MenuList>Blogs</MenuList>
                </MenuItem>

                <MenuItem to={primaryRoute.talks}>
                  <MenuList>Talks</MenuList>
                </MenuItem>

                <MenuItem to={primaryRoute.contact}>
                  <MenuList>Get in Touch</MenuList>
                </MenuItem>
              </ul>
            </nav>
          )}
        </>
      )}
    </Sidebar>
  )
}

export default Menu
