import React from "react";
import Img from "./../../assets/leader.jpg";

const NashLider = () => {
  const arr = [1, 2, 3, 4, 5, 6];
  return (
    <>
      <div className="lider">
        <div className="lider__top">
          <h2 className="font-bold mb-10 text-2xl lider__title">НАШИ ЛИДЕРЫ</h2>
          <p className="lider__text text-center">
            ТОП лидеры сетевого маркетинга — это люди, играющие ведущую роль в
            своих сетевых компаниях, главные дистрибьюторы с тысячными
            структурами. Известно, что в сетевом маркетинге невозможно добиться
            успеха в одиночку, это бизнес команды, сплоченные одной идеей.
            Лидеры на основании своего опыта обучают свою команду, своих
            дистрибьюторов навыкам создания успешной бизнес структуры.
          </p>
        </div>
        <div className="lider__peoples flex items-center gap-2 justify-center flex-wrap">
          {arr.map(() => {
            return (
              <div className="lider__card flex items-center justify-center flex-col">
                <img
                  src={Img}
                  alt="leader images"
                  className="rounded-full hover:scale-110 duration-300 cursor-pointer lider-img"
                />
                <h4 className="lider__title">Александр Лазарев</h4>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default NashLider;
