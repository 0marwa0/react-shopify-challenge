import React from "react";
import { SearchItem } from "./SearchItem";
export default function Index({ movies, onAdd }) {
  return movies.map((item, i) => (
    <SearchItem key={i} item={item} onAdd={() => onAdd(item)} />
  ));
}
