import React from "react";
import { Button } from "./ui/button";
import { navigationLinks } from "@/lib/constants";
import { Link } from "react-router-dom";
import { Search, ShoppingCart } from "lucide-react";

const Navbar: React.FC = () => {
  const [showNavbar, setShowNavbar] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      // Show navbar when scrolled down more than 100px
      setShowNavbar(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-screen z-50 px-4 py-3 transition-opacity duration-300 ${showNavbar ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div className="bg-white/90 backdrop-blur-md rounded-full px-4 py-2 mx-auto max-w-5xl flex justify-between items-center shadow-sm">
        {/* Logo */}
        <div></div>
        <div className="flex items-center">
          <div className="font-montserrat">
            <img 
              src="/lovable-uploads/icon.png" 
              alt="Kingdom Foods Logo" 
              className="h-15 w-auto"
            />
          </div>
        </div>

        {/* Right Icons and Button */}
        <div className="flex items-center space-x-4"></div>
      </div>
    </nav>
  );
};


export default Navbar;
