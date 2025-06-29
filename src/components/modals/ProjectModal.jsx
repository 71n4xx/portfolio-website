import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { fadeIn, zoom } from "../../framerMotion/variants";
import { SiArduino } from "react-icons/si";
import { SiEspressif } from "react-icons/si";
import { LuRadioTower } from "react-icons/lu";
import { RiFlutterFill } from "react-icons/ri";
import { IoLogoFirebase } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { IoCloud } from "react-icons/io5";
import { TbBrandMysql } from "react-icons/tb";
import { FaFileCode } from "react-icons/fa";
import { CgFigma } from "react-icons/cg";
import { GiLogicGateOr } from "react-icons/gi";
import { BsFillBadgeTmFill } from "react-icons/bs";
import { RiAiGenerate2 } from "react-icons/ri";
import { SiStreamlit } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaSquareJs } from "react-icons/fa6";
import { SiPhp } from "react-icons/si";
import { FaMicrochip } from "react-icons/fa6";
import { TbCircuitDiode } from "react-icons/tb";
import { FaTemperatureHigh } from "react-icons/fa";
import { IoIosDocument } from "react-icons/io";
import { RiJavaLine } from "react-icons/ri";
import { FaPython } from "react-icons/fa6";
import { SiCplusplus } from "react-icons/si";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { GoScreenFull } from "react-icons/go";
import { RxExitFullScreen } from "react-icons/rx";
const techIcons = {
  Arduino: <SiArduino />,
  "ESP-32": <SiEspressif />,
  "ESP-NOW": <LuRadioTower />,
  Flutterflow: <RiFlutterFill />,
  Firebase: <IoLogoFirebase />,
  "Firebase - Database": <IoLogoFirebase />,
  React: <FaReact />,
  "Firebase Cloud Storage": <IoCloud />,
  MySQL: <TbBrandMysql />,
  "Visual Basic": <FaFileCode />,
  CVzone: <FaFileCode />,
  Guna: <FaFileCode />,
  Pygame: <FaFileCode />,
  Figma: <CgFigma />,
  Logisim: <GiLogicGateOr />,
  "Teachable Machines": <BsFillBadgeTmFill />,
  "GenAI API": <RiAiGenerate2 />,
  Streamlit: <SiStreamlit />,
  HTML: <FaHtml5 />,
  CSS: <FaCss3Alt />,
  JS: <FaSquareJs />,
  PHP: <SiPhp />,
  Pic16f887A: <FaMicrochip />,
  Infrared: <TbCircuitDiode />,
  "PT-1000": <FaTemperatureHigh />,
  "Software Requirements Specification": <IoIosDocument />,
  "Java Swing": <RiJavaLine />,
  Python: <FaPython />,
  "C++": <SiCplusplus />,
};

