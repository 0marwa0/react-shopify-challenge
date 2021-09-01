import React, { useReducer } from "react";

const initialState = { movies: [], nominations: [] };
export const URL = "https://www.omdbapi.com/?apikey=81949653&s=";
export const MoviesStore = React.createContext(initialState);
export function reducer(state, action) {
  switch (action.type) {
    case "GET_Movies":
      return { ...state, movies: action.payload };
    case "GET_MoviesDetalis":
      return { ...state, movies: action.payload };
    case "Post_Nominations":
      return { ...state, nominations: [...state.nominations, action.payload] };
    case "Delete_Nomination":
      return { ...state, nominations: action.payload };
    case "Delete_NominationAll":
      return { ...state, nominations: action.payload };
    default:
      return state;
  }
}

function MoveisProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <MoviesStore.Provider value={{ state, dispatch }}>
      {children}
    </MoviesStore.Provider>
  );
}
export default MoveisProvider;
