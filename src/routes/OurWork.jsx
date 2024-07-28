import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const OurWork = () => {
  return (
    <div className="bg-[#CFE4E7] min-h-screen">
      <NavBar />
      <div className="relative text-black mx-4 md:mx-[150px] h-[60vh]">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl text-[#0D7685] font-bold py-8 text-center">
          OUR PAST ACHIEVEMENTS
        </h1>
        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Card 1 */}
          <NavLink to="/JPN-Website/our-work/sakura-ramen" className="group">
            <div className="bg-white flex flex-col items-center justify-center text-center h-full border-2 border-[#0D7685] transition-transform duration-300 hover:bg-[#0D7685] hover:text-white hover:shadow-2xl shadow-color-[0D7685]">
              <img
                src="./sakura.jpg"
                alt="Sakura Ramen"
                className="w-full h-[225px] object-cover mb-4 transition-transform duration-500"
              />
              <h3 className="text-xl md:text-2xl font-bold mb-2 text-[#0D7685] group-hover:text-white">
                SAKURA RAMEN
              </h3>
            </div>
          </NavLink>

        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OurWork;