import logo from "./logo.svg";

import "./bootstrap.min.css";
import "./App.css";
import React, { useState ,useEffect} from "react";
// import MovieList from "./components/Movielist";

const MovieList = (props)=>{
  return (
  props.movies.map((movie,index)=>{
      return (
          <div className="rowse" >
          <img src={movie.Poster} alt="imageof movie" height="475" width="300" ></img>
          </div>
      )
  })
  )
}
function App() {
  const [movies, setMovies] = useState([])
  const [searchValue,setsearchValue]= useState("twilight")
  // console.log(searchValue);
  const getmovieRequest = async (searchValue) =>{
    console.log(searchValue);
    const url =`http://www.omdbapi.com/?s=${searchValue}&apikey=e7b40d15`;
    const response = await fetch(url);
    const responeJson= await response.json();
    if(responeJson.Search)
    setMovies(responeJson.Search);
   
  }
  useEffect(()=>{
    getmovieRequest(searchValue);
  },[searchValue]);

  return (
    <>
    <div >
    <h2 style={{display:"inline",float:"left"}}>Movies</h2>
    <input style={{display:"inline",float:"right"} } value={searchValue} onChange={ (eve)=> setsearchValue(eve.target.value)}></input>
    </div>
    <div className="movie-app" style={{clear:"both"}}>
      
        <MovieList movies={movies} />
     
    </div>
 
    </>
  );
}

export default App;
