import { Container, Typography } from '@mui/material';
import React from 'react';

function AboutSection() {
  return (
    <Container fixed className="text-center my-5 py-5">
      <Typography variant="h4" mb={3} fontWeight={600} color="primary">
        ABOUT US
      </Typography>

      <Typography variant="body1" fontSize={18}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores consequuntur molestiae officia. Magni
        praesentium fugiat itaque ex, ea ipsum aperiam deleniti, est quam quasi id amet veritatis maxime
        voluptatem corrupti.
      </Typography>
    </Container>
  );
}

export default AboutSection;
