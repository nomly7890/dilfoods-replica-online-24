import React from "react";

const processSteps = [
  {
    number: "01",
    title: "Download the App",
    description:
      "Get started by downloading our mobile app for a smoother and faster experience. Available on both iOS and Android.",
  },
  {
    number: "02",
    title: "Place Your Order",
    description:
      "Easily submit your requirements through our intuitive platform or mobile app. Just a few taps and you're done!",
  },
  {
    number: "03",
    title: "Order Processing",
    description:
      "Our team gets to work immediately, carefully preparing your order with attention to every detail.",
  },
  {
    number: "04",
    title: "Quality Check",
    description:
      "Every item goes through a strict quality check to make sure it meets our premium standards before it reaches you.",
  },
  {
    number: "05",
    title: "Delivery",
    description:
      "Enjoy fast, reliable delivery right to your doorstep—at your convenience.",
  },
];

const Process = () => {
  return (
    <section className="py-16 bg-white" id="process">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-dil-darkblue mb-4">
            How It Works
          </h2>
          <p className="text-xl text-dil-gray max-w-3xl mx-auto">
            A seamless process designed to make food supply management
            effortless.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-dil-lightblue transform -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="relative z-10 animate-float"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 h-full flex flex-col">
                  <div className="w-12 h-12 rounded-full bg-dil-blue text-white flex items-center justify-center text-xl font-bold mb-4 mx-auto">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold text-dil-darkblue mb-3 text-center">
                    {step.title}
                  </h3>
                  <p className="text-dil-gray text-center text-sm flex-grow">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
