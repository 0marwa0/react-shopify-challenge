import React from "react";
import "./SideBar.css";
import SearchInput from "../SearchInput";
import NominationsItems from "../NominationsItems";
import { Button } from "@chakra-ui/button";
const Index = (props) => {
  let This = props;
  return (
    <div className="SideBar">
      <SearchInput
        searchItem={This.searchItem}
        setSearchItem={This.setSearchItem}
      />
      <div>
        <Button backgroundColor="gray" onClick={This.onSearch}>
          Search
        </Button>
      </div>

      <div className="nominationsList">
        {This.items.map((item, i) => (
          <NominationsItems key={i} item={item} onDelete={This.onDelete} />
        ))}
      </div>
    </div>
  );
};
export default Index;
