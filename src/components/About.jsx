import React from "react";

const About = () => {
  return (
    <div className="bg-[#DCDCDC]">
      <div className="flex flex-col md:flex-row items-center py-8 md:mx-[150px]">
        <div className="md:w-1/2 p-4 md:pr-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[#0D7685]">
            The Message <br /> We Want to Convey
          </h2>
          <p className="text-base md:text-lg">
            We aim to support the expansion of{" "}
            <strong>Japanese companies</strong> into Las Vegas, a mecca for
            entertainment and the service industry, and to promote the
            development of <strong>Japanese businesses</strong> operating events
            and businesses locally to enhance the presence of{" "}
            <strong>Japanese culture</strong> in Las Vegas.
          </p>
        </div>
        <div className="md:w-1/2 p-4 md:pl-8">
          <img
            src="./right.png"
            alt="About Image"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
