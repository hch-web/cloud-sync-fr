import React, { useCallback, useState } from 'react';
import {
  Box,
  Container,
  Divider,
  Tab,
  Tabs,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from '@mui/material';
import TabPanel from 'containers/common/components/TabPanel';
import { pricingPlansData } from 'utilities/data';
import ServicePricePlans from 'containers/common/components/ServicePricePlans';

function PricingSection() {
  const [activeService, setActiveService] = useState(0);
  const [activePlan, setActivePlan] = useState('monthly');

  const handleChangeService = useCallback((event, newValue) => {
    setActiveService(newValue);
  }, []);

  const handleChangePlan = useCallback((event, newValue) => {
    if (newValue !== null) {
      setActivePlan(newValue);
    }
  }, []);

  return (
    <Container id="pricing-container" fixed className="my-5 py-5">
      <Box mb={5}>
        <Typography variant="h4" fontWeight={600} textAlign="center" mb={2} color="primary">
          Choose Your Plan
        </Typography>

        <Typography variant="body1" textAlign="center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum tortor sem.
        </Typography>
      </Box>

      <Box>
        <Box className="d-flex align-items-center justify-content-between gap-4">
          <Tabs value={activeService} onChange={handleChangeService} centered>
            {pricingPlansData.map(service => (
              <Tab key={service.id} label={service.title} value={service.id} />
            ))}
          </Tabs>

          <ToggleButtonGroup value={activePlan} exclusive onChange={handleChangePlan}>
            <ToggleButton size="small" value="monthly">
              Montly
            </ToggleButton>

            <ToggleButton size="small" value="yearly">
              Yearly
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>

        <Divider className="mb-5" />

        {pricingPlansData?.map(service => (
          <TabPanel key={service?.id} stateValue={activeService} index={service?.id}>
            <ServicePricePlans activeTab={activeService} planType={activePlan} />
          </TabPanel>
        ))}
      </Box>
    </Container>
  );
}

export default PricingSection;
