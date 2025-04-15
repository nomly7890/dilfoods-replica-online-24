
import React from 'react';
import { Button } from './ui/button';
import { navigationLinks } from '@/lib/constants';
import { Link } from 'react-router-dom';
import { Search, ShoppingCart } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-4 py-3">
      <div className="bg-white/90 backdrop-blur-md rounded-full px-4 py-2 mx-auto max-w-5xl flex justify-between items-center shadow-sm">
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
              className="text-gray-700 hover:text-primary transition-colors duration-300 text-sm font-medium"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right Icons and Button */}
        <div className="flex items-center space-x-4">
          <button className="text-gray-700 hover:text-primary">
            <Search className="h-5 w-5" />
          </button>
          <button className="text-gray-700 hover:text-primary">
            <ShoppingCart className="h-5 w-5" />
          </button>
          <Button 
            variant="default" 
            className="ml-2 rounded-full bg-dil-red hover:bg-dil-red/90 px-5 py-1 text-sm font-medium"
          >
            Partner With Us
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
