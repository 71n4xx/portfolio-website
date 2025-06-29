import React from "react";
import ButtonComponent from "./ButtonComponent";

const Title = ({ btnLabel1, btnLabel2, title, btnfunc, btndisplay }) => {
  return (
    <div className="max-w-[1400px] mx-auto md:px-10 lg:px-8 sm:px-6 flex flex-col gap-8 justify-evenly items-center">
      <div className="sm:flex-col md:flex-row w-full gap-4 flex flex-row justify-between items-center">
        <div className="md:text-left font-special font-black text-yellow text-5xl ">
          {title}
        </div>
        <div style={{display: btndisplay}}>
          <ButtonComponent
            label={btnLabel1}
            label2={btnLabel2}
            clickFunc={btnfunc}
          />
        </div>
      </div>
    </div>
  );
};

export default Title;
