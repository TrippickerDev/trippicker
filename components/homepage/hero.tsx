"use client";
import Image from "next/image";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

export const Hero = () => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate="visible"
      transition={{ delay: 0.1, duration: 0.5 }}
      className="my-10 flex-col flex gap-y-8"
    >
      <div className="flex flex-col md:flex-row gap-x-4 gap-y-4 items-center justify-around w-full mx-auto ">
        <div className="flex-shrink-0">
          <Image
            src={"/people.png"}
            height={470}
            width={450}
            alt="hero"
            className="shrink-0"
          />
        </div>
        <div className="flex flex-col gap-y-5">
          <h1 className=" text-2xl md:text-3xl  lg:text-5xl font-bold text-trip-blue">
            Transportation <br className="hidden lg:block" />
            <span className="text-trip-blue-secondary">& logistics</span>
          </h1>
          <h2 className="text-[#6d6d6d]  text-wrap  text-justify text-sm md:text-sm lg:text-lg">
            Our platform streamlines your transportation and logistics needs,{" "}
            <br className="hidden lg:block" />
            ensuring smooth and stress-free journeys and deliveries.
          </h2>
        </div>
      </div>
      <div className="flex  flex-col gap-4 md:flex-row-reverse items-center justify-around w-full mx-auto ">
        <div className="flex-shrink-0">
          <Image src={"/car.png"} height={470} width={450} alt="hero" />
        </div>
        <div className="flex flex-col gap-y-5">
          <h1 className=" text-2xl md:text-3xl  lg:text-5xl font-bold text-trip-blue">
            Earn
            <span className="text-trip-blue-secondary"> as you drive</span>
          </h1>
          <h2 className="text-[#6d6d6d]  text-wrap  text-justify text-sm md:text-sm lg:text-lg">
            Discover a revolutionary way to earn rewards effortlessly{" "}
            <br className="hidden lg:block" /> with Tripper Coin, our motion
            mining token that lets you <br className="hidden lg:block" />{" "}
            accumulate value as you drive, ride, or book through our{" "}
            <br className="hidden lg:block" /> platform.
          </h2>
          <div className="flex justify-start">
            <Button
              asChild
              className="bg-trip-blue hover:bg-white text-white rounded-lg   border hover:border-trip-blue   hover:text-trip-blue"
            >
              <Link href={"/driver"}>Become a driver</Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="flex md:flex-row flex-col gap-4 items-center justify-around w-full mx-auto ">
        <div className="flex-shrink-0">
          <Image src={"/hero.png"} height={470} width={450} alt="hero" />
        </div>
        <div className="flex flex-col gap-y-5">
          <h1 className=" text-2xl md:text-3xl  lg:text-5xl font-bold text-trip-blue">
            Join Our {""}
            <span className="text-trip-blue-secondary">Community</span>
          </h1>
          <h2 className="text-[#6d6d6d]  text-wrap  text-justify text-sm md:text-sm lg:text-lg">
            Join our community and become part of a vibrant{" "}
            <br className="hidden lg:block" /> network where you can connect
            with like-minded <br className="hidden lg:block" /> individuals,
            share your experiences and <br className="hidden lg:block" />
            knowledge, and grow together.
          </h2>
        </div>
      </div>
    </motion.div>
  );
};
