import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bc2 from "/img/bc2.png";
import bc3 from "/img/bc3.png";
import bc4 from "/img/bc4.png";
import bc5 from "/img/bc5.jpeg";
import bc6 from "/img/bc6.png";
import bc7 from "/img/bc7.png";
import bc8 from "/img/bc8.png";
import { Fade } from "react-awesome-reveal";

const Brand = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const brandImages = [bc2, bc3, bc4, bc5, bc6, bc7, bc8];

  return (
    <div className="container flex-column align-items-center">
      <Fade direction="up">
        <h1 className="brand-text text-center pb-5 mb-5">
          Our Esteemed Partners and Brands
        </h1>
      </Fade>
      <Fade direction="up">
        <div className="slider-div">
          <Slider {...settings}>
            {brandImages.map((image, index) => (
              <div className="brand-item" key={index}>
                <img
                  className="brands-img"
                  src={image}
                  alt={`Brand ${index + 1}`}
                />
              </div>
            ))}
          </Slider>
        </div>
      </Fade>
    </div>
  );
};

export default Brand;
