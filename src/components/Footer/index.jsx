import React from "react";
import "./style.scss";

const index = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer flex items-start justify-between w-full ">
            <ul className="list-none flex footer-list items-start justify-between w-1/2">
              <li className="list-title">
                MENYU
                <ul>
                  <li>Mahsulotlar katalogi</li>
                  <li>Harakatlar</li>
                  <li>Yangiliklar</li>
                  <li>Biznesingizni qanday boshlash kerak</li>
                  <li>Kontaktlar</li>
                </ul>
              </li>
              <li className="list-title">
                KOMPANIYA HAQIDA
                <ul>
                  <li>Kompaniya tarixi</li>
                  <li>Bizning rahbarlarimiz</li>
                </ul>
              </li>
            </ul>
            <div className="address">
              <address>Tashkent, Uzbekistan, Muqimiy Ko'chasi 23A-uy</address>
            </div>
          </div>
          <div className="footer__bottom text-slate-500">
            FAMALL. Barcha huquqlar himoyalangan 2023 @copy
          </div>
        </div>
      </footer>
    </>
  );
};

export default index;
