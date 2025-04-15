
import React from 'react';
import { Button } from './ui/button';
import { navigationLinks } from '@/lib/constants';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md z-50 shadow-sm">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="flex items-center">
          <div className="text-3xl font-bold">
            <span className="text-dil-red">Kingdom</span>
            <span className="text-black text-xl ml-1">foods</span>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center space-x-6">
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="text-gray-700 hover:text-primary transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}

          {/* Right Action Button */}
          <Button 
            variant="default" 
            className="ml-4 px-6 py-2 text-sm font-medium"
          >
            Partner With Us
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
