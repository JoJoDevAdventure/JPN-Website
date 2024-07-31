import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top when component mounts
  }, []);

  return (
    <nav className="fixed top-0 w-full bg-white text-black pt-2 pb-2 md: flex justify-between items-center shadow px-4 md:px-[150px] z-50">
      {/* Menu icon for mobile */}
      <div className="block md:hidden">
        <button onClick={toggleMenu} className="text-black ml-4">
          {isMenuOpen ? (
            <span className="text-3xl">&#10005;</span>
          ) : (
            <span className="text-3xl">&#9776;</span>
          )}
        </button>
      </div>

      {/* Logo on the right for mobile */}
      <div className="flex items-center justify-end md:hidden">
        <img className="w-24" src="./jpn.png" alt="Logo" />
      </div>

      {/* Logo and navigation links for desktop */}
      <div className="hidden md:flex items-center justify-between w-full space-x-2">
        {/* Logo on the left */}
        <div className="flex items-center">
          <img className="w-28" src="./jpn.png" alt="Logo" />
        </div>

        {/* Navigation links */}
        <ul className="flex mt-4 md:mt-0 md:flex md:text-lg md:font-regular items-center space-x-8 justify-end">
          <li className="underline-offset hover:text-[#0D7685]">
            <NavLink exact to="/">
              Home
            </NavLink>
          </li>
          <li className="underline-offset hover:text-[#0D7685]">
            <NavLink to="/services">Services</NavLink>
          </li>
          <li className="underline-offset hover:text-[#0D7685]">
            <NavLink to="/our-work">Our Work</NavLink>
          </li>
          <li className="underline-offset hover:text-[#0D7685]">
            <NavLink exact to="/company">
              Company
            </NavLink>
          </li>
          <li className="underline-offset hover:text-[#0D7685]">
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>

      {/* Side menu */}
      {isMenuOpen && (
        <div
          className="fixed top-0 left-0 h-screen w-full bg-black/70"
          onClick={toggleMenu}
        >
          <div className="absolute top-0 left-0 h-screen w-60 bg-[#0D7685] p-8 z-50">
            <ul className="text-white">
              <li>
                <button onClick={toggleMenu} className="text-white mb-4">
                  <span className="text-3xl">&#10005;</span>
                </button>
              </li>
              <li className="mb-4">
                <NavLink
                  exact
                  to="/"
                  activeClassName="text-[#0D7685] font-bold"
                  onClick={toggleMenu}
                >
                  Home
                </NavLink>
              </li>
              <li className="mb-4">
                <NavLink
                  to="/services"
                  activeClassName="text-[#0D7685] font-bold"
                  onClick={toggleMenu}
                >
                  Services
                </NavLink>
              </li>
              <li className="mb-4">
                <NavLink
                  to="/our-work"
                  activeClassName="text-[#0D7685] font-bold"
                  onClick={toggleMenu}
                >
                  Our Work
                </NavLink>
              </li>
              <li className="mb-4">
                <NavLink exact to="/company">
                  Company
                </NavLink>
              </li>
              <li className="mb-4">
                <NavLink
                  to="/contact"
                  activeClassName="text-[#0D7685] font-bold"
                  onClick={toggleMenu}
                >
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
