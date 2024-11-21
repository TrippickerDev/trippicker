import React from "react";

const aboutArray = [
  {
    title: "Enhanced Earnings through Cryptocurrency:",
    text: "Drivers can increase their earnings through the cryptocurrency mining feature, which operates while they are on the road.",
  },
  {
    title: "Comprehensive Support:",
    text: "Trippicker offers robust support for drivers, including onboarding assistance, training, and ongoing customer service, ensuring a smooth and profitable experience.",
  },
  {
    title: "Innovative Approach to Ride-Hailing:",
    text: "By integrating traditional ride-hailing with additional services like logistics and cryptocurrency mining, Trippicker stands out in the market, offering a cutting-edge solution for modern transportation needs.",
  },
  {
    title: "Multiple Services in One:",
    text: "Trippicker not only offers ride-hailing services but also logistics and cryptocurrency mining, providing a unique combination of benefits to users.",
  },
  {
    title: "Income Opportunities for Drivers:",
    text: "Trippicker focuses on attracting drivers by providing various earning opportunities, including ride fares, logistics deliveries, and cryptocurrency mining during rides.",
  },
  {
    title: "User-Friendly App Interface:",
    text: "The Trippicker app is designed with a user-friendly interface that makes it easy for drivers to navigate, manage rides, track earnings, and access support.",
  },
];

export const About = () => {
  return (
    <section className="bg-[#0a0a0a]  text-white px-4 md:px-8 py-12 lg:px-16 my-16">
      {/* About Points */}
      <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
        {aboutArray.map((item, index) => (
          <div
            key={index}
            className="flex flex-col p-6 bg-transparent rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
          >
            <div className="flex items-center mb-4">
              <div className="min-h-6 min-w-6  bg-trip-blue rounded-full flex items-center justify-center">
                <span className="min-h-3 min-w-3 rounded-full bg-white"></span>
              </div>
              <h2 className=" text-base md:text-lg lg:text-xl  font-semibold ml-4 text-white">
                {item.title}
              </h2>
            </div>
            <p className=" text-xs md:text-sm lg:text-base  text-gray-300">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
