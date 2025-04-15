
import React from 'react';

const Hero = () => {
  return (
    <div className="pt-20 bg-gradient-to-r from-dil-lightgray to-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-dil-darkblue mb-4">
              Streamlining Food Supply for HORECA Businesses
            </h1>
            <p className="text-xl text-dil-gray mb-8">
              High-quality ingredients, smart logistics, and excellent service for restaurants, hotels, and cafes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-dil-blue hover:bg-dil-darkblue text-white py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
                Get Started
              </button>
              <button className="border-2 border-dil-blue text-dil-blue hover:bg-dil-blue hover:text-white py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out">
                Learn More
              </button>
            </div>
          </div>
          <div className="md:w-1/2 animate-slide-in-right">
            <img 
              src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
              alt="Food Supply Chain Visualization" 
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
