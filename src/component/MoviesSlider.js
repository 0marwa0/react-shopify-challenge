import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MovieCard from "./Movie";
import NoData from "../assets/icon/nodata.png";
import { LoadingSlide } from "../shared/LazyLoading";
export default function MoviesSlider({ movies, onAdd, loading, GetDetalis }) {
  const settings = { slidesToShow: 5, slidesToScroll: 1, dots: false };
  return loading ? (
    <div>loading</div>
  ) : (
    <div>
      {" "}
      {movies ? (
        <Slider {...settings}>
          {movies.map((item, i) => (
            <MovieCard
              key={i}
              Movie={item}
              onAdd={onAdd}
              GetDetalis={GetDetalis}
            />
          ))}
        </Slider>
      ) : (
        <div className="emptySearch">
          <img src={NoData} />{" "}
        </div>
      )}
    </div>
  );
}
