import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import bc1 from "/img/bc1.png";
import bc2 from "/img/bc2.png";
import bc3 from "/img/bc3.png";
import bc4 from "/img/bc4.png";
import bc5 from "/img/bc5.png";
import bc6 from "/img/bc6.png";

const Brand = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
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

  const brandImages = [bc1, bc2, bc3, bc4, bc5, bc6];

  return (
    <div>
      <h2>Brand Slider</h2>
      <Slider {...settings}>
        {brandImages.map((image, index) => (
          <div key={index}>
            <img className="brands-img" src={image} alt={`Brand ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Brand;
