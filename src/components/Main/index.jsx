import React from "react";
import Video from "./bgvideo";
import Intro from "./intro";
import Start from "./start";
import Lider from "./LiderProduct";
import Brand from "./brand";
import Slick from "./../../lib/ndex";
import "./style.scss";
import Leader from "./NashLider";
import Bussines from "./../../pages/businness";
import About from "./../../pages/about"

const index = () => {
  return (
    <>
      <div className="container">
        <div className="hero">
          <Video />
          <Intro />
          <div className=" pb-2 intro__start bg-white flex items-center justify-center">
            <Start />
          </div>
          <Lider />
          <Brand />
          <div className="corousel flex items-center justify-center pt-4 w-full">
            <Slick />
          </div>
          <Bussines />
          <Leader />
          <About/>
        </div>
      </div>
    </>
  );
};

export default index;
