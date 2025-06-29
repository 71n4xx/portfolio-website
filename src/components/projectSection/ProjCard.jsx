import React from "react";
import Thumbnail from "./Thumbnail";
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
  "Visual Basic":<FaFileCode />,
  "CVzone":<FaFileCode />,
  "Guna":<FaFileCode />,
  "Pygame":<FaFileCode />,
  Figma:<CgFigma />,
  Logisim: <GiLogicGateOr />,
  "Teachable Machines": <BsFillBadgeTmFill />,
  "GenAI API":<RiAiGenerate2 />,
  Streamlit: <SiStreamlit />,
  HTML: <FaHtml5 />,
  CSS: <FaCss3Alt />,
  JS: <FaSquareJs />,
  PHP: <SiPhp />,
  "Pic16f887A": <FaMicrochip />,
  Infrared: <TbCircuitDiode />,
  "PT-1000":<FaTemperatureHigh />,
  "Software Requirements Specification": <IoIosDocument />,
  "Java Swing": <RiJavaLine />,
  Python:  <FaPython />,
  "C++": <SiCplusplus />,
};



const ProjCard = ({thumbnail, techs, title, subtitle, clickFunc}) => {
  return (
   
      <div onClick={clickFunc} className="lg:min-h-[358px] xl:min-h-[358px] 2xl:min-h-[358px] hover:cursor-pointer group flex flex-col justify-start gap-4 items-center rounded-xl p-4 bg-mediumViolet lg:max-w-[350px] xl:max-w-[350px] 2xl:max-w-[350px] md:max-w-[450px] sm:max-w-[350px]">
        <div>
          <div className=" rounded-lg relative overflow-hidden">
            <div className="group-hover:scale-125 transition-all duration-1000 ">
              <img className="max-w-full h-auto aspect-[4/3] object-cover" src={thumbnail} alt="thumbnail" />
            </div>
            <div className="absolute h-0 w-full flex gap-4 flex-col justify-center group-hover:justify-center items-center left-0 bottom-0 bg-lightViolet group-hover:opacity-90 group-hover:h-[100%] transition-all duration-500 px-2">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-white font-special font-bold sm:text-sm md:text-lg lg:text-lg xl:text-lg 2xl:text-lg">
                Techs Used
              </div>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-wrap justify-center gap-2 items-center">
                {techs.map((tech, index) => (
                  <div
                    key={index}
                    className="hover:bg-white hover:text-bgDark transition-all duration-500 sm:px-1 md:px-2 xl:px-2 lg:px-2 2xl:px-2 py-1 rounded-lg text-white font-body sm:text-[0.7rem] md:text-sm lg:text-sm xl:text-sm 2xl:text-sm border border-white text-center flex items-center gap-2"
                  >
                    <span className="text-lg">{techIcons[tech]}</span>
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="sm:text-center lg:text-left md:text-left xl:text-left 2xl:text-left text-white font-special text-base font-medium">
          <span className="font-bold">{title}</span> :{" "}
          {subtitle}
        </div>
      </div>
  );
};

export default ProjCard;
