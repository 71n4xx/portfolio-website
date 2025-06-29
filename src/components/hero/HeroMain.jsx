import React from "react";
import HeroText from "./HeroText";
import HeroPic from "./HeroPic";
import HeroGradient from "./HeroGradient";

const HeroMain = () => {
  return (
    <div className="pt-52 pb-16">
      <div className="flex md:flex-col lg:flex-row sm:flex-col max-w-[1400px] mx-auto justify-between items-center relative px-8">
        <HeroText />
          <HeroPic />

        <HeroGradient />
      </div>
    </div>
  );
};

export default HeroMain;
