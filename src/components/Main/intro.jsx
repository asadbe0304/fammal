import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useEffect, useRef, useState } from "react";
const intro = () => {
 
  const goToBottom = () => {
    console.log("ok");
    window.scrollTo({
      top: 700,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div
        className="hero__intro flex flex-col items-center justify-center"
      >
        <h2 className="text-white intro-title">FAMALL NETWORK</h2>
        <p className="text-white intro-text text-center m-0">
          СОЗДАЙТЕ СВОЙ ЭКОЛОГИЧНЫЙ БИЗНЕС БУДУЩЕГО
        </p>
        <MdKeyboardArrowDown
          onClick={goToBottom}
          className="hero__icon mt-20 cursor-pointer animate-bounce text-red-600"
        />
      </div>
    </>
  );
};

export default intro;
