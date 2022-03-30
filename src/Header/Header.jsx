import React from 'react'
import { AppBar, Box, Container, Toolbar } from '@mui/material';
import { makeStyles } from '@mui/styles';
import MenuNav from './MenuNav';

const useStyles = makeStyles(() => ({
    navTitle: {
      textDecoration: 'none',
    }
  })
)


function Header() {

    const classes = useStyles();

    return (
        <AppBar position="static" elevation={0} color={'transparent'}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box flexGrow={1}>
              <MenuNav classes={classes} />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    )
}

export default Header