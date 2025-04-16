"use client";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import { Star } from "lucide-react";
import EnquiryForm from "./EnquiryForm";
const categories = [
  {
    name: "Base Gravies",
    image: "https://cdn.dotpe.in/longtail/item_category/696120/aZsC0lEH.webp",
  },
  {
    name: "Chaap",
    image: "https://cdn.dotpe.in/longtail/item_category/696120/G8RLxVv6.webp",
  },
  {
    name: "Flat Breads",
    image: "https://cdn.dotpe.in/longtail/item_category/696120/fPuwdTeJ.webp",
  },
  {
    name: "Momos",
    image: "https://cdn.dotpe.in/longtail/item_category/696120/YmDyErEy.webp",
  },
  {
    name: "More Items",
    image: "https://cdn.dotpe.in/longtail/item_category/696120/plBdiEvZ.webp",
  },
  {
    name: "Non Veg Snacks",
    image: "https://cdn.dotpe.in/longtail/item_category/696120/FbCNp4PO.webp",
  },
  {
    name: "Ready Gravies",
    image: "https://cdn.dotpe.in/longtail/item_category/696120/FSdzaL7l.webp",
  },
  {
    name: "Rice Magic",
    image: "https://cdn.dotpe.in/longtail/item_category/696120/TChHYvDr.webp",
  },
  {
    name: "Side Dish",
    image: "https://cdn.dotpe.in/longtail/item_category/696120/vNCLNHzV.webp",
  },
  {
    name: "South Indian",
    image: "https://cdn.dotpe.in/longtail/item_category/696120/yPdcgyzW.webp",
  },
  {
    name: "Traditional Sweets",
    image: "https://cdn.dotpe.in/longtail/item_category/696120/vBWdlc8t.webp",
  },
  {
    name: "Veg Main Course",
    image: "https://cdn.dotpe.in/longtail/item_category/696120/yYBCi3Y4.webp",
  },
  {
    name: "Veg Snacks",
    image: "https://cdn.dotpe.in/longtail/item_category/696120/ofjbfceH.webp",
  },
];

