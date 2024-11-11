import React from 'react';
import { FaGithub, FaLinkedin, FaUserAlt } from 'react-icons/fa';
import { Box, Container, IconButton, Typography, Grid } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        backgroundColor: '#263238',
        color: 'white',
        padding: '10px 0',
        boxShadow: 2,
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 1,
        }}
      >
       
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <FaUserAlt size={20} color="#ffffff" />
          <Typography variant="body2" sx={{ color: '#ffffff', fontWeight: 'bold', letterSpacing: 1 }}>
            Let's Connect
          </Typography>
        </Box>

       
        <Grid container spacing={2} justifyContent="center">
          <Grid item>
            <IconButton
              href="https://github.com/adarsh620"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: '#ffffff',
                backgroundColor: '#333333',
                '&:hover': {
                  backgroundColor: '#444444',
                  transform: 'scale(1.1)',
                },
                padding: '8px',
              }}
            >
              <FaGithub size={22} />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton
              href="https://www.linkedin.com/in/adarsh-shukla-9baa421ab/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: '#ffffff',
                backgroundColor: '#0077b5',
                '&:hover': {
                  backgroundColor: '#005582',
                  transform: 'scale(1.1)',
                },
                padding: '8px',
              }}
            >
              <FaLinkedin size={22} />
            </IconButton>
          </Grid>
        </Grid>

       
        <Box sx={{ textAlign: 'center', marginTop: '8px' }}>
          <Typography variant="body2" sx={{ color: '#b0bec5', fontSize: '12px' }}>
            © {new Date().getFullYear()} Adarsh Shukla. All Rights Reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
