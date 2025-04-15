
import React from 'react';

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-white">
      {/* Main content section taking full viewport height */}
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
        <div className="max-w-5xl mx-auto">
          <p className="text-black/80 text-xl mb-4">No #1 Choice for Food Service Industry</p>
          
          <h1 className="font-playfair text-6xl md:text-7xl lg:text-8xl font-bold text-black mb-8">
            Powering Fast
            <br />
            Food Prep
          </h1>
          
          <p className="text-black/70 text-xl md:text-2xl max-w-3xl mx-auto mb-8">
            Enabling restaurants and quick commerce players to cook fast, so that they can deliver fast!
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 text-lg">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-dil-red rounded-full mr-3"></div>
              <span>In-house automated manufacturing</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-dil-red rounded-full mr-3"></div>
              <span>AM to PM food solutions</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-dil-red rounded-full mr-3"></div>
              <span>All cuisines covered</span>
            </div>
          </div>
        </div>
      </div>

      {/* Yellow banner at bottom */}
      <div className="absolute bottom-0 left-0 right-0 bg-dil-yellow py-3 overflow-hidden whitespace-nowrap">
        <div className="animate-marquee inline-block">
          <span className="text-lg font-bold mr-4">READY TO EAT!</span>
          <span className="text-lg font-bold mr-4">READY TO REGENERATE IN 2 MINUTES!</span>
          <span className="text-lg font-bold mr-4">READY TO COOK!</span>
          <span className="text-lg font-bold mr-4">READY TO EAT!</span>
          <span className="text-lg font-bold mr-4">READY TO REGENERATE IN 2 MINUTES!</span>
          <span className="text-lg font-bold mr-4">READY TO COOK!</span>
          <span className="text-lg font-bold mr-4">READY TO EAT!</span>
          <span className="text-lg font-bold mr-4">READY TO REGENERATE IN 2 MINUTES!</span>
        </div>
        <div className="animate-marquee inline-block absolute">
          <span className="text-lg font-bold mr-4">READY TO EAT!</span>
          <span className="text-lg font-bold mr-4">READY TO REGENERATE IN 2 MINUTES!</span>
          <span className="text-lg font-bold mr-4">READY TO COOK!</span>
          <span className="text-lg font-bold mr-4">READY TO EAT!</span>
          <span className="text-lg font-bold mr-4">READY TO REGENERATE IN 2 MINUTES!</span>
          <span className="text-lg font-bold mr-4">READY TO COOK!</span>
          <span className="text-lg font-bold mr-4">READY TO EAT!</span>
          <span className="text-lg font-bold mr-4">READY TO REGENERATE IN 2 MINUTES!</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
