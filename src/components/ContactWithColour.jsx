import React from "react";
import { NavLink } from "react-router-dom";

const ContactWithColour = () => {
  return (
    <div className="bg-[#0D7685] bg-cover bg-center w-screen h-[300px] md:h-[300px] mt-[120px] text-center flex flex-col items-center justify-center mb-8">
      <div className="h-[250px] w-[90%] md:w-[500px] bg-[#0D7685] justify-between items-center py-6 lg:py-10 px-4 lg:px-10 flex flex-col text-white">
        <h2 className="text-xl md:text-2xl font-medium mb-4">Want To Know More?</h2>
        <p className="text-sm md:text-base font-light mb-4">
          Get in touch with us today for further details. We're here to answer
          any questions you may have!
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <p className="text-sm md:text-base font-light mb-4 md:mb-0">lasvegas@jpn-ent.net</p>
          <NavLink
            to="/JPN-Website/contact"
            className="bg-white hover:bg-transparent hover:text-white text-[#0D7685] font-semibold py-2 px-4 border-[#ffffff] border-2 transition duration-300"
          >
            Contact Us
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ContactWithColour;