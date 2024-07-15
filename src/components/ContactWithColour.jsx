import React from "react";
import { NavLink } from "react-router-dom";

const ContactWithColour = () => {
  return (
    <div className="bg-[#0D7685] bg-cover bg-center w-screen h-[300px] md:h-[300px] mt-[120px] text-center flex flex-col items-center justify-center mb-8">
      <div className="h-[250px] w-[400px] md:w-[500px] bg-[#0D7685] justify-between items-center py-6 lg:py-10 px-4 lg:px-10 flex flex-col text-white">
        <h2 className="text-2xl font-medium"> Want To Know More ? </h2>
        <p className="font-light w-[80%] md:w-full">
          {" "}
          Get in touch with us today for further details. We're here to answer
          any questions you may have!{" "}
        </p>
        <div className="flex text-center gap-10 justify-center items-center">
          <p className="font-light"> lasvegas@jpn-ent.net</p>
          <NavLink
            to="/contact"
            className="bg-white hover:bg-transparent hover:text-white text-[#0D7685] font-semibold py-2 px-4 border-[#ffffff] border-2  "
          >
            Contact Us
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ContactWithColour;
