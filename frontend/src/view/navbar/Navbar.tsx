import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, IconButton, Button, CssBaseline, Stack, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { createStyles, makeStyles } from '@mui/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";


const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  abRoot: {
    backgroundColor: "red",
  },
  abStatic: {
    border: "solid blue 2px"
  },
  title: {
    textDecoration: "none",
    color: 'inherit',
    '&:hover': {
      backgroundColor: '',
      color: 'inherit',
    },
  },
  button: {
    color: 'inherit',
    backgroundColor: '',
    '&:hover': {
      backgroundColor: '#ffffff',
      color: '#3c52b2',
    },
  }
});


function Navbar() {
  const classes = useStyles();

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Box className={classes.root}>
          <IconButton
            size="large"
            edge="start"
            className={classes.button}
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h5' className={classes.title} component={Link}
            to="/" >
            Thoughts
          </Typography>
        </Box>
        <Button className={classes.button} href="/signin">Login</Button>
        <Button className={classes.button} component={Link} to={'/signup'}>Create Account</Button>
      </Toolbar>
    </AppBar>
  );
}


export default Navbar;