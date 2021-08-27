import React from "react";
import Film from "../assets/icon/film.js";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { film } from "@fortawesome/free-solid-svg-icons";
import { FaFilm } from "react-icons/fa";
import { RiMovie2Fill } from "react-icons/ri";

const SideBar = () => {
  return (
    <div className="SideBar">
      <ul>
        <li>
          <RiMovie2Fill size={35} />
        </li>
        <li>
          <FaFilm size={35} />
        </li>
      </ul>
      <ul>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
};

export default SideBar;
