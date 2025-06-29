import React from "react";
import SkillsItem from "./SkillsItem";
import { skillList } from "../../data/data";
import { TbBrandReactNative } from "react-icons/tb";
import { BiLogoSpringBoot } from "react-icons/bi";
import { SiTailwindcss } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { TbBrandMysql } from "react-icons/tb";
import { RiFirebaseFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { fadeIn, zoom } from "../../framerMotion/variants";

const icons = [
  <TbBrandReactNative />,
  <BiLogoSpringBoot />,
  <SiTailwindcss />,
  <FaGitAlt />,
  <TbBrandMysql />,
  <RiFirebaseFill />,
];

const SkillsList = () => {
  return (
    <div className="flex lg:flex-col md:flex-row-reverse sm:flex-row-reverse">
      <div className="lg:h-[65vh] md:h-auto sm:h-auto flex lg:flex-row md:flex-col sm:flex-col md:items-start sm:items-start md:w-screen sm:w-screen md:mt-16 sm:mt-10 lg:items-end justify-center gap-2">
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
