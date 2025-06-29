import React from "react";
import AwardCard from "./AwardCard";
import "../../App.css";
import { awards } from "../../data/data";

const AwardList = () => {
  return (
    <div className="flex w-full justify-center items-center mt-12">
      <div className="flex gap-4 justify-center items-center max-w-[1400px] overflow-hidden marquee">
        <div className="flex gap-4 2xl:animate-[marquee_180s_linear_infinite] xl:animate-[marquee_170s_linear_infinite] lg:animate-[marquee_160s_linear_infinite] md:animate-[marquee_130s_linear_infinite] sm:animate-[marquee_120s_linear_infinite]">
          {awards.map((award, index) => (
            <div className="flex gap-4" key={index}>
              <AwardCard thumbnail={award.pic} compName={award.compName} />
              <AwardCard thumbnail={award.cert} compName={award.compName} />
            </div>
          ))}
          {awards.map((award, index) => (
            <div className="flex gap-4" key={index}>
              <AwardCard thumbnail={award.pic} compName={award.compName} />
              <AwardCard thumbnail={award.cert} compName={award.compName} />
            </div>
          ))}
          {awards.map((award, index) => (
            <div className="flex gap-4" key={index}>
              <AwardCard thumbnail={award.pic} compName={award.compName} />
              <AwardCard thumbnail={award.cert} compName={award.compName} />
            </div>
          ))}
          {awards.map((award, index) => (
            <div className="flex gap-4" key={index}>
              <AwardCard thumbnail={award.pic} compName={award.compName} />
              <AwardCard thumbnail={award.cert} compName={award.compName} />
            </div>
          ))}
          {awards.map((award, index) => (
            <div className="flex gap-4" key={index}>
              <AwardCard thumbnail={award.pic} compName={award.compName} />
              <AwardCard thumbnail={award.cert} compName={award.compName} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AwardList;
