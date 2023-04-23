import React from "react";
import Img from "./../../assets/product.jpg";
const Card = ({prop}) => {
  return (
    <>
      <div className="card flex flex-col items-center justify-center gap-2">
        <img src={Img} alt="product images" />
        <div className="card-body flex flex-col items-start justify-between w-full gap-4">
          <div className="flex items-center justify-between w-full">
            <p className="card-text">{prop.company}</p>
            <span className="card-text">Art 23444</span>
          </div>
          <h3 className="text-lg ">Qattiqlashtiruvchi ta'mirlash mohiyati</h3>
        </div>
        <div className="card__footer py-4   flex items-center  justify-between w-full">
          <strong className="price-card font-medium">2345 P</strong>
          <button className="product__btn card-text hover:text-red-500">ПОДРОБНЕЕ</button>
        </div>
      </div>
    </>
  );
};

export default Card;
