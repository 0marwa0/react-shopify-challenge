import logo from './logo.svg';
import './App.css';
import {useContext, useEffect ,useState} from 'react';
import {MoviesStore} from "./store"
import axios  from 'axios';


function App() {
  const { state, dispatch } = useContext(MoviesStore);
  const [searchItem,setSearchIte]=useState("batman")
const GetMovies=()=>{
    let res;
     axios.get(`https://www.omdbapi.com/?apikey=81949653&s=${searchItem}`)
  .then(response => {
 console.log(response); 
 dispatch({type:"GET_Movies",payload:response.data}) 
  })
  .catch(error => {
    console.log(error)
  })
  return res
}
  useEffect(()=>{
GetMovies()
  },[])
  console.log(state,"State");
  return (
    <div className="App">
     
    </div>
  );
}

export default App;
