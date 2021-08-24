import React, { useReducer } from "react";
const initialState = [];
export const MoviesStore = React.createContext(initialState);
export function reducer(state, action) {
  switch (action.type) {
    case "GET_Movies":
      return action.payload;
    case action.type:
      return state.filter((item) => item.id !== action.payload);
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
