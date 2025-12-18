"use client";
import { platforms } from "@/data"

const TechStackComponent = () => {
  const defaultClasses= "w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-24 xl:h-20 object-contain";

  return (
    <div className="w-full py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#000319' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-10 sm:mb-14 md:mb-16">
          <span className="bg-[#CBACF9] bg-clip-text text-transparent">
            WE&apos;RE EXPERTS
          </span>{" "}
          <span className="text-white">IN THE LATEST PLATFORMS</span>
        </h2>

        {/* Platform Grid - Flex wrap layout */}
        <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-10 md:gap-12 lg:gap-12">
          {platforms.map((platform) => (
            <div
              key={platform.name}
              className="hover:opacity-80 hover:scale-110 transition-all duration-300"
            >
              <img
                src={platform.src}
                alt={platform.name}
                // className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-24 xl:h-20 object-contain"
                className={`${defaultClasses} ${platform.className}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStackComponent;