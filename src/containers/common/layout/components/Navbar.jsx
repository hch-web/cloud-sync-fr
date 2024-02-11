import React, { useEffect, useState } from 'react';
import { Box, Container, Typography } from '@mui/material';

import logoImg from 'assets/text-logo.png';
import { navbarStyles } from 'styles/mui/containers/layoutStyles';
import { navLinks } from 'utilities/data';

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

  const handleScroll = contId => {
    const container = document.getElementById(contId);
    container.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
  };

  return (
    <Box className="px-3 py-4" sx={navbarStyles(isScrolled)}>
      <Container fixed className="d-flex align-items-center justify-content-between gap-3 ">
        <img src={logoImg} alt="Logo" />

        <Box className="d-flex align-items-center gap-3">
          {navLinks.map(link => (
            <Typography key={link.id} variant="body1" onClick={() => handleScroll(link?.href)}>
              {link.label}
            </Typography>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default Navbar;
