import React from "react";
import Img from "./../../assets/logo.png";
import "./style.scss";
const index = () => {
  return (
    <>
      <div className="about">
        <div className="about__top">
          <h3 className="text-2xl font-bold mb-14">BIZ HAQIMIZDA</h3>
        </div>
        <div className="about__inner">
          <div className="flex flex-col about__left items-start justify-between gap-2">
            <img src={Img} alt="company logo" />
            <h3 className="text-xl mb-10 mt-5">FAMALL TARMOG'I</h3>
            <p className="about__left--text">
              Kompaniya 1998 yilda Xitoyning Suzhou shahrida tashkil etilgan.
              <br />
              Hozirda butun dunyo bo'ylab 300 000 hamkorlari bor va tarmoq
              biznesi sohasida yetakchi ekologik kompaniya hisoblanadi!
            </p>
          </div>
          <div className="about__right">
            <p className="my-8">
              Kompaniya o'zining rivojlanishining boshidanoq iste'mol tovarlari
              ishlab chiqarish sohasidagi eng yuqori texnologiyalarga e'tibor
              qaratdi. Asosiy e'tibor mahsulotlarning sifati va xavfsizligiga
              qaratildi. FAMALL Fan va Texnologiyalar guruhi o'z o'sish
              sur'atlarini doimiy ravishda oshirdi va asta-sekin Xitoyning
              biotexnologiya sanoatining ilmiy kashshofiga va etakchisiga
              aylandi. Kompaniyamiz elektron tijorat sohasida ilmiy rivojlanish,
              aqlli ishlab chiqarish, onlayn savdo, jismoniy do'konlar, aqlli
              logistika, ma'lumotlarni himoya qilish, dasturiy ta'minotni ishlab
              chiqish, kontent va oqimlarga e'tibor qaratadi. Xalqaro bozorni
              rivojlantirishga yo'l qo'yib, dunyoning 30 dan ortiq mamlakatlari
              va mintaqalarida: Janubi-Sharqiy Osiyo, Afrika, Sharqiy Evropa,
              MDH mamlakatlari, Rossiyada filiallari ochildi.
            </p>
            <div className="w-full flex items-end justify-end">
              <button className="rounded-lg py-2 px-4 bg-red-600 hover:bg-transparent duration-300 border text-white border-red-600">
                Ko'proq...
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
