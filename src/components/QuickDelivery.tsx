
import React from 'react';

const QuickDelivery = () => {
  return (
    <section className="py-16 bg-dil-yellow" id="quick-delivery">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dil-purple mb-6">
              Perfect for 10-Minute Deliveries!
            </h2>
            <p className="text-lg text-dil-purple mb-8">
              Our products regenerate in just 2 minutes, making them ideal for quick 
              commerce platforms and fast-food operations.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-dil-purple rounded-full mr-3"></div>
                <span className="text-lg font-medium text-dil-purple">High Quality</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-dil-purple rounded-full mr-3"></div>
                <span className="text-lg font-medium text-dil-purple">Fast Preparation</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-dil-purple rounded-full mr-3"></div>
                <span className="text-lg font-medium text-dil-purple">Great Taste</span>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/lovable-uploads/882c5090-ed98-4dac-a46a-2943d1750b9d.png" 
                alt="Food preparation for quick delivery" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickDelivery;
