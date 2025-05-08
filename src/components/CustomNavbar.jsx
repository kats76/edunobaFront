// components/CustomNavbar.jsx
import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Avatar,
  Box
} from '@mui/material';
import { Link } from 'react-router-dom';

const CustomNavbar = ({ toggleAside, getImageSrc }) => {
  return (
    <AppBar position="sticky" sx={{ bgcolor: '#673ab7' }}>
      <Toolbar>
        <Typography
          variant="h6"
          component={Link}
          to="/class"
          sx={{ flexGrow: 1, textDecoration: 'none', color: '#fff' }}
        >
          Third Class: A
        </Typography>

        <Box sx={{ display: 'flex', gap: 1 }}>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/about">About</Button>
          <Button color="inherit" component={Link} to="/subjects">Subjects</Button>
          <Button color="inherit" component={Link} to="/contact">Contact</Button>
        </Box>

        <IconButton color="inherit" onClick={toggleAside} sx={{ ml: 2 }}>
          <Avatar src={getImageSrc()} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default CustomNavbar;
