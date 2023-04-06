import React from "react";
import Img from "./../../assets/LIMANCY.png";
import Img2 from "./../../assets/BERCLEAN.png";
import Img3 from "./../../assets/m.png";
import Img4 from "./../../assets/YIJIAN.png";

const brand = () => {
  return (
    <>
      <div className="brand py-4 mb-10 w-full flex items-center justify-between flex-col gap-2 mt-10">
        <div className="brand-top my-10 mb-10 text-2xl font-bold">
          НАШИ БРЕНДЫ
        </div>
        <div className="brand-body flex items-start justify-between w-full ">
          <div className="flex flex-col product__lefts items-start w-1/2 justify-center gap-2">
            <img src={Img} width={400} height={100} alt="images brand" />
            <h3>Limancy</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium impedit aliquid natus?
            </p>
          </div>
          <div className="flex flex-wrap items-center product__left justify-center gap-4">
            <img src={Img} width={150} height={90} alt="images" />
            <img src={Img2} width={150} height={90} alt="images" />
            <img src={Img3} width={150} height={90} alt="images" />
            <img src={Img4} width={150} height={90} alt="images" />
            <img src={Img2} width={150} height={90} alt="images" />
            <img src={Img3} width={150} height={90} alt="images" />
          </div>
        </div>
      </div>
    </>
  );
};

export default brand;
