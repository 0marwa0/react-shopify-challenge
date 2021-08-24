import React from "react";
import { Carousel } from "react-responsive-carousel";

import { SearchItem } from "./SearchItem";
export default function SearchList({ movies }) {
  return movies
    ? movies.map((item, i) => <SearchItem key={i} item={item} />)
    : null;
}
