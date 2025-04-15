
import React, { useEffect, useRef } from 'react';
import { Button } from './ui/button';
import { Star } from 'lucide-react';

const categories = [
  {
    name: "Fresh Produce",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    name: "Dairy & Cheese",
    image: "https://images.unsplash.com/photo-1559598467-f8b76c8155d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    name: "Meat & Poultry",
    image: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    name: "Seafood",
    image: "https://images.unsplash.com/photo-1510130387422-82bed34b37e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    name: "Bakery Items",
    image: "https://images.unsplash.com/photo-1517433367423-c7e5b0f35086?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  }
];

const Hero = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        if (carouselRef.current.scrollLeft >= carouselRef.current.scrollWidth - carouselRef.current.clientWidth) {
          carouselRef.current.scrollLeft = 0;
        } else {
          carouselRef.current.scrollLeft += 1;
        }
      }
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen bg-red-500 overflow-hidden">
      {/* Main content section taking full viewport height */}
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Featured badge */}
          <div className="inline-flex items-center bg-yellow-400 rounded-full px-4 py-1 mb-8">
            <Star className="h-5 w-5 mr-2 text-white fill-yellow-500" />
            <span className="font-medium">12K+ Loved Our Pastries!</span>
          </div>
          
          <h1 className="font-playfair text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight">
            Bringing Sweet
            <br />
            <span className="text-yellow-300">Moments</span> to Life
          </h1>
          
          {/* Action buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Button 
              className="bg-black hover:bg-black/80 text-white px-6 py-3 rounded-full text-lg"
            >
              Order Now
            </Button>
            <Button 
              variant="outline" 
              className="bg-transparent border-white text-white hover:bg-white/10 px-6 py-3 rounded-full text-lg"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Food illustrations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[15%] left-[5%] w-24 h-24 opacity-80">
          <img src="/lovable-uploads/14c05084-bfe4-40a7-ab28-f1fa3ae2f61e.png" alt="Bread" className="w-full h-full object-contain" />
        </div>
        <div className="absolute top-[20%] right-[5%] w-24 h-24 opacity-80">
          <img src="/lovable-uploads/14c05084-bfe4-40a7-ab28-f1fa3ae2f61e.png" alt="Pastry" className="w-full h-full object-contain" />
        </div>
        <div className="absolute bottom-[40%] left-[8%] w-20 h-20 opacity-80">
          <img src="/lovable-uploads/14c05084-bfe4-40a7-ab28-f1fa3ae2f61e.png" alt="Cupcake" className="w-full h-full object-contain" />
        </div>
        <div className="absolute top-[60%] right-[10%] w-16 h-16 opacity-80">
          <img src="/lovable-uploads/14c05084-bfe4-40a7-ab28-f1fa3ae2f61e.png" alt="Cookie" className="w-full h-full object-contain" />
        </div>
      </div>

      {/* Curved carousel at bottom */}
      <div className="absolute bottom-16 left-0 right-0 h-64 z-0">
        <div 
          ref={carouselRef}
          className="flex space-x-4 overflow-x-auto pb-4 px-4 carousel-mask scrollbar-hide"
          style={{ 
            scrollBehavior: 'smooth'
          }}
        >
          {categories.map((category, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 w-64 h-44 rounded-3xl overflow-hidden carousel-item"
            >
              <img 
                src={category.image} 
                alt={category.name}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
          {/* Duplicate items for infinite effect */}
          {categories.map((category, index) => (
            <div 
              key={`duplicate-${index}`} 
              className="flex-shrink-0 w-64 h-44 rounded-3xl overflow-hidden carousel-item"
            >
              <img 
                src={category.image} 
                alt={category.name}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Yellow banner at bottom */}
      <div className="absolute bottom-0 left-0 right-0 bg-dil-yellow py-3 overflow-hidden whitespace-nowrap">
        <div className="animate-marquee inline-block">
          <span className="text-lg font-bold mr-4">READY TO EAT!</span>
          <span className="text-lg font-bold mr-4">READY TO REGENERATE IN 2 MINUTES!</span>
          <span className="text-lg font-bold mr-4">READY TO COOK!</span>
          <span className="text-lg font-bold mr-4">READY TO EAT!</span>
          <span className="text-lg font-bold mr-4">READY TO REGENERATE IN 2 MINUTES!</span>
          <span className="text-lg font-bold mr-4">READY TO COOK!</span>
          <span className="text-lg font-bold mr-4">READY TO EAT!</span>
          <span className="text-lg font-bold mr-4">READY TO REGENERATE IN 2 MINUTES!</span>
        </div>
        <div className="animate-marquee inline-block absolute">
          <span className="text-lg font-bold mr-4">READY TO EAT!</span>
          <span className="text-lg font-bold mr-4">READY TO REGENERATE IN 2 MINUTES!</span>
          <span className="text-lg font-bold mr-4">READY TO COOK!</span>
          <span className="text-lg font-bold mr-4">READY TO EAT!</span>
          <span className="text-lg font-bold mr-4">READY TO REGENERATE IN 2 MINUTES!</span>
          <span className="text-lg font-bold mr-4">READY TO COOK!</span>
          <span className="text-lg font-bold mr-4">READY TO EAT!</span>
          <span className="text-lg font-bold mr-4">READY TO REGENERATE IN 2 MINUTES!</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
