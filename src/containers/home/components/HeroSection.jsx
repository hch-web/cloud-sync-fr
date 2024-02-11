import React from 'react';
import { Box, Container, Typography } from '@mui/material';

import { heroSectionStyles } from 'styles/mui/containers/homePageStyles';

function HeroSection() {
  return (
    <Box sx={heroSectionStyles}>
      <Container fixed>
        <Typography variant="h1" fontSize={80} mb={3} fontWeight={600}>
          Heading
        </Typography>

        <Typography variant="h6">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores consequuntur molestiae officia.
          Magni praesentium fugiat itaque ex, ea ipsum aperiam deleniti, est quam quasi id amet veritatis
          maxime voluptatem corrupti.
        </Typography>
      </Container>
    </Box>
  );
}

export default HeroSection;
