import React from "react";
import Logo from "./logo";
import Menu from "./Hamburger";
import "./style.scss";

const index = () => {
  return (
    <>
      <div className="container">
        <div className="header flex items-center justify-between w-full">
          <Logo />
          
          <Menu />
        </div>
      </div>
    </>
  );
};

export default index;
