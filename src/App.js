import React, { useContext, useEffect, useState } from "react";
import { MoviesStore } from "./store";
import { Grid, GridItem } from "@chakra-ui/react";
import "./App.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import SideBar from "./shared/SideBar";
import { GetMovies } from "./store/Api";
import MoviesSlider from "./component/MoviesSlider";
import Nominations from "./component/Nominations";
import MovieDetalis from "./component/MovieDetalis";
function App() {
  const { state, dispatch } = useContext(MoviesStore);
  const [searchItem, setSearchIte] = useState("batman");

  useEffect(() => {
    GetMovies(searchItem, dispatch);
  }, []);

  const onSearch = () => {
    GetMovies(searchItem, dispatch);
  };

  const onAdd = (newItem) => {
    const isNew = state.nominations.filter((item, i) => item === newItem);
    if (isNew.length === 0) {
      dispatch({ type: "Post_Nominations", payload: newItem });
    }
  };

  const onDelete = (id) => {
    let updatedState = state.nominations.filter(
      (item, i) => item.imdbID !== id
    );
    dispatch({ type: "Delete_Nomination", payload: updatedState });
  };

  return (
    <div className="App">
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ width: "10%" }}>
          <SideBar />
        </div>
        <div style={{ width: "85%" }}>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "35px" }}
          >
            <MoviesSlider movies={state.movies} onAdd={onAdd} />
            <div>
              <Nominations
                nominations={state.nominations}
                onDelete={onDelete}
              />
              <MovieDetalis />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
