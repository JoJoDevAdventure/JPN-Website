import React from "react";
import { Helmet } from "react-helmet-async";
import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const Services = () => {
  return (
    <div className="bg-[#CFE4E7] min-h-screen">
      <Helmet>
        <title>Our Services - JPN Entertainment</title>
        <meta
          name="description"
          content="Discover the top-tier services offered by JPN Entertainment, including marketing consultation, entertainment, and more, to help bridge Japan and the US."
        />
        <meta
          name="keywords"
          content="JPN Entertainment, services, marketing consultation, entertainment, Japan, US, business support"
        />
        <meta name="author" content="JPN - Entertainment" />
      </Helmet>
      <NavBar />
      <div className="relative text-black mx-4 md:mx-[150px]">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl text-[#0D7685] font-bold py-8 text-center">
          OUR TOP-TIER SERVICES
        </h1>
        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Card 1 */}
          <div className="bg-white px-4 md:px-8 py-4 md:py-10 flex flex-col text-center items-center justify-between h-full transition-transform duration-300 hover:shadow-lg hover:shadow-[#0D7685] border-2 border-transparent hover:border-[#0D7685] group">
            <img
              src="./i1.svg"
              alt="Service 1"
              className="w-16 h-16 md:w-24 md:h-24 object-cover mb-4 transition-transform duration-500"
            />
            <h3 className="text-2xl font-bold mb-2 text-[#0D7685]">
              Marketing & Consultation
            </h3>
            <p className="text-[14px] md:text-l mb-4 text-left">
              - Market Research and Competitor Analysis Marketing and Sales
              <br />- Strategy Development Local Entity Establishment and
              Operation
              <br />- Support Partnership Building Interpretation and
              Translation service
            </p>
            <NavLink
              to="/services/marketing"
              className="font-bold text-white bg-[#0D7685] w-full py-2 md:py-4 border-[#ffffff] border-2 hover:bg-transparent hover:border-[#0D7685] hover:text-[#0D7685]"
            >
              Learn More &rarr;
            </NavLink>
          </div>

          {/* Card 2 */}
          <div className="bg-white px-4 md:px-8 py-4 md:py-10 flex flex-col text-center items-center justify-between h-full transition-transform duration-300 hover:shadow-lg hover:shadow-[#0D7685] border-2 border-transparent hover:border-[#0D7685] group">
            <img
              src="./i2.svg"
              alt="Service 2"
              className="w-16 h-16 md:w-24 md:h-24 object-cover mb-4 transition-transform duration-500"
            />
            <h3 className="text-2xl font-bold mb-2 text-[#0D7685]">
              Entertainment
            </h3>
            <p className="mb-4 text-left text-[14px] md:text-l">
              - Experienced Professional Performer Teams.
              <br />
              - Comprehensive Support from Planning to Execution.
              <br />
              - For Convention Organizers, Booth Exhibitors, and Meeting
              Planners.
              <br />
            </p>
            <NavLink
              to="/services/entertainment"
              className="font-bold text-white bg-[#0D7685] w-full py-2 md:py-4 border-[#ffffff] border-2 hover:bg-transparent hover:border-[#0D7685] hover:text-[#0D7685]"
            >
              Learn More &rarr;
            </NavLink>
          </div>

          {/* Card 3 */}
          <div className="bg-white px-4 md:px-8 py-4 md:py-10 flex flex-col text-center items-center justify-between h-full transition-transform duration-300 hover:shadow-lg hover:shadow-[#0D7685] border-2 border-transparent hover:border-[#0D7685] group">
            <img
              src="./i3.svg"
              alt="Service 3"
              className="w-16 h-16 md:w-24 md:h-24 object-cover mb-4 transition-transform duration-500"
            />
            <h3 className="text-2xl font-bold mb-2 text-[#0D7685]">
              Other Services
            </h3>
            <p className="mb-4 text-left text-[14px] md:text-l">
              - Culinary Delights such as Sweet Treats, Savoury Snacks and Sake.
              <br />
              - Authentic Flavours, Casual Atmosphere. <br />
              - Present for all your festivals and whenever seeking authentic
              Japanese cuisine. <br />
            </p>
            <NavLink
              to="/services/other"
              className="font-bold text-white bg-[#0D7685] w-full py-2 md:py-4 border-[#ffffff] border-2 hover:bg-transparent hover:border-[#0D7685] hover:text-[#0D7685]"
            >
              Learn More &rarr;
            </NavLink>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;