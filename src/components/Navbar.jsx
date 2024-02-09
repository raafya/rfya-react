import { AppBar, Button, Link, Toolbar, Typography } from '@mui/material'
import React from 'react'

const Navbar = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
                <Typography>Employee App</Typography>
                <Button variant='contained' color='error'><Link style={{textdecoration:"none"}} to={'/'}> View data</Link></Button> &nbsp;
                <Button variant='contained' color='success'><Link style={{textdecoration:"none"}} to={'/add'}>Add data</Link></Button>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar