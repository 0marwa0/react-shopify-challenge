import React from "react";
import "./style/MovieCss.css";
import { FaPlus } from "react-icons/fa";
const MovieCard = ({ Movie, onAdd }) => {
  const { Title, Poster } = Movie;
  return (
    <div className="Movie">
      <img className="MovieImg" src={Poster} />
      <div className="AddIcon">
        <FaPlus className="Icon" onClick={() => onAdd(Movie)} />
      </div>{" "}
    </div>
  );
};
export default MovieCard;