const ProjectModal = ({ project, closeFunc, isOpen }) => {
  const [imgIndex, setImgIndex] = useState(0);
  const [fullSc, setFullSc] = useState(false);
  const goLeft = () => {
    setImgIndex((prev) =>
      prev === 0 ? project.pictures.length - 1 : prev - 1
    );
  };

  const toggleFullScreen = () => {
    setFullSc(!fullSc);
    console.log(fullSc);
  };

  const goRight = () => {
    setImgIndex((prev) =>
      prev === project.pictures.length - 1 ? 0 : prev + 1
    );
  };

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
  if (!project.pictures || project.pictures.length === 0) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
      <div className="bg-darkViolet max-w-[1300px] w-[90%] rounded-xl shadow-xl p-6 relative overflow-y-auto max-h-[80vh]">
        <button
          onClick={closeFunc}
          className="absolute top-4 right-4 text-xl font-bold text-gray-700 hover:text-yellow"
        >
          ✕
        </button>
        {fullSc && (
          <div className="flex justify-center items-center gap-8">
            <div className="w-[100%] h-[100%] group">
              <div className="w-[98%] top-1/2 flex text-xl justify-between items-center flex-row absolute z-50">
                <button
                  onClick={goLeft}
                  className=" bg-bgDark text-white  px-3 py-3 rounded-lg hidden group-hover:block transition-all duration-150"
                >
                  {" "}
                  <FaChevronLeft size={20} />
                </button>
                <button
                  onClick={goRight}
                  className="bg-bgDark text-white  px-3 py-3 rounded-lg  hidden group-hover:block"
                >
                  {" "}
                  <FaChevronRight size={20} />
                </button>
              </div>
              <div className=" flex flex-row justify-center items-center w-full h-full object-contain">
                <img src={project.pictures[imgIndex]} alt="projPic" />
              </div>

              <button
                onClick={toggleFullScreen}
                className="absolute top-5 left-5 bg-bgDark text-white  px-3 py-3 rounded-lg  hidden group-hover:block "
              >
                {!fullSc ? <GoScreenFull /> : <RxExitFullScreen />}
              </button>
            </div>
          </div>
        )}
        {!fullSc && (
          <div className="flex h-full justify-center items-center gap-8 md:flex-col sm:flex-col lg:flex-row xl:flex-row 2xl:flex-row">
            <div className="lg:w-[40%] w-full h-[500px] group">
              <button
                onClick={toggleFullScreen}
                className="absolute top-5 left-5 bg-bgDark text-white  px-3 py-3 rounded-lg group-hover:block"
              >
                <GoScreenFull />
              </button>
              <button
                onClick={goLeft}
                className=" bg-bgDark text-white px-3 absolute top-[250px] py-3 rounded-lg hidden group-hover:block transition-all duration-150"
              >
                {" "}
                <FaChevronLeft size={20} />
              </button>
              <button
                onClick={goRight}
                className="bg-bgDark text-white md:right-5 sm:right-5  absolute top-[250px] lg:right-[60%] xl:right-[60%] hidden 2xl:right-[60%] px-3 py-3 rounded-lg   group-hover:block"
              >
                {" "}
                <FaChevronRight size={20} />
              </button>
              <div className="flex justify-center items-center ">
                <img
                  className="object-contain lg:aspect-[3/4] xl:aspect-[3/4] 2xl:aspect-[3/4] h-[500px] "
                  src={project.pictures[imgIndex]}
                  alt="projPic"
                />
              </div>
            </div>

            {/* contents */}
            <div className="flex flex-col gap-2 items-start justify-start lg:w-[60%] xl:w-[60%] 2xl:w-[60%]">
              <motion.div
                variants={fadeIn("left", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0 }}
                className="font-speacial text-[2rem] font-extrabold text-yellow "
              >
                {project.title}
              </motion.div>
              <motion.div
                variants={fadeIn("left", 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0 }}
                className="font-special pr-32 text-base font-bold text-yellow text-left text-balance"
              >
                {project.subtitle}
              </motion.div>
              <motion.div
                variants={fadeIn("left", 0.8)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0 }}
                className="mt-6 font-body text-base text-white text-left font-light pr-12"
              >
                {project.description}
              </motion.div>
              <motion.div
                variants={fadeIn("left", 1.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0 }}
                className="mt-6 text-2xl font-special text-yellow text-left font-bold"
              >
                Techs Used:
              </motion.div>
              <div className="flex flex-row flex-wrap gap-4">
                {project.techs.map((tech, index) => (
                  <motion.div
                    variants={fadeIn("left", 1.2 + 0.2 * (index+1))}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0 }}
                    className="flex flex-row items-center justify-center gap-1 bg-white px-3 py-1 font-body rounded-lg"
                    key={index}
                  >
                    {techIcons[tech]}
                    {tech}
                  </motion.div>
                ))}
              </div>
              <motion.div
                variants={fadeIn("left", 2.0)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0 }}
                className="mt-6 text-2xl font-special text-yellow text-left font-bold"
              >
                Key Features:
              </motion.div>
              <div className="mb-12">
                {project.keyFeatures.map((feat, i) => (
                  <motion.li
                    variants={fadeIn("left", 2.0 + 0.2 * (i+1))}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0 }}
                    className="font-body text-white text-left font-light"
                    key={i}
                  >
                    {feat}
                  </motion.li>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectModal;
