
import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            {/* Dil Foods Logo */}
            <div className="text-3xl font-bold">
              <span className="text-dil-red">Dil</span>
              <span className="text-white text-xl">foods</span>
            </div>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-white hover:text-dil-yellow transition-colors font-medium">Home</a>
            <a href="#" className="text-white hover:text-dil-yellow transition-colors font-medium">Restaurant Partnership</a>
            <a href="#" className="text-dil-yellow transition-colors font-medium">Horeca Supply</a>
            <a href="#" className="text-white hover:text-dil-yellow transition-colors font-medium">Media</a>
            <a href="#" className="bg-white text-dil-purple font-medium px-4 py-2 rounded-md ml-4">Partner With Dil</a>
          </div>
          
          <div className="md:hidden">
            <button className="text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
