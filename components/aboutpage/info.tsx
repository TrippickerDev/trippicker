import Image from "next/image";

export const Info = () => {
  return (
    <div
      className="h-auto bg-contain bg-no-repeat bg-center w-full py-16 px-6"
      style={{ backgroundImage: "url('/bg.png')" }}
    >
      <div className="flex flex-col items-center mx-auto  max-w-6xl">
        {/* Section 1 */}
        <div className="flex flex-col md:flex-row justify-between items-center w-full">
          <div className="md:max-w-lg text-center md:text-left">
            <h2 className="text-trip-blue text-lg md:text-xl font-semibold">
              Our Mission
            </h2>
            <h3 className="text-[#6E559D] text-sm md:text-base mt-2 leading-relaxed">
              Our mission is to revolutionize the way people move and connect by
              providing reliable, efficient, and innovative transportation and
              logistics solutions. We aim to empower our users by offering not
              only exceptional services but also opportunities to earn and grow
              through our unique Tripper Coin rewards program.
            </h3>
          </div>
          <div className="mt-6 md:mt-0 md:ml-8 flex-shrink-0">
            <Image src={"/aim.png"} width={500} height={500} alt="aim" />
          </div>
        </div>

        {/* Section 2 */}
        <div className="flex flex-col  md:flex-row-reverse justify-between items-center w-full">
          <div className="md:max-w-lg text-center md:text-left">
            <h2 className="text-trip-blue text-lg md:text-xl font-semibold">
              Our Vision
            </h2>
            <h3 className="text-[#6E559D] text-sm md:text-base mt-2 leading-relaxed">
              Our vision is to become the leading platform in transportation and
              logistics, recognized for our commitment to customer satisfaction,
              technological innovation, and community empowerment. We aspire to
              set new standards in the industry, making every journey and
              delivery a seamless and rewarding experience.
            </h3>
          </div>
          <div className="mt-6 md:mt-0 md:ml-8 flex-shrink-0">
            <Image src={"/flag.png"} width={500} height={500} alt="" />
          </div>
        </div>

        {/* Section 3 */}
        <div className="flex flex-col md:flex-row justify-between items-center w-full">
          <div className="md:max-w-lg text-center md:text-left">
            <h2 className="text-trip-blue text-lg md:text-xl font-semibold">
              Reliable Solutions
            </h2>
            <h3 className="text-[#6E559D] text-sm md:text-base mt-2 leading-relaxed">
              Reliability is at the core of everything we do. From the moment
              you book a ride or schedule a delivery, you can count on
              Trippicker to deliver prompt, dependable service. Our
              state-of-the-art technology, dedicated customer support, and
              network of experienced drivers and couriers ensure that you always
              have a smooth and hassle-free experience.
            </h3>
          </div>
          <div className="mt-6 md:mt-0 md:ml-8 ">
            <Image src={"/bulb.png"} width={500} height={500} alt="values" />
          </div>
        </div>
      </div>
    </div>
  );
};
