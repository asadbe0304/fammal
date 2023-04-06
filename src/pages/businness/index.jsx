import React from "react";
import Img1 from "./../../assets/start.jpg";
import Img2 from "./../../assets/start2.jpg";
import Img3 from "./../../assets/srart3.jpg";
import "./style.scss"
const index = () => {
  return (
    <>
      <div className="business mt-20 w-full mb-14 flex flex-col items-center justify-center">
        <div className="relative w-full quick__start">
          <img src={Img1} alt="images" className="absolute w-full quick__img " />
          <p className="quick__text">БЫСТРЫЙ СТАРТ БИЗНЕСА</p>
        </div>
        <div className="w-full flex business_bottom  items-center justify-between">
          <div className="relative w-full quick__start">
            <img src={Img2} alt="images" className="absolute w-full quick__img" />
            <p className="quick__text">ФИНАНСОВАЯ СВОБОДА</p>
          </div>
          <div className="relative w-full quick__start">
            <img src={Img3} alt="images" className="absolute w-full quick__img" />
            <p className="quick__text">ЭКОЛОГИЧНАЯ ПРОДУКЦИЯ</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
