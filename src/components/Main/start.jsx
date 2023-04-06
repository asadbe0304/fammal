import React from "react";
import { MdArrowDownward } from "react-icons/md";
import Logo from "./../../assets/logo-icon.png";
const start = () => {
  return (
    <div className="hero_start p-5 py-10 mb-5 rounded-b-lg w-full ">
      <div className="start--logo">
        <img src={Logo} alt="start logo" />
      </div> 
      <div className="flex-col flex items-start justify-between gap-3">
        <div>
          <h3 className="font-bold start_title">Начать бизнес с FAMALL очень просто!</h3>
        </div>
        <div className="flex item-center start_body justify-between gap-8 w-full">
          <p className="text-md font-medium">
          Достаточно найти представителя компании или связаться с нами по
          горячей линии!
          </p>
          <button className="bg-red-600 flex items-center w-48  justify-between rounded-md text-white px-4 cursor-pointer py-2" >
            НАЧАТЬ БИЗНЕС
            <MdArrowDownward />
          </button>
        </div>
      </div>
    </div>
  );
};

export default start;
