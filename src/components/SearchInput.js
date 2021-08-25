import React from "react";
import { HiDotsVertical } from "react-icons/hi";
const SearchInput = ({ searchItem, setSearchItem }) => {
  return (
    <div>
      <div className="InputHolder">
        <input
          value={searchItem}
          onChange={(e) => setSearchItem(e.target.value)}
          placeholder="search"
          className="input"
        />

        <HiDotsVertical color="gray" />
      </div>
    </div>
  );
};

export default SearchInput;
