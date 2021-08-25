import React, { useContext, useEffect, useState } from "react";
import { MoviesStore } from "./store";
import "./App.css";
import NavBar from "./components/NavBar";
import { Grid, GridItem } from "@chakra-ui/react";
import SideBar from "./components/SideBar";
import SearchList from "./components/SearchList";
import { GetMovies } from "./store/Api";
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
      <Grid
        h="200px"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={4}
      >
        <GridItem rowSpan={1} colSpan={1} bg="white">
          <SideBar
            items={state.nominations}
            searchItem={searchItem}
            setSearchItem={setSearchIte}
            onDelete={onDelete}
            onSearch={onSearch}
          />
        </GridItem>

        <GridItem colSpan={4}>
          <div className="MoviesList">
            <SearchList movies={state.movies} onAdd={onAdd} />
          </div>
        </GridItem>
      </Grid>
    </div>
  );
}

export default App;
