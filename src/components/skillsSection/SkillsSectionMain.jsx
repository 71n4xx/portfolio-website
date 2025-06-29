import React from "react";
import Title from "../Title";
import SkillsList from "./SkillsList";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn, zoom } from "../../framerMotion/variants";

const SkillsSectionMain = () => {
  const navigate = useNavigate();

  const goToSkills = () => {
    navigate("/skills");
  };
  return (
    <div className="">
      <motion.div
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0 }}
        className="w-full pt-[12%]"
      >
        <Title
          btnLabel1={"View all"}
          btnLabel2={"More"}
          title={"My Skills"}
          btnfunc={goToSkills}
          btndisplay={"none"}
        />
      </motion.div>
      <div>
        <SkillsList />
      </div>
    </div>
  );
};

export default SkillsSectionMain;
