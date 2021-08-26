import React, { useContext, useEffect, useState } from "react";
import { MoviesStore } from "./store";
import "./App.css";

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

  return <div className="App">let start it</div>;
}

export default App;
