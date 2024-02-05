import React from 'react';
import { Box, Typography } from '@mui/material';

import logoImg from 'assets/text-logo.png';

function Navbar() {
  return (
    <Box className="d-flex align-items-center justify-content-between gap-3 px-3 py-4">
      <img src={logoImg} alt="Logo" />

      <Box className="d-flex align-items-center gap-3">
        <Typography variant="body1">Home</Typography>
        <Typography variant="body1">About</Typography>
        <Typography variant="body1">Services</Typography>
        <Typography variant="body1">Membership</Typography>
      </Box>
    </Box>
  );
}

export default Navbar;
