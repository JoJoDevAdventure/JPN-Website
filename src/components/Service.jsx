import React from "react";

const Service = () => {
  return (
    <div className="relative">
      {/* Fixed Images */}
      <img
        src="./top.png"
        alt="Top Right Image"
        className="absolute top-0 right-0 w-auto h-auto object-cover"
      />
      <img
        src="./bottom.png"
        alt="Bottom Left Image"
        className="absolute bottom-0 left-0 w-auto h-auto object-cover"
      />
      <div className="relative text-black mx-[150px] py-[150px]">
        {/* Title */}
        <h1 className="text-4xl text-[#0D7685] font-bold mb-16 text-center">
        OUR TOP-TIER SERVICES
        </h1>
        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Card 1 */}
          <div className="bg-[rgba(255,255,255,0.2)] px-6 py-12 flex flex-col text-left justify-between h-[500px] transition-transform duration-300 hover:bg-gradient-to-b hover:from-[#0D7685] hover:via-[#0D7685] hover:to-[#0D7685] hover:text-white hover:shadow-lg hover:shadow-[#0D7685] group">
            <img
              src="./i1.svg"
              alt="Service 1"
              className="w-24 h-24 object-cover mb-4 transition-transform duration-500 group-hover:filter group-hover:brightness-0 group-hover:invert"
            />
            <h3 className="text-2xl font-bold mb-2 text-[#0D7685] group-hover:text-white">
              Marketing & consultation
            </h3>
            <p className="mb-4 group-hover:text-white">
              We offer comprehensive support for companies seeking to establish
              and expand their businesses in Las Vegas. Leveraging our extensive
              experience and knowledge, we tailor solutions to meet the specific
              needs of each client.
            </p>
            <button className="font-bold text-black group-hover:text-white transition-transform hover:translate-x-2 text-left">
              Learn More &rarr;
            </button>
          </div>

          {/* Card 2 */}
          <div className="bg-[rgba(255,255,255,0.2)] px-6 py-12 flex flex-col text-left justify-between h-[500px] transition-transform duration-300 hover:bg-gradient-to-b hover:from-[#0D7685] hover:via-[#0D7685] hover:to-[#0D7685] hover:text-white hover:shadow-lg hover:shadow-[#0D7685] group">
            <img
              src="./i2.svg"
              alt="Service 2"
              className="w-24 h-24 object-cover mb-4 transition-transform duration-300 group-hover:filter group-hover:brightness-0 group-hover:invert"
            />
            <h3 className="text-2xl font-bold mb-2 text-[#0D7685] group-hover:text-white">
              Entertainment
            </h3>
            <p className="mb-4 group-hover:text-white">
              Enhance your conventions, business conferences, receptions, and
              other gatherings with the vibrant energy and artistry of Japanese
              traditional performances, including Yosakoi, Taiko drumming, Tea
              Ceremony, Shodo calligraphy, Kyudo archery, and more.
            </p>
            <button className="font-bold text-black group-hover:text-white transition-transform hover:translate-x-2 text-left">
              Learn More &rarr;
            </button>
          </div>

          {/* Card 3 */}
          <div className="bg-[rgba(255,255,255,0.2)] px-6 py-12 flex flex-col text-left justify-between h-[500px] transition-transform duration-300 hover:bg-gradient-to-b hover:from-[#0D7685] hover:via-[#0D7685] hover:to-[#0D7685] hover:text-white hover:shadow-lg hover:shadow-[#0D7685] group">
            <img
              src="./i3.svg"
              alt="Service 3"
              className="w-24 h-24 object-cover mb-4 transition-transform duration-300 group-hover:filter group-hover:brightness-0 group-hover:invert"
            />
            <h3 className="text-2xl font-bold mb-2 text-[#0D7685] group-hover:text-white">
              Other Services
            </h3>
            <p className="mb-4 group-hover:text-white">
              JPN Entertainment is proud to bring the authentic flavors of
              Japanese cuisine to a diverse audience at various festivals across
              Las Vegas, including Japanese, Asian, and general-interest food
              festivals. We cater to both locals and visitors, offering an
              unforgettable culinary experience.
            </p>
            <button className="font-bold text-black group-hover:text-white transition-transform hover:translate-x-2 text-left">
              Learn More &rarr;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
