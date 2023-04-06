import React from "react";
import Logo from "./../../assets/logo.png";
const logo = () => {
  return (
    <div className="logo">
      <a href="/" className="decoration-inherit">
        <img className="logo" src={Logo} width={250} height={80} alt="Compnay logo" />
      </a>
    </div>
  );
};

export default logo;
