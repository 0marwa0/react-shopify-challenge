import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MovieCard from "./Movie";
export default function MoviesSlider({ movies, onAdd }) {
  const settings = { slidesToShow: 5, slidesToScroll: 1, dots: true };
  return (
    <div>
      <Slider {...settings}>
        {movies.map((item, i) => (
          <MovieCard key={i} Movie={item} onAdd={onAdd} />
        ))}
      </Slider>
    </div>
  );
}
