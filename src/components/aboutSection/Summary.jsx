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
        I am Cristina S. Cruzat, a Computer Engineering graduate (Magna Cum Laude) with hands-on 
        security operations experience supporting enterprise endpoint and XDR platforms at Trend Micro. 
        Skilled in triaging and investigating malware and ransomware 
        incidents through XDR alert analysis — tracing malware behavior, origin, and lateral movement. 
        Back-to-back regional placer in national cybersecurity CTF competitions. 
        <br></br><br></br>Seeking a SOC Analyst role to apply threat detection, incident investigation, and endpoint security expertise.
      </motion.div>
    </div>
  );
};

export default Summary;
