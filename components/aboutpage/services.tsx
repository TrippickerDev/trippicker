import Image from "next/image";

// Array of services
const services = [
  {
    id: 1,
    title: "Book a Ride",
    description:
      "Trippicker is a premier provider of logistics and transportation services focused on safety, convenience, and reliability. Whether you need a quick ride across town or a longer journey, our ride-hailing service ensures you reach your destination comfortably and on time.",
    image: "/car1.png",
  },
  {
    id: 2,
    title: "Dispatch & Logistics",
    description:
      "Our delivery service ensures your packages are delivered safely and quickly. With our real-time tracking system, you'll always know where your package is and when it will arrive.",
    image: "/bike.png",
  },
  {
    id: 3,
    title: "Cryptocurrency & Token Mining",
    description:
      "As a leading provider of logistics and transportation services, Trippicker prioritizes safety, innovation, and financial empowerment. Beyond transportation, we present a unique chance to earn as you ride or use our services with our exclusive Tripper Coin rewards system..",
    image: "/coins.png",
  },
  {
    id: 4,
    title: "Book a Date",
    description:
      "We provider logistics and transportation services, emphasizing safety, convenience, and meaningful connections. With our Book a Date service, you can easily plan the perfect outing, whether it’s for a romantic night, a business meeting, or a casual get-together. .",
    image: "/date.png",
  },
  {
    id: 5,
    title: "Oba Marketplace",
    description:
      "We prioritize safety, accessibility, and seamless marketplace integration. With our Oba Marketplace, you can easily discover and access a wide variety of goods and services available right in your local area.",
    image: "/shop.png",
  },
  {
    id: 6,
    title: "EnterTainment",
    description:
      " Welcome to Trippicker, a premier provider of logistics and transportation services focused on safety, entertainment, and community engagement. Dive into our exciting range of entertainment services which include",
    image: "/joystick.png",
  },
  {
    id: 7,
    title: "Hangout",
    description:
      "With Trippicker's new Hangout section, your social life just got an upgrade! Explore trendy cafes, exciting entertainment spots, and hidden gems around the city, all within the app",
    image: "/marker.png",
  },
  {
    id: 8,
    title: "Event",
    description:
      "Never miss out on the city's hottest events with Trippicker's Event section. From concerts and festivals to local fairs and pop-up shows, you'll have access to the most exciting happenings around you. Stay in the loop, book your tickets, and even schedule a ride—all within one app.",
    image: "/curl.png",
  },
];

export const Service = () => {
  return (
    <section className="flex items-center flex-col justify-center py-16">
      <div className="text-center mb-10">
        <h2 className="text-trip-blue text-lg md:text-xl font-semibold">
          Our Services
        </h2>
        <h3 className="text-[#6E559D] text-sm md:text-base mt-2 leading-relaxed">
          Trip Picker offers a comprehensive suite of logistics services,
          designed with your convenience in mind:
        </h3>
      </div>

      {/* Grid layout for services */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 md:px-0">
        {services.map((service) => (
          <div
            key={service.id}
            className="relative bg-white/10 backdrop-blur-lg border-[rgba(188,153,255,1)] shadow-lg rounded-xl border p-6 max-w-sm mx-auto"
          >
            {/* Circular cutout at the top-right corner */}
            <div className="absolute -top-6 -right-6 bg-purple-500 h-20 w-20 rounded-full flex items-center justify-center text-white font-bold text-lg">
              {service.id}
            </div>

            {/* Card Content */}
            <div className="relative h-[210px] ">
              <h2 className="text-lg font-bold text-trip-blue">
                {service.title}
              </h2>
              <p className="text-trip-blue-secondary text-sm mt-2 z-10">
                {service.description}
              </p>
            </div>

            {/* Bottom image */}
            <div className="mt-6 flex justify-center absolute bottom-0  right-2">
              <Image
                src={service.image}
                alt={service.title}
                width={100}
                height={75}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
