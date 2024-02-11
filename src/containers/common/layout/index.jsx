import React from 'react';
import { Box } from '@mui/material';
import propTypes from 'prop-types';

// COMPONENTS
import Navbar from './components/Navbar';

function LayoutWrapper({ children }) {
  return (
    <Box>
      <Navbar />

      {children}
    </Box>
  );
}

LayoutWrapper.propTypes = {
  children: propTypes.node.isRequired,
};

export default LayoutWrapper;
