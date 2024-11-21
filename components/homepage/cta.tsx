import Image from "next/image";
import { Button } from "../ui/button";

export const CTA = () => {
  return (
    <div className="my-20 flex flex-col items-center justify-center px-4 md:px-8 lg:px-12">
      <div className="mb-10">
        <h1 className="text-trip-black text-3xl md:text-4xl lg:text-5xl  font-bold mb-4 text-center">
          Download
        </h1>
        <div className="flex flex-row gap-x-4 items-center justify-center">
          <Button className="bg-trip-blue hover:bg-white text-white rounded-full   border hover:border-trip-blue   hover:text-trip-blue">
            User
          </Button>
          <Button className="bg-trip-blue hover:bg-white text-white rounded-full   border hover:border-trip-blue   hover:text-trip-blue">
            Driver/Rider
          </Button>
        </div>
      </div>
      <div className="w-full bg-[#0a0a0a] h-[400px] flex items-center justify-center shadow-lg rounded-xl relative">
        <div className="absolute right-0  top-[-30px] hidden lg:block">
          <Image src={"/hand.png"} height={400} width={300} alt="hand" />
        </div>
        <div className="text-center">
          <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-semibold mb-2">
            All bookings in one app.
          </h1>
          <h2 className="text-gray-300 text-lg md:text-xl lg:text-2xl mb-6">
            Available for iOS and Android devices.
          </h2>

          {/* App Store Buttons */}
          <div className="flex flex-wrap gap-6 justify-center">
            <div className="bg-[rgba(47,49,63,1)] border-white border rounded-xl px-4 py-3 cursor-pointer flex items-center gap-3 hover:bg-[rgba(65,67,85,1)] transition duration-300">
              <Image
                src={"/apple.png"}
                height={30}
                width={30}
                alt="Apple Logo"
              />
              <div className="text-left">
                <h2 className="text-gray-300 text-sm">Download on the</h2>
                <h1 className="text-white text-lg font-bold">App Store</h1>
              </div>
            </div>

            <div className="bg-[rgba(47,49,63,1)] border-white border rounded-xl px-4 py-3 flex cursor-pointer items-center gap-3 hover:bg-[rgba(65,67,85,1)] transition duration-300">
              <Image
                src={"/playstore.png"}
                height={30}
                width={30}
                alt="Google Play Logo"
              />
              <div className="text-left">
                <h2 className="text-gray-300 text-sm">Get it on</h2>
                <h1 className="text-white text-lg font-bold">Google Play</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
