import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import { clientImageStyles } from 'styles/mui/containers/homePageStyles';
import { clientsData } from 'utilities/data';

function HappyClientsSection() {
  return (
    <Box id="happy-clients-container" className="p-5" bgcolor="#f8f1ff">
      <Typography variant="h4" fontWeight={600} textAlign="center" mb={2} color="primary">
        Our Happy Clients
      </Typography>

      <Stack direction="row" justifyContent="space-between" alignItems="center" gap={3}>
        {clientsData.map(client => (
          <Box sx={clientImageStyles(client?.image)} />
        ))}
      </Stack>
    </Box>
  );
}

export default HappyClientsSection;
