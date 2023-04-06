import React, { Component } from "react";
import Slider from "react-slick";
import "./style.scss";
import Img from "./../assets/kz.jpg";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      className: "center",
      dots: true,
      infinite: true,
      speed: 500,
      centerMode: true,
      centerPadding: "60px",
      slidesToShow: 2,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 920,
          settings: {
            infinite: true,
            speed: 500,
            centerMode: false,
            centerPadding: "160px",
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
      ],
    };
    return (
      <div className="corusel-slide flex items-center justify-center flex-col">
        <h2 className="text-center mb-8 mx-auto font-bold carousel__title text-2xl">
          НОВОСТИ И ВИДЕО
        </h2>
        <Slider {...settings} className="py-4 carousel-box flex items-center justify-center gap-4">
          <div className="relative  news">
            <img src={Img} alt="images" className="rounded-lg" />
            <div className="absolute news-partner z-10 bottom-0 p-2">
              <h3 class="partner__title  text-white font-bold">
                Конференция FAMALL в Казахстане г. Астана 26 ноября 2022г.
              </h3>
              <span class="partner__date text-white">10 декабря 2022</span>
            </div>
          </div>
          <div className="relative  news">
            <img src={Img} alt="images" className="rounded-lg" />
            <div className="absolute news-partner z-10 bottom-0 p-2">
              <h3 class="partner__title  text-white font-bold">
                Конференция FAMALL в Казахстане г. Астана 26 ноября 2022г.
              </h3>
              <span class="partner__date text-white">10 декабря 2022</span>
            </div>
          </div>
          <div className="relative  news">
            <img src={Img} alt="images" className="rounded-lg" />
            <div className="absolute news-partner z-10 bottom-0 p-2">
              <h3 class="partner__title  text-white font-bold">
                Конференция FAMALL в Казахстане г. Астана 26 ноября 2022г.
              </h3>
              <span class="partner__date text-white">10 декабря 2022</span>
            </div>
          </div>
          <div className="relative  news">
            <img src={Img} alt="images" className="rounded-lg" />
            <div className="absolute news-partner z-10 bottom-0 p-2">
              <h3 class="partner__title  text-white font-bold">
                Конференция FAMALL в Казахстане г. Астана 26 ноября 2022г.
              </h3>
              <span class="partner__date text-white">10 декабря 2022</span>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
