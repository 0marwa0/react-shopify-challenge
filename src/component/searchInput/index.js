import React from "react";
import { useEffect } from "react";
import "../style/Search.css";
import { BsSearch } from "react-icons/bs";
const Index = ({ SearchItem, setSearchItem, onSearch }) => {
  return (
    <div className="InputHolder">
      <input
        className="InputSearch"
        value={SearchItem}
        placeholder={SearchItem}
        onChange={(e) => setSearchItem(e.target.value)}
      />
      <div onClick={onSearch}>
        <BsSearch color="var(--secondary_color)" cursor="pointer" size={25} />
      </div>
    </div>
  );
};
export default Index;