const Hero = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let animationId;
    let scrollPosition = 0;

    const scroll = () => {
      if (!isHovering && scrollContainer) {
        scrollPosition += 1;
        if (scrollPosition >= scrollContainer.scrollWidth / 2) {
          scrollPosition = 0;
        }
        scrollContainer.scrollLeft = scrollPosition;
      }
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [isHovering]);

  return (
    <div className="relative flex flex-col bg-red-500 overflow-hidden">
      {/* Main content section with proper spacing */}
      <div className="flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 pt-20 sm:pt-20 lg:pt-24 pb-12 sm:pb-16 lg:pb-20 relative z-10">
        <div className="w-full sm:max-w-xl lg:max-w-4xl xl:max-w-6xl mx-auto flex flex-col items-center">
          {/* Featured badge */}
          <div className="inline-flex items-center bg-yellow-400 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-6 sm:mb-8 lg:mb-10">
            <Star className="h-3.5 sm:h-4 lg:h-5 w-3.5 sm:w-4 lg:w-5 mr-1.5 sm:mr-2 text-white fill-yellow-500" />
            <span className="font-medium text-xs sm:text-sm lg:text-base">
              12K+ Loved Our Gravies!
            </span>
          </div>

          <h1 className="font-playfair text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
            Ready to <span className="text-yellow-300">Eat, Cook, Serve</span>
          </h1>
          <h1 className="font-playfair text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-4 sm:mb-5 lg:mb-6 font-bold text-white leading-tight">
            for Horeca business
          </h1>

          <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-white/90 mb-6 sm:mb-8 lg:mb-10 max-w-xs sm:max-w-lg lg:max-w-2xl">
            Handcrafted recipes to suite all taste buds
          </p>

          {/* Action buttons */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-10 lg:mb-12">
            <EnquiryForm>
              <a className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl border-2 border-white px-6 sm:px-8 py-2.5 sm:py-3 font-medium text-sm sm:text-base lg:text-lg shadow-md transition duration-300 ease-out min-w-[160px] sm:min-w-[200px]">
                <span className="absolute inset-0 flex h-full w-full -translate-y-full items-center justify-center bg-white text-black duration-300 group-hover:translate-y-0">
                  <span className="font-montserrat absolute flex h-full w-full transform items-center justify-center text-black">
                    Coming Soon
                  </span>
                </span>
                <span className="font-montserrat absolute flex h-full w-full transform items-center justify-center text-white transition-all duration-300 group-hover:translate-y-full">
                  Download App
                </span>
                <span className="invisible relative">Download App</span>
              </a>
            </EnquiryForm>
          </div>

          {/* Carousel section with blur effects */}
          <div className="w-full max-w-xl sm:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto relative">
            {/* Left blur gradient */}
            <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-8 lg:w-36 bg-gradient-to-r from-red-500 via-red-500 to-transparent z-10"></div>

            <div
              ref={scrollRef}
              className="flex space-x-2 sm:space-x-3 lg:space-x-4 overflow-x-auto pb-4 px-2 sm:px-4 scrollbar-hide"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {/* Double the categories for infinite scroll effect */}
              {[...categories, ...categories].map((category, index) => (
                <div
                  key={`${category.name}-${index}`}
                  className="flex-shrink-0 w-40 sm:w-48 lg:w-56 xl:w-64 h-28 sm:h-32 lg:h-36 xl:h-44 rounded-2xl sm:rounded-3xl overflow-hidden transition-transform duration-300 hover:scale-105"
                >
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Right blur gradient */}
            <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-8 lg:w-36 bg-gradient-to-l from-red-500 via-red-500/90 to-transparent z-10"></div>
          </div>
        </div>
      </div>

      {/* Yellow banner at bottom */}
      <div className="left-0 right-0 bg-dil-yellow py-1.5 sm:py-2 lg:py-3 overflow-hidden whitespace-nowrap">
        <div className="animate-marquee inline-block">
          <span className="text-sm sm:text-base lg:text-lg font-bold mr-3 sm:mr-4">
            READY TO EAT!
          </span>
          <span className="text-sm sm:text-base lg:text-lg font-bold mr-3 sm:mr-4">
            READY TO REGENERATE IN 2 MINUTES!
          </span>
          <span className="text-sm sm:text-base lg:text-lg font-bold mr-3 sm:mr-4">
            READY TO COOK!
          </span>
          <span className="text-sm sm:text-base lg:text-lg font-bold mr-3 sm:mr-4">
            READY TO EAT!
          </span>
          <span className="text-sm sm:text-base lg:text-lg font-bold mr-3 sm:mr-4">
            READY TO REGENERATE IN 2 MINUTES!
          </span>
          <span className="text-sm sm:text-base lg:text-lg font-bold mr-3 sm:mr-4">
            READY TO COOK!
          </span>
          <span className="text-sm sm:text-base lg:text-lg font-bold mr-3 sm:mr-4">
            READY TO EAT!
          </span>
          <span className="text-sm sm:text-base lg:text-lg font-bold mr-3 sm:mr-4">
            READY TO REGENERATE IN 2 MINUTES!
          </span>
        </div>
        <div className="animate-marquee inline-block absolute">
          <span className="text-sm sm:text-base lg:text-lg font-bold mr-3 sm:mr-4">
            READY TO EAT!
          </span>
          <span className="text-sm sm:text-base lg:text-lg font-bold mr-3 sm:mr-4">
            READY TO REGENERATE IN 2 MINUTES!
          </span>
          <span className="text-sm sm:text-base lg:text-lg font-bold mr-3 sm:mr-4">
            READY TO COOK!
          </span>
          <span className="text-sm sm:text-base lg:text-lg font-bold mr-3 sm:mr-4">
            READY TO EAT!
          </span>
          <span className="text-sm sm:text-base lg:text-lg font-bold mr-3 sm:mr-4">
            READY TO REGENERATE IN 2 MINUTES!
          </span>
          <span className="text-sm sm:text-base lg:text-lg font-bold mr-3 sm:mr-4">
            READY TO COOK!
          </span>
          <span className="text-sm sm:text-base lg:text-lg font-bold mr-3 sm:mr-4">
            READY TO EAT!
          </span>
          <span className="text-sm sm:text-base lg:text-lg font-bold mr-3 sm:mr-4">
            READY TO REGENERATE IN 2 MINUTES!
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
