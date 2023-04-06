import React from "react";
import { GiPhone } from "react-icons/gi";
import "./style.scss";
import { MdSms } from "react-icons/md";
import Img from "./../../assets/tg.png";

const index = () => {
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="container">
        <div className="call flex flex-col items-center justify-center gap-3">
          <button
            onClick={goToTop}
            className="px-4 py-2 mb-10 rounded-lg border border-red-600 bg-transparent
         hover:bg-red-600 duration-300 "
          >
            Scroll To Top
          </button>
          <p>Или посетите наши аккаунты:</p>
          <div className="flex mt-4 items-center justify-center gap-2">
            <a
              href="tel:+9989
          2502719"
            >
              <GiPhone className="tel__icon p-2" />
            </a>
            <a href="https://t.me/Aa_Asadbek" target="blank">
              <img src={Img} className="tel__icon" alt="images" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
