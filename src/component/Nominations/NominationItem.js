import React from "react";
import "../style/Nominations.css";
import { IoClose } from "react-icons/io5";
function NominationItem({ item, onDelete }) {
  const { Poster, Title, imdbID } = item;
  return (
    <div className="NominationItem">
      <img src={Poster} />
      <div className="text">{Title}</div>
      <IoClose color="red" onClick={() => onDelete(imdbID)} />
    </div>
  );
}

export default NominationItem;
