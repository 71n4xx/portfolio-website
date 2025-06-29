import React from "react";
import Title from "../Title";
import ProjectList from "./ProjectList";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn, zoom } from "../../framerMotion/variants";

const ProjectSectionMain = () => {
  const navigate = useNavigate();

  const goToProj = () => {
    navigate("/projects");
  };
  return (
    <div>
      <motion.div
        variants={zoom("out", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0 }}
        className="mt-36"
      >
        <Title
          title={"Projects Showcase"}
          btnLabel1={"Show More"}
          btnLabel2={"More"}
          btnfunc={goToProj}
        />
      </motion.div>
      <div>
        <ProjectList />
      </div>
    </div>
  );
};

export default ProjectSectionMain;
