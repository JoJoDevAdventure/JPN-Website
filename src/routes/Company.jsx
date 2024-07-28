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
          HOW IT BEGAN
        </h1>
        <p className="mb-8">
          Our story begins at a friend's birthday party in Vegas. It was there
          that we met, and through conversation, discovered we both shared an
          entrepreneurial spirit. The more we talked, the clearer it became:
          this wasn't just a party chat. We were onto something big. The night
          that started as a simple celebration quickly turned into the beginning
          of an exciting new venture. So, in the heart of Vegas, our partnership
          was born.
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
                Seasoned Business Leader with 15+ Years' Experience. Drove growth at
                a group companies of a well-known Tokyo Stock Exchange listed
                service industry leaders. Fluent and have strong writing skills in
                English and Japanese.
              </p>
            </div>
            <img
              src="./arts.jpg"
              alt="Aritomo Hirano"
              className="w-1/3 h-auto object-cover"
            />
          </div>

          {/* Team Member 2 */}
          <div className="flex items-left md:items-center flex-col-reverse text-left justify-start md:flex-row">
            <div className="flex-1 text-left pr-4">
              <h3 className="text-2xl md:text-3xl font-bold mb-2 text-[#0D7685]">
                Hidenori Araki
              </h3>
              <p className="text-lg md:text-xl text-gray-600 min-h-[3rem]">
                Managing Member
              </p>
              <p className="text-m md:text-m text-gray-600 min-h-[9rem]">
                Passionate Business Development & Marketing professional experienced
                in providing eclectic range of solutions to blue chip companies from
                patented mechanical tools to advanced SaaS platforms. Second
                generation Japanese-American who now calls Las Vegas home.
              </p>
            </div>
            <img
              src="./hide.jpg"
              alt="Hidenori Araki"
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