import React from 'react';
import { Box } from '@mui/material';

import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import PricingSection from './components/PricingSection';
import HappyClientsSection from './components/HappyClientsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function Home() {
  return (
    <Box>
      <HeroSection />

      <AboutSection />

      <ServicesSection />

      <PricingSection />

      <HappyClientsSection />

      <ContactSection />

      <Footer />
    </Box>
  );
}

export default Home;
