import React from "react";

const SkillsItem = ({ color, skillName, icon }) => {
  const colorClassMap = {
    gradient1: "#F7CE46",
    gradient2: "#FAB54F",
    gradient3: "#FA9952",
    gradient5: "#FC745A",
    gradient4: "#FB8B54",
    gradient6: "#FE5860",
  };
  const colorClass = colorClassMap[color] || "gray-300";
  return (
    <div >
      <div
        className={`flex justify-start items-center gap-4 group
             lg:h-[60vh] lg:flex-col            lg:w-[12.5vw]   lg:rounded-tr-[12.5vw] lg:rounded-tl-[12.5vw] lg:rounded-br-none
             md:h-[10rem] md:flex-row-reverse   md:w-[80vw]       md:rounded-tr-[8rem]     md:rounded-tl-none   md:rounded-br-[8rem] 
             sm:h-[10rem] sm:flex-row-reverse   sm:w-[80vw]       sm:rounded-tr-[8rem]     sm:rounded-tl-none   sm:rounded-br-[8rem] 
             lg:hover:-translate-x-7 md:hover:translate-x-7 sm:hover:translate-x-5 hover:-translate-y-12 hover:drop-shadow-2xl transition-all duration-300`}
        style={{ background: colorClass }}
      >
        <div
          className={`bg-white p-2 rounded-full border-8 lg:w-full md:w-[10rem] sm:w-[10rem] lg:h-[12.5vw] md:h-[10rem] sm:h-[10rem] flex justify-center items-center lg:text-[6.5vw] md:text-[9.5vw] sm:text-[15.5vw] text-bgDark group-hover:text-black group-hover:bg-slate-200 transition-all duration-300`}
          style={{ borderColor: colorClass }}
        >
          {icon}
          
        </div>
        <div className="lg:text-[1.8vw] sm:text-[4.8vw] md:text-[3.8vw] font-body px-2">{skillName}</div>
        
      </div>
    </div>
  );
};

export default SkillsItem;
