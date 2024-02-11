import React, { useEffect, useState } from 'react';
import { Box, Container, Typography } from '@mui/material';

import logoImg from 'assets/text-logo.png';
import { navbarStyles } from 'styles/mui/containers/layoutStyles';

function Navbar() {
  const [isScrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScoll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScoll);

    return () => {
      window.removeEventListener('scroll', handleScoll);
    };
  }, []);

  return (
    <Box className="px-3 py-4" sx={navbarStyles(isScrolled)}>
      <Container fixed className="d-flex align-items-center justify-content-between gap-3 ">
        <img src={logoImg} alt="Logo" />

        <Box className="d-flex align-items-center gap-3">
          <Typography variant="body1">About</Typography>
          <Typography variant="body1">Services</Typography>
          <Typography variant="body1">Pricing</Typography>
          <Typography variant="body1">Contact</Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Navbar;
