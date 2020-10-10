import React from 'react';
import logo from './logo.svg';
import { Toolbar } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import { Menu } from '@material-ui/core';


import './App.css';


function App() {
  return (
    <AppBar position="static">
  <Toolbar>
    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
      <MenuIcon />
    </IconButton>
    <Typography variant="h6" className={classes.title}>
      News
    </Typography>
    <Button color="inherit">Login</Button>
  </Toolbar>
</AppBar>

   
  );
}

export default App;
