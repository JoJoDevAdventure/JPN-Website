import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 w-full bg-white text-black pt-5 pb-5 flex justify-between items-center shadow px-[150px] z-50">
      <div className="flex flex-row space-x-2 justify-between items-center">
        {/* Side menu icon for mobile */}
        <div className="block md:hidden mt-0 self-center">
          <button onClick={toggleMenu} className="text-black ml-4">
            {isMenuOpen ? "" : <span className="text-3xl">&#9776;</span>}
          </button>
        </div>

        {/* Logo on the left */}
        <div className="flex items-center">
          <img className="w-24" src="/jpn.png" alt="Logo" />
        </div>
      </div>

      {/* Navigation links in the middle (visible on large screens) */}
      <ul className="hidden md:flex mt-4 md:mt-0 md:flex-grow md:text-l md:font-regular space-x-8 ml-8 justify-end">
        <li className="underline-offset hover:text-[#0D7685]">
          <NavLink to="/JPN-website">Home</NavLink>
        </li>
        <li className="underline-offset hover:text-[#0D7685]">
          <NavLink to="/JPN-website/services">Services</NavLink>
        </li>
        <li className="underline-offset hover:text-[#0D7685]">
          <NavLink to="/JPN-website/our-work">Our Work</NavLink>
        </li>
        <li className="underline-offset hover:text-[#0D7685]">
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>

      {/* Side menu */}
      {isMenuOpen && (
        <div
          className="fixed top-0 left-0 h-screen w-full bg-black/70"
          onClick={toggleMenu}
        >
          <div className="absolute top-0 left-0 h-[130vh] w-60 bg-gray-900 p-8 z-50">
            <ul className="text-white ">
              <li>
                <button onClick={toggleMenu} className="text-white mb-4">
                  {<span className="text-3xl">&#10005;</span>}
                </button>
              </li>
              <li className="mb-4">
                <NavLink to="/" onClick={toggleMenu}>
                  Home
                </NavLink>
              </li>
              <li className="mb-4">
                <NavLink to="/services" onClick={toggleMenu}>
                  Services
                </NavLink>
              </li>
              <li className="mb-4">
                <NavLink to="/our-work" onClick={toggleMenu}>
                  Our Work
                </NavLink>
              </li>
              <li className="mb-4">
                <NavLink to="/contact" onClick={toggleMenu}>
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
