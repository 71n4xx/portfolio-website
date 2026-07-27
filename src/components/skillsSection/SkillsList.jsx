import React from "react";
import SkillsItem from "./SkillsItem";
import { SiTrendmicro } from "react-icons/si";
import { skillList } from "../../data/data";
import { TbBrandReactNative } from "react-icons/tb";
import { FaShieldVirus } from "react-icons/fa";
import { FaMixer } from "react-icons/fa";
import { BiSolidBug } from "react-icons/bi";
import { PiWindowsLogoFill } from "react-icons/pi";
import { IoMdGitNetwork } from "react-icons/io";
import { motion } from "framer-motion";
import { fadeIn, zoom } from "../../framerMotion/variants";

const icons = [
  <SiTrendmicro />,
  <FaShieldVirus />,
  <FaMixer />,
  <BiSolidBug />,
  <PiWindowsLogoFill />,
  <IoMdGitNetwork />,
];

const SkillsList = () => {
  return (
    <div className="flex lg:flex-col md:flex-row-reverse sm:flex-row-reverse">
      <div className=" md:h-auto sm:h-auto flex lg:flex-row md:flex-col sm:flex-col md:items-start sm:items-start lg:w-auto 2xl:w-auto xl:w-auto md:w-screen sm:w-screen md:mt-16 sm:mt-10 lg:items-end justify-center gap-2">
        {skillList.map((indivSkill, index) => (
          <motion.div
            variants={fadeIn("left", (index + 1) * 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0 }}
          >
            <SkillsItem
              key={index}
              color={indivSkill.color}
              icon={icons[index]}
              skillName={indivSkill.label}
            />
          </motion.div>
        ))}
      </div>
      <div className="lg:h-[7vh]  lg:w-full md:w-[3vw] bg-darkViolet"></div>
    </div>
  );
};

export default SkillsList;
