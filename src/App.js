import React, { useContext, useEffect, useState } from "react";
import { MoviesStore, URL } from "./store";
import { Grid, GridItem } from "@chakra-ui/react";
import "./App.css";
import axios from "axios";
import "antd/dist/antd.css";
import { Drawer } from "antd";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import SideBar from "./shared/SideBar";
import MoviesSlider from "./component/MoviesSlider";
import Nominations from "./component/Nominations";
import MovieDetalis from "./component/MovieDetalis";
import SearchInput from "./component/searchInput";

function App() {
  const { state, dispatch } = useContext(MoviesStore);
  const [searchItem, setSearchIte] = useState("batman");
  const [loading, setLoading] = useState(true);
  const GetMovies = () => {
    axios
      .get(`${URL}${searchItem}`)
      .then((response) => {
        setLoading(false);
        dispatch({ type: "GET_Movies", payload: response.data.Search });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    GetMovies();
  }, []);

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

  const [MovieInfo, setMovieInfo] = useState({});
  const GetMoviesDetalis = (imdbID) => {
    const Url = "https://www.omdbapi.com/?apikey=e630e8d2&i=";
    axios
      .get(`${Url}${imdbID}`)
      .then((response) => {
        setMovieInfo(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const GetDetalis = (id) => {
    GetMoviesDetalis(id);
  };
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <div className="App">
      <div className="MainLayout">
        <SideBar showDrawer={showDrawer} />
        <div style={{ width: "85%" }}>
          <div className="Content">
            <SearchInput
              searchIte={searchItem}
              setSearchItem={setSearchIte}
              onSearch={GetMovies}
            />
            <MovieDetalis MovieInfo={MovieInfo} />
            <MoviesSlider
              loading={loading}
              movies={state.movies}
              onAdd={onAdd}
              GetDetalis={GetDetalis}
            />
            <Drawer
              title={
                <p>
                  Nomination List
                  <span className="ListCount">{state.nominations.length}</span>
                </p>
              }
              placement="right"
              closable={false}
              width={350}
              onClose={onClose}
              visible={visible}
            >
              <Nominations
                nominations={state.nominations}
                onDelete={onDelete}
              />
            </Drawer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
