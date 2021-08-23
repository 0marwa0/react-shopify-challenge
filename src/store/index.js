import React, { useReducer } from "react";
export const ACTIONS = {
  GET_Movies: "GET_Movies",
  Delete: "Delete"
};

const initialState = [];

export const MoviesStore = React.createContext(initialState);

export function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.GET_Movies:
    case ACTIONS.Delete:
      return state.filter((item) => item.id !== action.payload);
   default:
      throw new Error();
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



