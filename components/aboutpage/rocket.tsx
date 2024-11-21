import Image from "next/image";

export const Rocket = () => {
  return (
    <section className="bg-custom-gradient text-white h-auto mt-10 w-full py-16">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-4">
        <div className="md:max-w-lg text-center md:text-left mb-8 md:mb-0">
          <h2 className="text-lg md:text-xl font-semibold">
            But we’re not stopping there.
          </h2>
          <h3 className="text-sm md:text-base mt-2 leading-relaxed">
            At Trip Picker, we’re constantly innovating to bring you even more
            features and services. Soon, you’ll be able to book flights, play
            games, and even explore dating options—all within our app!
          </h3>
        </div>
        <div className="flex-shrink-0 hidden md:block">
          <Image
            src="/rocket.png"
            width={600}
            height={600}
            alt="rocket"
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};
