import React from "react";

const HeroGradient = () => {
  return (
    <div>
      <div className="shadow-yellowShadow absolute -top-10 right-[400px] -z-10 animate-pulse"></div>
      <div className="shadow-pinkShadow absolute top-0 right-[150px] -z-10 animate-pulse"></div>
      <div className="shadow-yellowShadow absolute bottom-[100px] left-[50px] -z-20 "></div>
      <div className="shadow-pinkShadow absolute bottom-[275px] left-[0px] -z-20"></div>
    </div>
  );
};

export default HeroGradient;
