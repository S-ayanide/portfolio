import { AppBar, IconButton, Tab, Tabs } from '@material-ui/core'
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
  width: ${props => (props.theme.screens.lg ? '10%' : props.theme.screens.xl ? '80%' : '100%')};
  margin-left: ${props => (props.theme.screens.lg ? '45%' : props.theme.screens.xl ? '10%' : '0')};
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

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

const Menu = () => {
  const { lg, md } = useTheme().screens
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

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
                  marginTop: '0.5rem',
                  letterSpacing: '2px',
                  fontSize: '0.8rem',
                }}
              >
                Software Developer Engineer
              </p>
            </PersonalDetails>
          </>
          {lg ? (
            <AppBar
              style={{ background: '#272727' }}
              color="inherit"
              position="static"
            >
              <Tabs
                style={{ color: 'white' }}
                value={value}
                onChange={handleChange}
                textColor="inherit"
                centered
              >
                <Tab label="Home" {...a11yProps(0)} />
                <Tab label="CV" {...a11yProps(1)} />
                <Tab label="Blogs" {...a11yProps(2)} />
                <Tab label="Talks" {...a11yProps(3)} />
                <Tab label="Get In Touch" {...a11yProps(4)} />
              </Tabs>
            </AppBar>
          ) : (
            <nav style={{ marginTop: '15%' }}>
              <ul style={{ listStyle: 'none' }}>
                <MenuItem to={primaryRoute.home}>
                  <MenuList>Home</MenuList>
                </MenuItem>

                <MenuItem to={primaryRoute.cv}>
                  <MenuList>CV</MenuList>
                </MenuItem>

                <MenuItem to={primaryRoute.portfolio}>
                  <MenuList>Portfolio</MenuList>
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
