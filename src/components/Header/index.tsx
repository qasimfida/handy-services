import React from "react";
import "./styles.css";
import { CallIcon } from "../Svgs";

const Header = () => {
  return (
    <header className=" h-20 flex items-center justify-between px-4 sm:px-6 md:px-8 border-b-2">
      <div className="flex items-center space-x-4">
        <h1 className="sm:text-2xl text-base uppercase cursor-pointer font-koulen 	 ">
          Handy Services
        </h1>
      </div>

      <button className="flex justify-center items-center transition duration-400 ease-in-out gap-2  px-4 py-2.5 bg-[#05c8c6] active:bg-[#2E67CB] text-white rounded-md font-koulen">
        <CallIcon />
        <p className="hidden sm:inline"> 020 3793 4888</p>
      </button>
    </header>
  );
};

export default Header;
