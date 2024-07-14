import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="px-[150px] py-[3%]">
      <div className="mb-2">
        <ul className="flex md:text-lg text-[#0D7685] text-sm space-x-8 justify-start">
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
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
      <div className="border-b-2 border-[#0D7685] w-[100%] h-1 mb-4"></div>
      <div className="flex justify-between items-center">
        <p className="text-[#0D7685] text-xs md:text-sm">
          Copyright © 2024 JPN. All Rights Reserved.
        </p>
        <img
          className="w-[60px] md:w-[120px] object-cover"
          src="/jpn.png"
          alt="Logo"
        />
      </div>
    </div>
  );
};

export default Footer;
