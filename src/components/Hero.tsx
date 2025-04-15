
import React from 'react';
import { Circle } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative">
      {/* Main gradient background */}
      <div className="bg-dil-gradient pt-24 pb-10">
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-5xl mx-auto leading-tight">
              Enabling restaurants and quick commerce players to cook fast, so that they can deliver fast!
            </h1>
            
            <div className="flex flex-col md:flex-row justify-center mt-12 gap-6 md:gap-12">
              <div className="flex items-center text-white">
                <div className="w-3 h-3 bg-dil-yellow rounded-full mr-3"></div>
                <span className="text-lg md:text-xl">In-house automated manufacturing facility</span>
              </div>
              
              <div className="flex items-center text-white">
                <div className="w-3 h-3 bg-dil-yellow rounded-full mr-3"></div>
                <span className="text-lg md:text-xl">AM to PM food solutions</span>
              </div>
              
              <div className="flex items-center text-white">
                <div className="w-3 h-3 bg-dil-yellow rounded-full mr-3"></div>
                <span className="text-lg md:text-xl">All cuisines covered</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Yellow scrolling banner */}
      <div className="bg-dil-yellow py-3 overflow-hidden whitespace-nowrap">
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
