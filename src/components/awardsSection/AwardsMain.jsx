import React from "react";
import Title from "../Title";
import AwardList from "./AwardList";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn, zoom } from "../../framerMotion/variants";

const AwardsMain = () => {
  const navigate = useNavigate();

  const goToAchievements = () => {
    navigate("/achievements");
  };
  return (
    <motion.div
      variants={zoom("out", 1.0)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0 }}
      className="mt-20"
    >
      <Title
        title={"Awards"}
        btnLabel1={"View All"}
        btnLabel2={"More"}
        btnfunc={goToAchievements}
      />
      <AwardList />
    </motion.div>
  );
};

export default AwardsMain;
