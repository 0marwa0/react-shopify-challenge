import React, { useContext } from "react";
import Film from "../assets/icon/film.js";
import { MoviesStore } from "../store";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { film } from "@fortawesome/free-solid-svg-icons";
import { FaFilm } from "react-icons/fa";
import { RiMovie2Fill } from "react-icons/ri";
import { GrFormClose } from "react-icons/gr";
import { FiDownload } from "react-icons/fi";
import { BsTrashFill } from "react-icons/bs";
const SideBar = ({ showDrawer }) => {
  const { state, dispatch } = useContext(MoviesStore);
  const onDelete = () => {
    dispatch({ type: "Delete_NominationALl", payload: [] });
  };
  return (
    <div className="SideBar">
      <ul>
        <li>
          <RiMovie2Fill size={35} onClick={showDrawer} />
        </li>
        <li>
          <FaFilm size={35} />
        </li>
        <li>
          <FiDownload size={35} />
        </li>

        {/* <li>
          <BsTrashFill size={35} onClick={onDelete} />
        </li> */}
      </ul>
      <ul>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
};

export default SideBar;
