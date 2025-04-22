import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Products from "../components/Products";
import QuickDelivery from "../components/QuickDelivery";
import Process from "../components/Process";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* <Navbar /> */}
      <Hero />
      <Products />
      <QuickDelivery />
      <Process />
      <Testimonials />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
