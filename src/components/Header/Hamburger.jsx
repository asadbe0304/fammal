import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { customHook } from "./../../hooks/hooks";

const Hamburger = () => {
  const {
    state: { open },
    dispatch,
  } = customHook();
  return (
    <>
      <div className="header__menu flex items-center justify-between gap-5">
        <div className="header__start text-white font-bold text-xl" id="start">
          КАК НАЧАТЬ
        </div>
        <div>
          {open ? (
            <MdClose
              className="w-10 h-10 icon_menu text-red-600"
              onClick={(e) => dispatch({ type: "OPEN", payload: false })}
            />
          ) : (
            <GiHamburgerMenu
              onClick={(e) => dispatch({ type: "OPEN", payload: true })}
              className="w-9 h-9 icon_menu text-red-600"
            />
          )}
          <ul
            className={`open__menu  absolute items-end justify-end flex-col bg-white list-none w-48 p-4 rounded-md border ${
              open ? "flex" : "hidden"
            }`}
          >
            <li>О компании</li>
            <li className="border-t-2 border-red-600 w-full text-end">
              Продукция
            </li>
            <li>Каталог</li>
            <li>PDF-каталог</li>
            <li>Сертификаты</li>
            <li>Новости</li>
            <li className="border-t-2 border-red-600 w-full text-end">
              Контакты
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Hamburger;
