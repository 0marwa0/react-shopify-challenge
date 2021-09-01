import React, { useState } from "react";
import "./style/MovieCss.css";
import { FaPlus } from "react-icons/fa";
import axios from "axios";
import { useEffect } from "react";
import ErrorUrl from "../assets/icon/movie.jpg";
const MovieCard = ({ Movie, onAdd, GetDetalis }) => {
  const { Title, Poster, imdbID } = Movie;
  useEffect(() => {}, []);
  return (
    <div className="Movie" onClick={() => GetDetalis(imdbID)}>
      <img className="MovieImg" src={Poster} onError={() => ErrorUrl} />
      <div className="AddIcon">
        <FaPlus className="Icon" onClick={() => onAdd(Movie)} />
      </div>
    </div>
  );
};
export default MovieCard;
