import React from "react";
import ProjCard from "./ProjCard";

import { projects } from "../../data/data";
const showcase = ["scube", "flippy", "cclick"];
import { motion } from "framer-motion";
import { fadeIn, zoom } from "../../framerMotion/variants";

const ProjectList = () => {
  return (
    <div className="flex justify-center items-center gap-6 mt-14 lg:flex-row xl:flex-row 2xl:flex-row md:flex-col sm:flex-col">
      {showcase.map((showcaseItem, index) => (
        <motion.div
          variants={fadeIn("up", (index +1)*0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0 }}
          key={index}
          className=""
        >
          <ProjCard
            thumbnail={projects[0][showcaseItem].thumbnail}
            title={projects[0][showcaseItem].title}
            subtitle={projects[0][showcaseItem].subtitle}
            techs={projects[0][showcaseItem].techs}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default ProjectList;
