import React from "react";

const Props = () => {
  return (
    <div className="flex flex-col">
      {/* First Section */}
      <div className="flex flex-col md:flex-row bg-[#050505] text-white overflow-hidden">
        <img
          src="./prop1.jpg"
          alt="First Section Image"
          className="w-full md:w-1/2 h-64 md:h-[400px] object-cover"
        />
        <div className="md:w-1/2 bg-white pr-[150px]">
          <div className="flex flex-col text-left justify-center bg-[#0D7685] h-[400px] px-6">
            <h3 className="text-2xl font-bold mb-4">
              Traditional Japanese culture
            </h3>
            <p className="text-lg">
              such as kimono, tea ceremony, and Yosakoi, as well as subculture
              such as anime, games, and music, are gaining popularity around the
              world. We want to further spread these in Las Vegas so that people
              of all races can learn about the charm of Japan.
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
            <h3 className="text-2xl font-bold mb-4">
              Traditional Japanese culture
            </h3>
            <p className="text-lg">
              such as kimono, tea ceremony, and Yosakoi, as well as subculture
              such as anime, games, and music, are gaining popularity around the
              world. We want to further spread these in Las Vegas so that people
              of all races can learn about the charm of Japan.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Props;
