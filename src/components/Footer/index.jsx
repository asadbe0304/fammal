import React from "react";
import "./style.scss";

const index = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer flex items-center justify-between w-full ">
            <ul className="list-none flex items-center justify-between w-1/2">
              <li>
                Menu
                <ul>
                  <li>Kompaniya Haqida</li>
                  <li>Mahsulotlar</li>
                  <li>Biznes Boshlash</li>
                  <li>Katolog</li>
                  <li>Sertifikat</li>
                  <li>Kontaktlar</li>
                </ul>
              </li>
              <li>
                Menu
                <ul>
                  <li>Kompaniya Haqida</li>
                  <li>Mahsulotlar</li>
                  <li>Biznes Boshlash</li>
                  <li>Katolog</li>
                  <li>Sertifikat</li>
                  <li>Kontaktlar</li>
                </ul>
              </li>
            </ul>
            <div className="address">
              <address>Tashkent, Uzbekistan, Muqimiy Ko'chasi 23A-uy</address>
            </div>
          </div>
          <div className="footer__bottom">
            Barcha Huquqlar Himoyalangan 2023 @copy
          </div>
        </div>
      </footer>
    </>
  );
};

export default index;
