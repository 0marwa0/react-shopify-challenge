import React from "react";
import NominationItem from "./NominationItem";
import "../style/Nominations.css";
function Index({ nominations, onDelete }) {
  return (
    <div className="NominationsList">
      {nominations.map((item, i) => (
        <NominationItem item={item} key={i} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default Index;
