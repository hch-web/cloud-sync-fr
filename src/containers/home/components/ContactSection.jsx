import React from 'react';
import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material';
import { Facebook, LinkedIn, Twitter } from '@mui/icons-material';

import { contactSectionStyles } from 'styles/mui/containers/homePageStyles';
import TextField from 'containers/common/components/TextField';

function ContactSection() {
  return (
    <Box id="contact-container" sx={contactSectionStyles}>
      <Container fixed>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" fontWeight={600} color="primary" mb={4}>
              Let&apos;s Work Together
            </Typography>

            <Typography variant="body1" mb={2}>
              ❤️ from CloudSync Team
            </Typography>

            <Typography variant="body1" mb={4}>
              Tel:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+92 300 1234567
              <br />
              Email: sales@cloudsync.com
            </Typography>

            <Stack direction="row" spacing={2}>
              <LinkedIn fontSize="large" />

              <Facebook fontSize="large" />

              <Twitter fontSize="large" />
            </Stack>
          </Grid>

          <Grid item xs={12} md={6}>
            <form>
              <Grid container columnSpacing={3} rowGap={3}>
                <Grid item xs={12} md={6}>
                  <TextField name="first_name" label="First Name" />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField name="last_name" label="Last Name" />
                </Grid>

                <Grid item xs={12} md={12}>
                  <TextField name="email" label="Email" />
                </Grid>

                <Grid item xs={12} md={12}>
                  <TextField name="message" label="Leave us a message" />
                </Grid>

                <Grid item xs={12}>
                  <Button variant="contained" color="primary">
                    Send Message
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ContactSection;
