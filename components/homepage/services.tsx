"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

const serviceArray = [
  {
    title: "Book a ride",
    src: "ride.png",
    info: "On your way to your destination in comfort and style. Reliable, fast, and affordable—your ride, your way!",
  },
  {
    title: "Dispatch & Logistics",
    src: "logic.png",
    info: "Our Dispatch & Logistics services cater to the unique needs of both businesses and individuals. Whether it's small packages or large shipments, our fleet of vans, trucks, and motorbikes is fully equipped to handle it all.",
  },
  {
    title: "Book a date",
    src: "date.png",
    info: "Make your next date unforgettable. Use Trippicker to plan your date night in style. From romantic dinners to weekend getaways, we'll take care of the ride so you can focus on the moments that matter.",
  },
  {
    title: "Oba Marketplace",
    src: "oba.png",
    info: "Shop local, live global. Discover fresh produce, handmade goods, and authentic finds at Oba Market.",
  },
  {
    title: "Token mining",
    src: "token.png",
    info: "Ride and mine crypto at the same time. With Trippicker, you can earn cryptocurrency tokens on every ride.",
  },
  {
    title: "Games",
    src: "games.png",
    info: "Gaming on the go. Stay entertained while you wait. Trippicker offers a range of games to pass the time—play, have fun, and make every moment exciting.",
  },
];

export const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  // Motion variants for staggered animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Time between card animations
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 75 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      ref={ref}
      className="my-16 flex flex-col items-center justify-center gap-y-6 px-4 md:px-8 lg:px-12"
      id="services"
    >
      {/* Section Header */}
      <h1 className="text-trip-blue text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center">
        Our Services
      </h1>
      <h2 className="text-wrap text-trip-blue-secondary text-center font-medium text-base md:text-lg lg:text-xl max-w-2xl mx-auto">
        Trip Picker offers a comprehensive suite of logistics and other
        services, designed with your convenience in mind.
      </h2>

      {/* Services Grid */}
      <motion.div
        className="w-full mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        {/* Dynamically Render Service Cards */}
        {serviceArray.map((service, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="flex flex-col text-left bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 ease-in-out"
          >
            <div className="flex items-center justify-center">
              <Image
                src={`/${service.src}`}
                width={400}
                height={400}
                alt={service.title}
                className="rounded-md mb-4"
              />
            </div>
            <h3 className="text-trip-blue text-lg md:text-xl font-semibold">
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm md:text-base mt-2">
              {service.info}
            </p>
            <Link href={"/about"} className="text-trip-blue font-medium mt-5">
              Read more...
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
