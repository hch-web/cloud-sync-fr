import React, { useMemo } from 'react';
import { Check } from '@mui/icons-material';
import { Box, Grid, Stack, Typography } from '@mui/material';
import propTypes from 'prop-types';

import { pricingPlansData } from 'utilities/data';
import { priceSectionCardStyles } from 'styles/mui/containers/homePageStyles';

function ServicePricePlans({ activeTab, planType }) {
  const selectedPlan = useMemo(() => pricingPlansData?.find(plan => plan.id === activeTab), []);

  return (
    <Grid container columnSpacing={2} rowGap={3}>
      {selectedPlan?.plans?.map(plan => (
        <Grid key={plan.title} item xs={12} sm={6} md={4}>
          <Box sx={priceSectionCardStyles}>
            <Typography variant="body1" fontSize={18} fontWeight={500}>
              {plan?.title}
            </Typography>

            <Typography variant="h5" fontWeight={500} my={3}>
              {`$${plan?.price?.[planType]}`}
            </Typography>

            <Stack spacing={2}>
              {plan?.features?.map(feature => (
                <Stack key={feature} direction="row" alignItems="center" spacing={2}>
                  <Check />

                  <Typography variant="body1">{feature}</Typography>
                </Stack>
              ))}
            </Stack>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}

ServicePricePlans.propTypes = {
  activeTab: propTypes.number.isRequired,
  planType: propTypes.string.isRequired,
};

export default ServicePricePlans;
