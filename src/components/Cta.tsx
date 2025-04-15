
import React from 'react';

const Cta = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-dil-blue to-dil-darkblue text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-2/3 mb-8 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">
              Ready to Streamline Your Food Supply Chain?
            </h2>
            <p className="text-xl opacity-90 mb-0 max-w-2xl animate-fade-in" style={{animationDelay: "0.2s"}}>
              Join hundreds of satisfied HORECA businesses that trust us for their food supply needs. Get started today!
            </p>
          </div>
          <div className="md:w-1/3 text-center md:text-right animate-fade-in" style={{animationDelay: "0.4s"}}>
            <button className="bg-white text-dil-blue hover:bg-dil-lightgray py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 font-medium">
              Contact Us Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
