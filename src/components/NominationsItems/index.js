import React from "react";
import "./index.css";
import { IoCloseSharp } from "react-icons/io5";
import { BsStarFill } from "react-icons/bs";
const Index = ({ item, onDelete }) => {
  const { Title, Poster, Year, Type, imdbID } = item;
  return (
    <div className="nominationItem">
      <img src={Poster} className="itemImage" />
      <div className="bgText">
        <div>
          <div className="title cut-text"> {Title}</div>

          <div>
            <span>{Year} /</span>
            <span>{Type} </span>
          </div>
          <span className="rateItem">
            <BsStarFill color="gold" />
            <BsStarFill color="gold" />
            <BsStarFill color="gold" />
          </span>
        </div>
        <div onClick={() => onDelete(imdbID)}>
          <IoCloseSharp color="red" size={20} />
        </div>{" "}
      </div>
    </div>
  );
};

export default Index;
