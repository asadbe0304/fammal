import React from "react";
import Video from "./../../assets/intro.mp4";
import Video2 from "./../../assets/in.mp4";
const bgvideo = () => {
  return (
    <>
      <video src={Video} className="-z-10 desktop bg-video" loop muted autoPlay></video>
      <video src={Video2} className="-z-10 bg-video mobile" loop muted autoPlay></video>
    </>
  );
};

export default bgvideo;
