import React from "react";
import Img from "./../../assets/logo.png";
import "./style.scss";
const index = () => {
  return (
    <>
      <div className="about">
        <div className="about__top">
          <h3 className="text-2xl font-bold mb-14">О НАС</h3>
        </div>
        <div className="about__inner">
          <div className="flex flex-col about__left items-start justify-between gap-2">
            <img src={Img} alt="company logo" />
            <h3 className="text-xl mb-10 mt-5">FAMALL NETWORK</h3>
            <p className="about__left--text">
              Компания основана в 1998 году в г. Сучжоу, Китай. На данный момент
              насчитывает 300000 партнёров по всему миру и является ведущей
              экологической компанией в сфере сетевого бизнеса!
            </p>
          </div>
          <div className="about__right">
            <p className="my-8">
              С самого начала своего развития компания была ориентирована на
              самые высокие технологии в области производства товаров широкого
              спроса. Основной акцент был сделан на качество и безопасность
              продукции. Научно-техническая группа FAMALL постоянно наращивала
              темпы своего роста и постепенно превратилась в научного
              первопроходца и лидера китайской биотехнологической
              промышленности. Наша компания уделяет особое внимание научным
              разработкам, умному производству, онлайн-продажам, физическим
              магазинам, продуманной логистике, защите данных, разработке
              программного обеспечения, контенту и стримингу в сфере электронной
              коммерции. Задавшись целью развивать международный рынок, были
              открыты филиалы в более чем 30 странах и регионах мира: в
              Юго-Восточной Азии, Африке, Восточной Европе, странах СНГ, России.
            </p>
            <div className="w-full flex items-end justify-end">
              <button className="rounded-lg py-2 px-4 bg-red-600 hover:bg-transparent duration-300 border border-red-600">
                ПОДРОБНЕЕ
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
