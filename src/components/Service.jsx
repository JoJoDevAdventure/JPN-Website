import React from "react";
import { NavLink } from "react-router-dom";

const Service = () => {
  return (
    <div className="relative">
      {/* Fixed Images */}
      <img
        src="./top.png"
        alt="Top Right Image"
        className="hidden md:block md:absolute top-0 right-0 w-auto h-auto object-cover"
      />
      <img
        src="./bottom.png"
        alt="Bottom Left Image"
        className=" hidden md:block md:absolute bottom-0 left-0 w-auto h-auto object-cover"
      />
      <div className="relative text-black mx-4 md:mx-[150px] py-4 md:py-[150px]">
        {/* Title */}
        <h1 className="text-2xl md:text-4xl text-[#0D7685] font-bold mb-8 md:mb-16 text-center">
          OUR TOP-TIER SERVICES
        </h1>
        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
          {/* Card 1 */}
          <div className="bg-[rgba(255,255,255,0.2)] items-center md:items-start px-4 py-8 md:px-6 md:py-12 flex flex-col text-center md:text-left justify-between md:h-[500px] transition-transform duration-300 hover:bg-gradient-to-b hover:from-[#0D7685] hover:via-[#0D7685] hover:to-[#0D7685] hover:text-white hover:shadow-lg hover:shadow-[#0D7685] group">
            <img
              src="./i1.svg"
              alt="Service 1"
              className="w-16 h-16 md:w-24 md:h-24 object-cover mb-4 transition-transform duration-500 group-hover:filter group-hover:brightness-0 group-hover:invert"
            />
            <h3 className="text-lg md:text-2xl font-bold mb-2 text-[#0D7685] group-hover:text-white">
              Marketing & consultation
            </h3>
            <p className="text-xs md:text-sm mb-4 group-hover:text-white">
              We offer comprehensive support for companies seeking to establish
              and expand their businesses in Las Vegas. Leveraging our extensive
              experience and knowledge, we tailor solutions to meet the specific
              needs of each client.
            </p>
            <NavLink to="/JPN-Website/services/marketing" className="font-bold text-black group-hover:text-white transition-transform hover:translate-x-2">
              Learn More &rarr;
            </NavLink>
          </div>

          {/* Card 2 */}
          <div className="bg-[rgba(255,255,255,0.2)] items-center md:items-start px-4 py-8 md:px-6 md:py-12 flex flex-col text-center md:text-left justify-between md:h-[500px] transition-transform duration-300 hover:bg-gradient-to-b hover:from-[#0D7685] hover:via-[#0D7685] hover:to-[#0D7685] hover:text-white hover:shadow-lg hover:shadow-[#0D7685] group">
            <img
              src="./i2.svg"
              alt="Service 2"
              className="w-16 h-16 md:w-24 md:h-24 object-cover mb-4 transition-transform duration-300 group-hover:filter group-hover:brightness-0 group-hover:invert"
            />
            <h3 className="text-lg md:text-2xl font-bold mb-2 text-[#0D7685] group-hover:text-white">
              Entertainment
            </h3>
            <p className="text-xs md:text-sm mb-4 group-hover:text-white">
              Enhance your conventions, business conferences, receptions, and
              other gatherings with the vibrant energy and artistry of Japanese
              traditional performances, including Yosakoi, Taiko drumming, Tea
              Ceremony, Shodo calligraphy, Kyudo archery, and more.
            </p>
            <NavLink to="/JPN-Website/services/entertainment" className="font-bold text-black group-hover:text-white transition-transform hover:translate-x-2">
              Learn More &rarr;
            </NavLink>
          </div>

          {/* Card 3 */}
          <div className="bg-[rgba(255,255,255,0.2)] items-center md:items-start px-4 py-8 md:px-6 md:py-12 flex flex-col text-center md:text-left justify-between md:h-[500px] transition-transform duration-300 hover:bg-gradient-to-b hover:from-[#0D7685] hover:via-[#0D7685] hover:to-[#0D7685] hover:text-white hover:shadow-lg hover:shadow-[#0D7685] group">
            <img
              src="./i3.svg"
              alt="Service 3"
              className="w-16 h-16 md:w-24 md:h-24 object-cover mb-4 transition-transform duration-300 group-hover:filter group-hover:brightness-0 group-hover:invert"
            />
            <h3 className="text-lg md:text-2xl font-bold mb-2 text-[#0D7685] group-hover:text-white">
              Other Services
            </h3>
            <p className="text-xs md:text-sm mb-4 group-hover:text-white">
              JPN Entertainment is proud to bring the authentic flavors of
              Japanese cuisine to a diverse audience at various festivals across
              Las Vegas, including Japanese, Asian, and general-interest food
              festivals. We cater to both locals and visitors, offering an
              unforgettable culinary experience.
            </p>
            <NavLink to="/JPN-Website/services/other" className="font-bold text-black group-hover:text-white transition-transform hover:translate-x-2">
              Learn More &rarr;
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
