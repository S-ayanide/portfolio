import React from 'react'
import { AppBar, Typography, Toolbar } from '@material-ui/core'

const Header = ({ children }) => {
  return (
    <AppBar color="default" position="static" style={{ color: 'black' }}>
      <Toolbar variant="dense">
        <Typography variant="h6" color="inherit">
          {children}
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header
