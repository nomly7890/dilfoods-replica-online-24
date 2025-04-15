
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Benefits from '../components/Benefits';
import Products from '../components/Products';
import Process from '../components/Process';
import Testimonials from '../components/Testimonials';
import Cta from '../components/Cta';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Benefits />
      <Products />
      <Process />
      <Testimonials />
      <Cta />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
