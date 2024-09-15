import React from "react";

const Props = () => {
  return (
    <div>
      <div className="flex flex-col md:hidden">
        {/* First Section */}
        <div className="relative bg-[#0D7685] text-white overflow-hidden">
          <img
            src="./prop1.jpg"
            alt="First Section Image"
            className="w-full h-64 md:h-[400px] object-cover opacity-50"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0D7685] bg-opacity-75 text-center px-6 py-6 md:py-12">
            <div className="text-white">
              <h3 className="text-xl md:text-3xl font-bold mb-4">
                Japanese culture
              </h3>
              <p className="text-sm md:text-lg">
                such as kimono, tea ceremony and traditional arts, as well as subculture
                such as anime, games, and music, are gaining popularity around
                the world. We want to further spread these in Las Vegas so that
                people from all backgrounds can learn about the charm of Japan.
              </p>
            </div>
          </div>
        </div>

        {/* Second Section */}
        <div className="relative bg-[#0D7685] text-white overflow-hidden">
          <img
            src="./prop2.jpg"
            alt="Second Section Image"
            className="w-full h-64 md:h-[400px] object-cover opacity-50"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0D7685] bg-opacity-75 text-center px-6 py-6 md:py-12">
            <div className="text-white">
              <h3 className="text-xl md:text-3xl font-bold mb-4">
                Japanese food and beverage
              </h3>
              <p className="text-sm md:text-lg">
                is highly regarded all over the world. We want to further spread
                the appeal of Japanese food and beverage in Las Vegas so that
                people of all races can enjoy Japanese food culture.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop */}
      <div className="flex-col hidden md:flex">
        {/* First Section */}
        <div className="flex flex-col md:flex-row bg-[#DCDCDC] text-white overflow-hidden">
          <img
            src="./prop1.jpg"
            alt="First Section Image"
            className="w-full md:w-1/2 h-64 md:h-[400px] object-cover bg-gray-700"
          />
          <div className="md:w-1/2 bg-[#] pr-[150px]">
            <div className="flex flex-col text-left justify-center bg-[#0D7685] h-[400px] px-6">
              <h3 className="text-3xl font-bold mb-4">
                Japanese culture
              </h3>
              <p className="text-lg">
              such as kimono, tea ceremony and traditional arts, as well as subculture
              such as anime, games, and music, are gaining popularity around
                the world. We want to further spread these in Las Vegas so that
                people from all backgrounds can learn about the charm of Japan.
              </p>
            </div>
          </div>
        </div>

        {/* Second Section */}
        <div className="flex flex-col md:flex-row-reverse bg-white text-white overflow-hidden">
          <img
            src="./prop2.jpg"
            alt="Second Section Image"
            className="w-full md:w-1/2 h-64 md:h-[400px] object-cover"
          />
          <div className="md:w-1/2 bg-white pl-[150px]">
            <div className="flex flex-col text-left justify-center bg-[#0D7685] h-[400px] px-6">
              <h3 className="text-3xl font-bold mb-4">
                Japanese food and beverage
              </h3>
              <p className="text-lg">
                is highly regarded all over the world. We want to further spread
                the appeal of Japanese food and beverage in Las Vegas so that
                people of all races can enjoy Japanese food culture.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Props;
