import { motion } from "framer-motion";
import React from "react";
import { slideAnimation } from "../config/motion";

const Header = () => {
  return (
    <div className="bg-[url('/header.jpg')] bg-background bg-cover bg-bottom h-[90vh]">
      <div className="mx-4 md:mx-[50px] lg:mx-[150px] flex flex-col text-center h-full justify-center pt-10">
        <motion.div {...slideAnimation("up", 0.4)} className="">
          <h1 className="text-4xl md:text-6xl lg:text-[72px] text-white">
            Bridging Japan and Las Vegas
          </h1>
        </motion.div>

        <motion.div {...slideAnimation("up", 0.8)} className="">
          <h2 className="text-2xl md:text-3xl lg:text-[38px] text-white mb-4 md:mb-8 lg:mb-16">
            A Gateway to Culture and Connection.
          </h2>
        </motion.div>

        <motion.div {...slideAnimation("up", 1.2)} className="">
          <p className="text-white w-full md:w-[80%] lg:w-[70%] text-center m-auto text-xl">
            Our mission is to bridge the gap between Japan and Las Vegas,
            enriching the world by facilitating Japanese companies' entry into
            the Vegas market, fostering connections between local businesses,
            and promoting Japanese culture and subcultures, all while
            introducing the vibrant world of Washoku cuisine to Las Vegas.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Header;
