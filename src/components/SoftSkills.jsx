import React from "react";
import "../App.css";
import { motion } from "framer-motion";
import { fadeIn, zoom } from "../framerMotion/variants";

const softSkillsList = [
  { text: "ENTHUSIASTIC LEARNER" },
  { text: "TEAM PLAYER" },
  { text: "ACHIEVER" },
  { text: "ANALYTICAL THINKER" },
  { text: "EXTROVERT" },
  { text: "ARTIST" },
  { text: "SCHOLAR" },
];

const SkillList = ({ text }) => {
  return (
    <div className="font-body text-[2rem] text-lightViolet flex-none justify-center items-center marquee-item">
      {text}
    </div>
  );
};

const SoftSkills = () => {
  return (
    <motion.div
      variants={zoom("out", 1.6)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0 }}
      className="md:pt-10 pt-20 relative"
    >
      <div className="gradient-edge"></div>
      <div className="gradient-edge"></div>

      <div className="marquee h-28 bg-darkViolet absolute w-full">
        <div className=" bg-darkViolet marquee-box gap-12 2xl:animate-[marquee_80s_linear_infinite] xl:animate-[marquee_70s_linear_infinite] lg:animate-[marquee_60s_linear_infinite] md:animate-[marquee_30s_linear_infinite] sm:animate-[marquee_20s_linear_infinite]">
          {softSkillsList.map((skill) => (
            <SkillList key={skill.text} text={skill.text} />
          ))}
          {softSkillsList.map((skill) => (
            <SkillList key={skill.text} text={skill.text} />
          ))}
          {softSkillsList.map((skill) => (
            <SkillList key={skill.text} text={skill.text} />
          ))}
          {softSkillsList.map((skill) => (
            <SkillList key={skill.text} text={skill.text} />
          ))}
          {softSkillsList.map((skill) => (
            <SkillList key={skill.text} text={skill.text} />
          ))}
          {softSkillsList.map((skill) => (
            <SkillList key={skill.text} text={skill.text} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default SoftSkills;
