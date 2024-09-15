import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="px-4 md:px-[150px] py-4 md:py-[3%]">
      <div className="mb-2">
        <ul className="flex md:text-lg text-[11px] text-[#0D7685] space-x-3 md:space-x-10 justify-start">
          <li className="duration-300 transition-all ease-in transform hover:-translate-y-2">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="duration-300 transition-all ease-in transform hover:-translate-y-2">
            <NavLink to="/services">Services</NavLink>
          </li>
          <li className="duration-300 transition-all ease-in transform hover:-translate-y-2">
            <NavLink to="/our-work">Our Work</NavLink>
          </li>
          <li className="duration-300 transition-all ease-in transform hover:-translate-y-2">
            <NavLink to="/company">Company</NavLink>
          </li>
          <li className="duration-300 transition-all ease-in transform hover:-translate-y-2">
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul> 
      </div>
      <div className="border-b-2 border-[#0D7685] w-full h-1 mb-4"></div>
      <div className="flex flex-col md:flex-row justify-between items-center">
        <p className="text-[#0D7685] text-xs md:text-sm mb-2 md:mb-0">
        Copyright © JPN Entertainment LLC. All Rights Reserved.
        </p>
        <img
          className="w-24 md:w-32 h-auto object-cover"
          src="./jpn.png"
          alt="Logo"
        />
      </div>
    </div>
  );
};

export default Footer;
