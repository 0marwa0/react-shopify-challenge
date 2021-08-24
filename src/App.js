import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { MoviesStore } from "./store";
import "./App.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Grid, GridItem } from "@chakra-ui/react";
import { SideBar } from "./components/SideBar";
import SearchList from "./components/SearchList";
function App() {
  const { state, dispatch } = useContext(MoviesStore);
  const [searchItem, setSearchIte] = useState("batman");
  const GetMovies = () => {
    let res;
    axios
      .get(`https://www.omdbapi.com/?apikey=81949653&s=${searchItem}`)
      .then((response) => {
        dispatch({ type: "GET_Movies", payload: response.data.Search });
      })
      .catch(() => {});
    return res;
  };
  useEffect(() => {
    GetMovies();
  }, []);
  console.log(state, "data");
  return (
    <div className="App">
      <Grid
        h="200px"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={4}
      >
        <GridItem rowSpan={3} colSpan={1} bg="#1e1b26">
          <SideBar
            items={state}
            searchItem={searchItem}
            setSearchItem={setSearchIte}
          />
        </GridItem>
        <GridItem colSpan={2} bg="papayawhip" />
        <GridItem colSpan={2} bg="papayawhip" />
        <GridItem colSpan={4} bg="#e3def1">
          <div className="MoviesList">
            <SearchList movies={state} />
          </div>
        </GridItem>
      </Grid>
    </div>
  );
}

export default App;
