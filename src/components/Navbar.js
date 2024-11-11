import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Typography, Box, Button } from '@mui/material';
import { FaHome, FaBook } from 'react-icons/fa';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';


const Navbar = ({ mode, toggleTheme }) => {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#263238', padding: '0 20px' }}>
      <Toolbar>
        
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          <img 
            src="/library_8074804.png" 
            alt="Library Logo" 
            style={{ width: 40, height: 40, marginRight: 10 }} 
          />
          <Typography
            variant="h5"
            sx={{
              fontFamily: 'Roboto, sans-serif',
              fontWeight: 'bold',
              color: '#FFF',
              letterSpacing: 2,
            }}
          >
            Book Library
          </Typography>
        </Box>

        
        <Box sx={{ display: 'flex', gap: '15px' }}>
          <Button color="inherit" component={Link} to="/" startIcon={<FaHome size={20} />}>
            Home
          </Button>
          <Button color="inherit" component={Link} to="/add-book" startIcon={<FaBook size={20} />}>
            Add Book
          </Button>
        </Box>

        
        <IconButton onClick={toggleTheme} color="inherit">
          {mode === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
