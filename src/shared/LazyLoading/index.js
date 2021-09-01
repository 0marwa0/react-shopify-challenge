import React from "react";
import FadeLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function LoadingSlide() {
  const settings = { slidesToShow: 4, slidesToScroll: 1, dots: true };
  return (
    <div style={{ backgroundColor: "red" }}>
      <Slider {...settings}>
        <div>
          <FadeLoader />
          loading
        </div>
        <div>
          <FadeLoader />
          loading
        </div>
        <div>
          <FadeLoader />
          loading
        </div>
      </Slider>
    </div>
  );
}
