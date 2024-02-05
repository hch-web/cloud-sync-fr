import React from 'react';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';

// COMPONENTS
import Navbar from './components/Navbar';

function LayoutWrapper() {
  return (
    <Box>
      <Navbar />

      <Outlet />
    </Box>
  );
}

export default LayoutWrapper;
