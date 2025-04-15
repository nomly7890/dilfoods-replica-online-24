
import React from 'react';

const testimonials = [
  {
    quote: "Partnering with Dil Foods has transformed our restaurant's supply chain. The quality and reliability are outstanding.",
    author: "Rajiv Mehta",
    position: "Executive Chef, Grand Hyatt",
    image: "https://images.unsplash.com/photo-1548449112-96a38a643324?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
  },
  {
    quote: "Their on-time delivery and diverse product range have made menu planning and execution much easier for our chain of cafes.",
    author: "Priya Sharma",
    position: "Operations Manager, Cafe Delight",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
  },
  {
    quote: "The quality control measures at Dil Foods ensure that we always receive the best ingredients for our 5-star hotel.",
    author: "Arjun Singh",
    position: "F&B Director, Luxury Resort & Spa",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-dil-lightgray" id="testimonials">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dil-darkblue mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-dil-gray max-w-3xl mx-auto">
            Hear from the restaurants, hotels, and catering businesses we serve
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              <div className="mb-6">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-dil-blue opacity-20">
                  <path d="M14.4 24H6C6 17.3726 11.3726 12 18 12V16C13.5817 16 10 19.5817 10 24H14.4C15.9464 24 17.2 25.2536 17.2 26.8V38.4C17.2 39.9464 15.9464 41.2 14.4 41.2H6.8C5.2536 41.2 4 39.9464 4 38.4V26.8C4 25.2536 5.2536 24 6.8 24H14.4ZM38.4 24H30C30 17.3726 35.3726 12 42 12V16C37.5817 16 34 19.5817 34 24H38.4C39.9464 24 41.2 25.2536 41.2 26.8V38.4C41.2 39.9464 39.9464 41.2 38.4 41.2H30.8C29.2536 41.2 28 39.9464 28 38.4V26.8C28 25.2536 29.2536 24 30.8 24H38.4Z" fill="currentColor"/>
                </svg>
              </div>
              
              <p className="text-dil-gray text-lg mb-6 flex-grow">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-dil-darkblue">{testimonial.author}</h4>
                  <p className="text-sm text-dil-gray">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
