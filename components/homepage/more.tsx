import Image from "next/image";

const moreArray = [
  { title: "Pharmaceutical", src: "more.png" },
  { title: "Meet new friends and chat", src: "more2.png" },
  { title: "Send & receive packages from overseas", src: "more3.png" },
];

export const More = () => {
  return (
    <div className="my-20 flex flex-col items-center justify-center px-4 md:px-8 lg:px-12">
      {/* Header section */}
      <div className="flex flex-row justify-between w-full">
        <h1 className="text-base md:text-lg lg:text-xl font-medium">
          More you can do with Trip Picker
        </h1>
        <h2 className="text-trip-blue cursor-pointer font-medium">See More</h2>
      </div>

      {/* Content section */}
      <div className="flex items-center  my-10 justify-center w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {moreArray.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center   transition-transform transform hover:scale-105"
            >
              {/* Image */}
              <Image
                src={`/${item.src}`}
                alt={item.title}
                className="object-contain"
                height={300}
                width={300}
              />

              <h3 className="text-sm md:text-base lg:text-lg font-medium text-center">
                {item.title}
              </h3>
              <h3 className="text-trip-blue cursor-pointer text-left text-xs md:text-sm lg:text-base ">
                Read More...
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
