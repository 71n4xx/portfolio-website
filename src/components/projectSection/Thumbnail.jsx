import React from "react";
import { projects } from "../../data/data";
import { SiArduino } from "react-icons/si";
import { SiEspressif } from "react-icons/si";
import { LuRadioTower } from "react-icons/lu";
import { RiFlutterFill } from "react-icons/ri";
import { IoLogoFirebase } from "react-icons/io5";
import { BsInfoCircleFill } from "react-icons/bs";

const techIcons = {
    Arduino: <SiArduino />,
    "ESP-32": <SiEspressif />,
    "ESP-NOW": <LuRadioTower />,
    Flutterflow: <RiFlutterFill />,
    Firebase: <IoLogoFirebase />,
};

const Thumbnail = () => {
  return (
    <div className="group">
      <div className=" bg-lightViolet rounded-lg relative overflow-hidden">
        <div className="group-hover:scale-125 transition-all duration-500">
          <img src={projects.scube.thumbnail} alt="thumbnail" />
        </div>
        <div className="absolute h-0 w-full flex gap-4 flex-col justify-center group-hover:justify-center items-center left-0 bottom-0 bg-lightViolet group-hover:opacity-90 group-hover:h-[100%] transition-all duration-500">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-white font-special font-bold text-lg">
            Techs Used
          </div>
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-wrap justify-center gap-2 items-center">
            {projects[0].scube.techs.map((tech, index) => (
              <div
                key={index}
                className="hover:bg-white hover:text-bgDark transition-all duration-500 px-2 py-1 rounded-lg text-white font-body text-sm border border-white text-center flex items-center gap-2"
              >
                <span className="text-lg">{techIcons[tech]}</span>{tech}
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Thumbnail;
