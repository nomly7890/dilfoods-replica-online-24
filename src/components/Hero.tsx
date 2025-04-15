
import React from 'react';
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel';

const categories = [
  {
    name: "Fresh Produce",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    name: "Dairy & Cheese",
    image: "https://images.unsplash.com/photo-1559598467-f8b76c8155d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    name: "Meat & Poultry",
    image: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    name: "Seafood",
    image: "https://images.unsplash.com/photo-1510130387422-82bed34b37e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
];

const Hero = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background Carousel */}
      <div className="absolute inset-0 w-full h-full">
        <Carousel className="w-full h-full" opts={{ loop: true, duration: 40 }}>
          <CarouselContent className="h-full">
            {categories.map((category, index) => (
              <CarouselItem key={index} className="h-full">
                <div className="relative w-full h-full">
                  <img 
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* Content overlay */}
      <div className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 z-10">
        <div className="max-w-5xl mx-auto">
          <p className="text-white/80 text-xl mb-4">No #1 Choice for Food Service Industry</p>
          
          <h1 className="font-playfair text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8">
            Powering Fast
            <br />
            Food Prep
          </h1>
          
          <p className="text-white/70 text-xl md:text-2xl max-w-3xl mx-auto mb-8">
            Enabling restaurants and quick commerce players to cook fast, so that they can deliver fast!
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 text-lg">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-dil-red rounded-full mr-3"></div>
              <span className="text-white">In-house automated manufacturing</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-dil-red rounded-full mr-3"></div>
              <span className="text-white">AM to PM food solutions</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-dil-red rounded-full mr-3"></div>
              <span className="text-white">All cuisines covered</span>
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
