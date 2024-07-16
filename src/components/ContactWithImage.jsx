import React from "react";
import { NavLink } from "react-router-dom";

const ContactWithImage = () => {
  return (
    <div className="bg-[url('/contact.jpg')] bg-cover bg-center w-screen h-[500px] md:h-[500px] mt-[120px] text-center flex flex-col items-center justify-center">
      <div className="h-[250px] w-full md:w-[400px] lg:w-[500px] bg-[#0D7685] mt-10 justify-between items-center py-6 lg:py-10 px-4 lg:px-10 flex flex-col text-white">
        <h2 className="text-xl sm:text-2xl font-medium">Want To Know More?</h2>
        <p className="font-light w-[80%] sm:w-[70%] md:w-full">
          Get in touch with us today for further details. We're here to answer
          any questions you may have!
        </p>
        <div className="flex flex-col sm:flex-row text-center gap-2 sm:gap-10 justify-center items-center mt-4">
          <p className="font-light">lasvegas@jpn-ent.net</p>
          <NavLink
            to="/JPN-Website/contact"
            className="bg-white hover:bg-transparent hover:text-white text-[#0D7685] font-semibold py-2 px-4 border-[#ffffff] border-2"
          >
            Contact Us
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ContactWithImage;
