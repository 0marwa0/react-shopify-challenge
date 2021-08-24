import React from "react";
import { Input } from "@chakra-ui/react";
import { FavoriteList } from "./FavoriteList";
import "./SideBar.css";
export const SideBar = ({ searchItem, setSearchItem }) => {
  return (
    <div className="SideBar">
      {/* <dvi>Home</dvi> */}
      <input
        value={searchItem}
        onChange={(e) => setSearchItem(e.target.value)}
        variant="unstyled"
        placeholder="search"
        className="input"
      />
      {/* <div>Favorite </div> */}
      {/* <FavoriteList /> */}
    </div>
  );
};
