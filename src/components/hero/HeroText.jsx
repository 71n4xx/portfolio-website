import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const HeroText = () => {
  return (
    <div className="flex flex-col gap-4 h-full justify-center lg:text-left sm:text-center lg:pl-4 xl:pl-0">
      <motion.div
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0 }}
        className="text-white lg:text-[2rem] md:text[1.5rem] sm:text-[1.2rem] font-body"
      >
        Hi! I am
      </motion.div>
      <motion.div
        variants={fadeIn("right", 0.6)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0 }}
        className="text-yellow font-special font-black lg:text-[6rem] md:text-[4.5rem] sm:text-[3rem]"
      >
        Cristina S. <br />
        Cruzat
      </motion.div>
      <motion.div 
      variants={fadeIn("up", 1.0)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0 }}
      className="text-white lg:text-[2rem] md:text[1.5rem] sm:text-[1.2rem] font-body">
        A Computer Engineer
      </motion.div>
    </div>
  );
};

export default HeroText;
