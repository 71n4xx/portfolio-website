import React from "react";
import ExpCard from "../aboutSection/ExpCard";
import { useEffect } from "react";
import { education, experience } from "../../data/data";
import { motion } from "framer-motion";
import { fadeIn, zoom } from "../../framerMotion/variants";

const ExpModal = ({ closeFunc, list, isOpen }) => {
  useEffect(() => {
    if (isOpen) {
      // Prevent scrolling
      document.body.style.overflow = "hidden";
    } else {
      // Re-enable scrolling
      document.body.style.overflow = "auto";
    }

    // Cleanup when component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;
  return (
    <div>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center flex-col items-center z-50 p-4">
        <div className="bg-bgDark max-w-[1300px] w-[90%] rounded-xl shadow-xl p-6 relative overflow-y-auto max-h-[80vh]">
          <button
            onClick={closeFunc}
            className="absolute top-4 right-4 text-xl font-bold text-gray-700 hover:text-yellow"
          >
            ✕
          </button>
          <div className="mt-10">
            {list === education &&
              list.map((item, i) => (
                <motion.div
                  variants={fadeIn("left", 0.2 * i)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0 }}
                >
                  <ExpCard
                    key={i}
                    year={item["year"]}
                    institution={item["school"]}
                    subtitle1={item["program"]}
                    subtitle2={item["sub2"]}
                    highlight={item["award"]}
                    logo={item["logo"]}
                  />
                </motion.div>
              ))}
            {list === experience &&
              list.map((item, i) => (
                <motion.div
                  variants={fadeIn("left", 0.2 * i)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0 }}
                >
                  <ExpCard
                    key={i}
                    year={item["year"]}
                    institution={item["company"]}
                    subtitle1={item["address"]}
                    subtitle2={item["sub2"]}
                    highlight={item["position"]}
                    logo={item["logo"]}
                  />
                </motion.div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpModal;
