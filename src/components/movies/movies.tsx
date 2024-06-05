import { useContext, useEffect } from "react";
import {fetchMovies,setSearchChange } from "../../store/moviesSlice";
import { useDispatch, useSelector } from "react-redux";
import { IMoviesItem } from "../../types/types";
import { MoviesItem } from "../moviesItem/moviesItem";
import "./movies.scss"
import { ThemeContext } from "../../context/context";
import { fetchSearchMovies } from "../../store/moviesSearchSlice";

export const Movies = () => {
    const dispatch  = useDispatch();
    const {searchMovies,result} = useSelector(state => state.movies)
    useEffect(() => {
      dispatch(fetchMovies());
    },[])
    const movies = useSelector(state=>(state as {movies:{movies:IMoviesItem[]}}).movies.movies)
    return(
      <>
      {/* {searchMovies !== "" ?
        <div className="movies">{result.map((movie:IMoviesItem)=><MoviesItem key={movie.imdbID} {...movie}/>)}</div>
        :
      } */}
      <div className="movies">{movies.map((movie:IMoviesItem)=><MoviesItem key={movie.imdbID} {...movie}/>)}</div>
      </>
  
    )
}
