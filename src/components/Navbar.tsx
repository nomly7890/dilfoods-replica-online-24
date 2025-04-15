
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
          <img 
            src="/placeholder.svg" 
            alt="Dil Foods Logo" 
            className="h-10 w-auto"
          />
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
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
