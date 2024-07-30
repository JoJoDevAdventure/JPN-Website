import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const Company = () => {
  return (
    <div className="bg-white">
      <NavBar />
      <div className="text-black mx-4 md:mx-[25%] py-8">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl text-[#0D7685] font-bold py-8 text-center">
          JPN Entertainment LLC <br />
          HOW IT BEGAN
        </h1>
        <p className="mb-8">
          JPN Entertainment LLC was founded in 2023 by Art Hirano. With a unique
          background spanning both the United States and Japan, Art developed a
          deep understanding of both cultures. During visits to Las Vegas
          beginning in 2018, he was captivated by the city's vibrant energy and
          saw an opportunity to introduce authentic Japanese experiences. This
          vision led to the establishment of JPN Entertainment LLC.
        </p>

        {/* Team Members */}
        <div className="flex flex-col gap-8">
          {/* Team Member 1 */}
          <div className="flex items-left md:items-center flex-col-reverse text-left justify-start md:flex-row">
            <div className="flex-1 text-left pr-4">
              <h3 className="text-2xl md:text-3xl font-bold mb-2 text-[#0D7685]">
                Aritomo Hirano
              </h3>
              <p className="text-lg md:text-xl text-gray-600 min-h-[3rem]">
                Founder & Member
              </p>
              <p className="text-m md:text-m text-gray-600 min-h-[9rem]">
                - Graduate of the Department of Management, Faculty of
                Economics, Gakushuin University <br />
                - Seasoned business leader with 15+ years of experience
                <br />
                - Proven track record of driving growth at multiple companies
                within leading Tokyo Stock Exchange-listed service industry
                groups
                <br />
                - Fluent in English and Japanese with strong writing abilities
                <br />
              </p>
            </div>
            <img
              src="./arts.jpg"
              alt="Aritomo Hirano"
              className="w-1/3 h-auto object-cover"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Company;
