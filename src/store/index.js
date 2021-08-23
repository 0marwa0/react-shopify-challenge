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


