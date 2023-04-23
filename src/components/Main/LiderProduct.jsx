import React from "react";
import Card from "./Card";
import { Product } from "./../../db/db";
const LiderProduct = () => {
  const product = Product;
  return (
    <>
      <div className="lider flex flex-col items-center mt-10 mb-10 justify-center gap-4">
        <div className="lider__top mb-10">
          <h3 className="text-2xl font-bold lider__title">
            SOTISH BO'YICHA YETAKCHILAR
          </h3>
        </div>
        <div className="lider__product flex flex-wrap item-center gap-4 p-4 justify-center">
          {product.map((e, i) => {
            return <Card key={i} prop={e} />;
          })}
        </div>
        <div className="lider__bottom flex items-center flex-col justify-center gap-2">
          <button className="bg-transparent py-2 px-4 w-64 duration-500 hover:text-white font-medium hover:bg-red-500 border border-red-500 rounded-lg">
            TO'LIQ KATALOGNI KO'RISH
          </button>
          <button className="bg-transparent duration-500 py-2 px-4 w-64 hover:bg-red-500 border hover:text-white font-medium border-red-500 rounded-lg">
            PDF KATALOGINI KO'RISH
          </button>
        </div>
      </div>
    </>
  );
};

export default LiderProduct;
