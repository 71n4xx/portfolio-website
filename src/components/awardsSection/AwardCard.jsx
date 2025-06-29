import React from "react";

const AwardCard = ({compName, thumbnail}) => {
  return (
    <div>
      <div className="group w-80 min-w-64 ">
        <div className=" bg-lightViolet rounded-2xl relative overflow-hidden">
          <div className="group-hover:scale-90 transition-all duration-500 ">
            <img className="max-w-full h-auto aspect-[4/3] object-cover" src={thumbnail} alt="thumbnail" />
          </div>
          <div className="absolute h-0 w-full flex gap-4 flex-col justify-center group-hover:justify-center items-center left-0 top-0 bg-darkViolet px-4 group-hover:opacity-100 group-hover:h-[100%] transition-all duration-500">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-yellow font-special font-bold text-lg">
              {compName}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AwardCard;
