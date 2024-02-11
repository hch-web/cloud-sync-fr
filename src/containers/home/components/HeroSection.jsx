import React from 'react';
import { Box, Container, Typography } from '@mui/material';

import { heroSectionStyles } from 'styles/mui/containers/homePageStyles';

function HeroSection() {
  return (
    <Box sx={heroSectionStyles}>
      <Container fixed>
        <Typography variant="h1" fontSize={50} mb={3} fontWeight={600}>
          Where Connectivity Transcends Boundaries
        </Typography>

        <Typography variant="h6">
          Welcome to CloudSync, your premier destination for sophisticated cloud services
          encompassing VBS, web hosting, and cloud storage solutions. At CloudSync, we are
          committed to simplifying your digital endeavors by providing robust, tailored
          solutions that epitomize reliability, scalability, and accessibility. Whether
          you are an emergent startup or a seasoned enterprise, our platform facilitates
          synchronized data, fosters enhanced collaboration, and streamlines operations
          with unparalleled elegance. Embrace the convergence of innovation and reliability
          with CloudSync as we prioritize your success.
        </Typography>
      </Container>
    </Box>
  );
}

export default HeroSection;
