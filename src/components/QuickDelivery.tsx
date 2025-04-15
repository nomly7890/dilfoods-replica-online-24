import React from "react";

const QuickDelivery = () => {
  return (
    <section className="py-16 bg-yellow-400" id="quick-delivery">
      <div className="container mx-auto ">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-7/12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-6">
              Perfect for 10-Minute Deliveries!
            </h2>
            <p className="text-lg text-black mb-8">
              Our products regenerate in just 2 minutes, making them ideal for
              quick commerce platforms and fast-food operations.
            </p>

            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-red-600 rounded-full mr-3"></div>
                <span className="text-lg font-medium text-black">
                  High Quality
                </span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-red-600 rounded-full mr-3"></div>
                <span className="text-lg font-medium text-black">
                  Fast Preparation
                </span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-red-600 rounded-full mr-3"></div>
                <span className="text-lg font-medium text-black">
                  Great Taste
                </span>
              </div>
            </div>
          </div>

          <div className="lg:w-1/3">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="/lovable-uploads/Generated Image April 15, 2025 - 10_23PM.jpeg"
                alt="Food preparation for quick delivery"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickDelivery;
