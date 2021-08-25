import axios from "axios";
export const GetMovies = (searchItem, dispatch) => {
  axios
    .get(`https://www.omdbapi.com/?apikey=81949653&s=${searchItem}`)
    .then((response) => {
      dispatch({ type: "GET_Movies", payload: response.data.Search });
    })
    .catch(() => {});
};
