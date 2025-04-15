
import React from 'react';
import { ChevronDown } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            {/* Logo placeholder - in a real app, use an actual logo */}
            <div className="text-2xl font-bold text-dil-blue">
              <span className="text-dil-orange">Dil</span>Foods
            </div>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-dil-gray hover:text-dil-blue transition-colors font-medium">Home</a>
            <div className="relative group">
              <button className="flex items-center text-dil-gray hover:text-dil-blue transition-colors font-medium">
                Our Services <ChevronDown className="h-4 w-4 ml-1" />
              </button>
              <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md mt-2 py-2 w-56">
                <a href="#" className="block px-4 py-2 text-sm text-dil-gray hover:bg-dil-lightgray hover:text-dil-blue">Horeca Supply</a>
                <a href="#" className="block px-4 py-2 text-sm text-dil-gray hover:bg-dil-lightgray hover:text-dil-blue">Cloud Kitchens</a>
                <a href="#" className="block px-4 py-2 text-sm text-dil-gray hover:bg-dil-lightgray hover:text-dil-blue">Quick Commerce</a>
              </div>
            </div>
            <a href="#" className="text-dil-gray hover:text-dil-blue transition-colors font-medium">About Us</a>
            <a href="#" className="text-dil-gray hover:text-dil-blue transition-colors font-medium">Contact</a>
          </div>
          
          <div className="md:hidden">
            <button className="text-dil-gray hover:text-dil-blue">
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
