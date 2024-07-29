import React from "react";
import { NavLink } from "react-router-dom";

const Team = () => {
  return (
    <div className="relative mx-[20px] md:mx-[150px] py-[10px]">
      {/* Title */}
      <h1 className="text-4xl md:text-5xl text-[#0D7685] font-bold mb-12 text-center">
        the Mind behind the idea
      </h1>

      {/* Team Cards */}
      <div className="flex gap-12 justify-center items-center">
        {/* Card 1 */}
        <div className="bg-white flex flex-col items-center md:items-right justify-self-center md:justify-self-end text-left w-[80%] md:w-[300px] md:max-w-[400px]">
          <img
            src="./arts.jpg"
            alt="Team Member 1"
            className="w-full h-auto object-cover mb-4"
          />
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
      </div>

      {/* Contact Us Button */}
      <div className="flex justify-center mt-12">
        <NavLink
          to="/JPN-Website/contact"
          className="bg-[#0D7685] text-white px-8 py-3 font-bold transition hover:bg-[#095a65]"
        >
          Contact Us
        </NavLink>
      </div>
    </div>
  );
};

export default Team;
