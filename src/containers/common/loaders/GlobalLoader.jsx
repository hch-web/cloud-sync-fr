import React from 'react';
import { Box, useTheme } from '@mui/material';
import { ThreeDots } from 'react-loader-spinner';

function GlobalLoader() {
  const { palette } = useTheme();
  const primary = palette.primary.main;

  return (
    <Box className="d-flex align-items-center justify-content-center vh-100">
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color={primary}
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible
      />
    </Box>
  );
}

export default GlobalLoader;
