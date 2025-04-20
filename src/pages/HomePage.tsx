import { useEffect } from 'react';
import HeroSection from '../components/home/HeroSection';
import ServicesSection from '../components/home/ServicesSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import StatsSection from '../components/home/StatsSection';
import ContactSection from '../components/home/ContactSection';

const HomePage = () => {
  useEffect(() => {
    // Update page title
    document.title = 'Nexus Consulting | Innovative Business Strategies';
  }, []);
  
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <StatsSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
};

export default HomePage;