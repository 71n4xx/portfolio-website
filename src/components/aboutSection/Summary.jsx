import React from "react";
import ButtonComponent from "../ButtonComponent";
import { motion } from "framer-motion";
import { fadeIn, zoom } from "../../framerMotion/variants";

const Summary = () => {
  return (
    <div className="max-w-[1400px] mx-auto md:px-10 lg:px-8 sm:px-6 flex flex-col gap-8 justify-evenly items-center">
      <div className="sm:flex-col md:flex-row w-full gap-4 flex flex-row justify-between items-center">
        <motion.div
          variants={zoom("in", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0 }}
          className="md:text-center font-special font-black text-yellow text-5xl "
        >
          Who is Cristina?
        </motion.div>
        {/* <ButtonComponent 
        label={"Get to know me more"} 
        label2={"More"}/> */}
      </div>
      <motion.div 
      variants={zoom("in", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0 }}
      className="lg:px-32 md:px-16 sm:px-8 lg:text-left md:text-center sm:text-center font-body text-base font-light text-white">
        I am Cristina S. Cruzat, a Computer engineer who is always up for new
        learnings and opportunities. I have various experiences on different
        academic competitions and student organization leadership. My
        experiences have helped me develop a keen interest to cybersecurity, and
        web development. <br></br><br></br>I'm eager to bring this experience and my enthusiasm for programming as I collaborate with you. An engineer in the making, finally ready to showcase
        her abilities and work with honed experts in the field toward mutual growth and innovation.
      </motion.div>
    </div>
  );
};

export default Summary;
