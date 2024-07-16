import React from "react";
import ContactWithColour from "../../components/ContactWithColour";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";

const Marketing = () => {
  return (
    <div className="bg-white min-h-screen">
      <NavBar />
      <div className="mx-4 md:mx-[150px] mt-12">
        <h1 className="text-3xl md:text-5xl font-bold text-[#0D7685] mb-8 md:mb-12 text-center">
          Consulting and Marketing Services
        </h1>

        <h2 className="text-xl md:text-3xl font-semibold text-[#0D7685] mb-4">
          Market Research and Competitor Analysis
        </h2>
        <p className="mb-6 text-lg md:text-xl">
          We conduct in-depth research and analysis to identify market needs,
          trends, and competitive landscapes in Las Vegas for your services,
          empowering you to craft a business strategy that capitalizes on your
          strengths.
        </p>

        <h2 className="text-xl md:text-3xl font-semibold text-[#0D7685] mb-4">
          Marketing and Sales Strategy Development
        </h2>
        <p className="mb-6 text-lg md:text-xl">
          We clearly define your target audience and develop effective marketing
          and sales strategies. Our recommendations encompass advertising,
          promotions, social media engagement, and event planning, all tailored
          to your unique needs.
        </p>

        <h2 className="text-xl md:text-3xl font-semibold text-[#0D7685] mb-4">
          Local Entity Establishment and Operation Support
        </h2>
        <p className="mb-6 text-lg md:text-xl">
          We provide support for establishing and operating local entities,
          ensuring compliance and efficiency in your business operations.
        </p>

        <h2 className="text-xl md:text-3xl font-semibold text-[#0D7685] mb-4">
          Partnership Building
        </h2>
        <p className="mb-6 text-lg md:text-xl">
          We meticulously research and select potential business partners,
          facilitating optimal matches that align with your company’s goals.
        </p>

        <h2 className="text-xl md:text-3xl font-semibold text-[#0D7685] mb-4">
          Interpretation and Translation Services
        </h2>
        <p className="mb-6 text-lg md:text-xl">
          We offer seamless communication by providing professional
          interpretation and translation services for all your business needs.
        </p>
      </div>
      <ContactWithColour />
      <Footer />
    </div>
  );
};

export default Marketing;