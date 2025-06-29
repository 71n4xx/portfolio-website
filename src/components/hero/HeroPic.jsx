import React from "react";
import { PiHexagonThin } from "react-icons/pi";
import { motion } from "framer-motion";
import { fadeIn, zoom } from "../../framerMotion/variants";

const HeroPic = () => {
  return (
    <motion.div
      variants={zoom("in", 1.4)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0 }}
      className=" h-full flex justify-center items-center"
    >
      <img
        src="/images/hero.png"
        alt="Cristina Cruzat"
        className="w-auto max-h-[450px]"
      />
      <div className="absolute overflow-hidden -z-10 flex justify-center items-center animate-pulse">
        <PiHexagonThin className="w-[500px] max-w-[100vw] md:h-[90%] sm:h-[120%] min-h-[590px] text-yellow blur-md animate-[spin_20s_linear_infinite]" />
      </div>
    </motion.div>
  );
};

export default HeroPic;
