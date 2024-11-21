import Image from "next/image";

export const Benefits = () => {
  return (
    <section className="my-16 flex flex-col items-center justify-center gap-y-6 px-4 md:px-8 lg:px-12">
      <h1 className="text-trip-blue text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center">
        Benefits
      </h1>
      <h2 className="text-wrap text-trip-blue-secondary text-center font-medium text-base md:text-lg lg:text-xl max-w-3xl mx-auto">
        Trippicker is dedicated to turning every ride into a smooth and
        effortless experience. Explore our features designed to bring you
        convenience, safety, and dependable service with each trip.
      </h2>
      <div>
        <Image src={"/benefit.png"} width={400} height={400} alt="benefit" />
      </div>
    </section>
  );
};
