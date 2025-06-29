import React from "react";
import { RxDoubleArrowRight } from "react-icons/rx";

const ButtonComponent = ({ label, label2, clickFunc, type }) => {
  return (
    <div className="relative group">
      <div className="rounded-lg opacity-100 bg-gradient-to-r from-gradient6 to bg-gradient2 group-hover:scale-110 transition-all duration-300">
        <button
          className="relative px-3 py-2 rounded-lg bg-yellow group-hover:bg-transparent  transition-all duration-300 "
          onClick={clickFunc}
          type={type}
        >
          <div className="sm:hidden md:block font-body text-base"> {label}</div>
          <div className="md:hidden sm:flex font-body text-base flex flex-row items-center justify-center gap-2 flex-wrap">
            <div>{label2}</div>
            <div>
              <RxDoubleArrowRight />
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default ButtonComponent;
