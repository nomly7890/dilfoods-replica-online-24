
import React from 'react';

const processSteps = [
  {
    number: "01",
    title: "Place Your Order",
    description: "Submit your requirements through our user-friendly platform or mobile app."
  },
  {
    number: "02",
    title: "Order Processing",
    description: "We carefully process your order and prepare it for delivery."
  },
  {
    number: "03",
    title: "Quality Check",
    description: "Rigorous quality control to ensure all items meet our high standards."
  },
  {
    number: "04",
    title: "Delivery",
    description: "Fast and reliable delivery to your location at your preferred time."
  }
];

const Process = () => {
  return (
    <section className="py-16 bg-white" id="process">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dil-darkblue mb-4">
            How It Works
          </h2>
          <p className="text-xl text-dil-gray max-w-3xl mx-auto">
            A seamless process designed to make food supply management effortless.
          </p>
        </div>
        
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-dil-lightblue transform -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative z-10 animate-float" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                  <div className="w-12 h-12 rounded-full bg-dil-blue text-white flex items-center justify-center text-xl font-bold mb-5 mx-auto">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold text-dil-darkblue mb-3 text-center">{step.title}</h3>
                  <p className="text-dil-gray text-center">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
