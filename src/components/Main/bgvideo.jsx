import React from "react";
import Video from "./../../assets/intro.mp4";
const bgvideo = () => {
  return (
    <>
      <video src={Video} className="-z-10 bg-video" loop muted autoPlay></video>
    </>
  );
};

export default bgvideo;
