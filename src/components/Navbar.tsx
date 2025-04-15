import React from "react";
import { Button } from "./ui/button";
import { navigationLinks } from "@/lib/constants";
import { Link } from "react-router-dom";
import { Search, ShoppingCart } from "lucide-react";

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-screen  z-50 px-4 py-3">
      <div className="bg-white/90 backdrop-blur-md rounded-full px-4 py-2 mx-auto max-w-5xl flex justify-between items-center shadow-sm">
        {/* Logo */}
        <div></div>
        <div className="flex items-center">
          <div className="font-montserrat">
            <span className="text-dil-red font-bold text-2xl italic">
              KINGDOM
            </span>
            <span className="text-black text-xl ml-1 font-medium italic">
              FOODS
            </span>
          </div>
        </div>

        {/* Right Icons and Button */}
        <div className="flex items-center space-x-4"></div>
      </div>
    </nav>
  );
};

export default Navbar;
