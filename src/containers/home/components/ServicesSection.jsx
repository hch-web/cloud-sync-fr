import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import { v4 } from 'uuid';

import { serviceCardStyles } from 'styles/mui/containers/homePageStyles';
import { servicesData } from 'utilities/data';

function ServicesSection() {
  return (
    <Box id="services-container" className="my-5 py-5 bg-light">
      <Container fixed>
        <Box mb={4}>
          <Typography variant="h4" fontWeight={600} textAlign="center" mb={2} color="primary">
            OUR SERVICES
          </Typography>

          <Typography variant="body1" textAlign="center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum tortor sem.
          </Typography>
        </Box>

        <Grid container rowGap={3} justifyContent="center">
          {servicesData.map(service => (
            <Grid item xs={12} sm={6} md={4} key={v4()} sx={serviceCardStyles}>
              <img width={200} src={service?.image} alt={service?.title} />

              <Typography variant="h6" fontWeight={600} mb={1} mt={2}>
                {service?.title}
              </Typography>

              <Typography variant="body1" color="grey">
                {service?.description}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default ServicesSection;
