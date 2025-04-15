
import React from 'react';
import { Clock, TrendingUp, Truck, DollarSign, ShieldCheck, Headphones } from 'lucide-react';

const benefitItems = [
  {
    icon: <Clock className="h-10 w-10 text-dil-blue" />,
    title: "Time Saving",
    description: "Save significant time with our streamlined ordering process and timely deliveries."
  },
  {
    icon: <TrendingUp className="h-10 w-10 text-dil-orange" />,
    title: "Quality Assurance", 
    description: "Consistently high-quality food ingredients meeting industry standards."
  },
  {
    icon: <Truck className="h-10 w-10 text-dil-blue" />,
    title: "Reliable Logistics",
    description: "Dependable delivery network ensuring your supplies arrive on schedule."
  },
  {
    icon: <DollarSign className="h-10 w-10 text-dil-orange" />,
    title: "Cost Effective",
    description: "Competitive pricing with transparent billing and no hidden costs."
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-dil-blue" />,
    title: "Food Safety",
    description: "Rigorous safety protocols ensuring the highest standards of food safety."
  },
  {
    icon: <Headphones className="h-10 w-10 text-dil-orange" />,
    title: "24/7 Support",
    description: "Round-the-clock customer service to address all your requirements."
  }
];

const Benefits = () => {
  return (
    <section className="py-16 bg-white" id="benefits">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dil-darkblue mb-4">
            Why Choose Our HORECA Supply Service?
          </h2>
          <p className="text-xl text-dil-gray max-w-3xl mx-auto">
            We offer comprehensive solutions tailored specifically for hotels, restaurants, and catering businesses.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefitItems.map((item, index) => (
            <div 
              key={index} 
              className="bg-dil-lightgray p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1 hover:bg-white border border-transparent hover:border-gray-200"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-5 animate-pulse-slow">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-dil-darkblue mb-3">{item.title}</h3>
                <p className="text-dil-gray">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
