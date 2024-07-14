import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const OurWork = () => {
  return (
    <div className="min-h-[80vh]">
      <NavBar />
      <div className="relative text-black mx-[150px] b-[0D7685] min-h-[70vh]">
        {/* Title */}
        <h1 className="text-4xl text-[#0D7685] font-bold py-8 text-center">
          OUR PAST ACHIEVEMENTS
        </h1>
        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Card 1 */}
          <NavLink to="/service1" className="group">
            <div className="bg-white flex flex-col items-center justify-center text-center h-auto border-2 border-[#0D7685] transition-transform duration-300 hover:bg-[#0D7685] hover:text-white hover:shadow-2xl shadow-color-[0D7685]">
              <img
                src="./sakura.jpg"
                alt="Service 1"
                className="w-full h-[225px] object-cover mb-4 transition-transform duration-500"
              />
              <h3 className="text-2xl font-bold mb-2 text-[#0D7685] group-hover:text-white">
                SAKURA RAMEN{" "}
              </h3>
            </div>
          </NavLink>

          {/* Card 2 */}
          <NavLink to="/service2" className="group">
            <div className="bg-white flex flex-col items-center justify-center text-center h-auto border-2 border-[#0D7685] transition-transform duration-300 hover:bg-[#0D7685] hover:text-white hover:shadow-2xl shadow-color-[0D7685]">
              <img
                src="https://via.placeholder.com/150"
                alt="Service 2"
                className="w-full h-[225px] object-cover mb-4 transition-transform duration-500"
              />
              <h3 className="text-2xl font-bold mb-2 text-[#0D7685] group-hover:text-white">
                INSERT WORK HERE
              </h3>
            </div>
          </NavLink>

          {/* Card 3 */}
          <NavLink to="/service3" className="group">
            <div className="bg-white flex flex-col items-center justify-center text-center h-auto border-2 border-[#0D7685] transition-transform duration-300 hover:bg-[#0D7685] hover:text-white hover:shadow-2xl shadow-color-[0D7685]">
              <img
                src="https://via.placeholder.com/150"
                alt="Service 3"
                className="w-full h-[225px] object-cover mb-4 transition-transform duration-500"
              />
              <h3 className="text-2xl font-bold mb-2 text-[#0D7685] group-hover:text-white">
                INSERT WORK HERE
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
