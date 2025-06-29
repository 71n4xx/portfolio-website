import React from "react";
import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

const NavbarMain = () => {
  const [menuOpen, setMenuOpen] = useState(null);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <nav className="max-w-[1600px] mx-auto px-4 w-full fixed left-[50%] -translate-x-[50%] z-20 flex gap-4 mt-4">
      <div className="flex justify-between w-full max-w-[1500px] mx-auto bg-darkViolet items-center py-[0.35rem] px-11 rounded-r-full rounded-l-full">
        <NavbarLogo />
        <div className={`${menuOpen ? "sm:block" : "sm:hidden"} lg:block`}>
          <NavbarLinks />
        </div>
      </div>
      <div className="flex lg:hidden sm-block p-6 bg-darkViolet items-center justify-center rounded-full">
        <button
          onClick={toggleMenu}
          className="bg-darkViolet w-full p-3 rounded-full text-white text-2xl "
        >
          <div
            className={`flex justify-center items-center transition-all duration-300 ${
              menuOpen
                ? "opacity-100 rotate-90 scale-75" 
                : "opacity-100 rotate-0 scale-100 "
            }`}
          >
            {menuOpen ? <IoClose /> : <RxHamburgerMenu />}
          </div>
        </button>
      </div>
    </nav>
  );
};

export default NavbarMain;
