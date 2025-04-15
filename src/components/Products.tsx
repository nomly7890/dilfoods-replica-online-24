
import React from 'react';

const categories = [
  {
    name: "Fresh Produce",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description: "Farm-fresh vegetables and fruits sourced directly from verified farmers."
  },
  {
    name: "Dairy & Cheese",
    image: "https://images.unsplash.com/photo-1626278664285-f796b9ee7806?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description: "Premium quality dairy products including a variety of local and imported cheeses."
  },
  {
    name: "Meat & Poultry",
    image: "https://images.unsplash.com/photo-1615937722923-67f6deaf2cc9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description: "High-quality, fresh meat and poultry products following strict safety standards."
  },
  {
    name: "Seafood",
    image: "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description: "Fresh seafood options from sustainable sources, delivered in optimal condition."
  },
  {
    name: "Bakery Items",
    image: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description: "Freshly baked bread, pastries, and other bakery essentials for your establishment."
  },
  {
    name: "Dry Goods & Staples",
    image: "https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description: "Essential cooking ingredients, pulses, rice, and other pantry necessities."
  }
];

const Products = () => {
  return (
    <section className="py-16 bg-dil-lightgray" id="products">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dil-darkblue mb-4">
            Our Product Categories
          </h2>
          <p className="text-xl text-dil-gray max-w-3xl mx-auto">
            Explore our wide range of high-quality food products for your business
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-dil-darkblue mb-2 group-hover:text-dil-blue transition-colors">
                  {category.name}
                </h3>
                <p className="text-dil-gray">
                  {category.description}
                </p>
                <button className="mt-4 text-dil-blue font-medium flex items-center group-hover:text-dil-orange transition-colors">
                  View Products 
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
