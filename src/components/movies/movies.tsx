import "./movies.scss"
import "./moviesMedia.scss"
import {useEffect} from "react";
import {fetchMovies} from "../../store/moviesSlice";
import { useDispatch, useSelector } from "react-redux";
import { IMoviesItem} from "../../types/types";
import { MoviesItem } from "../moviesItem/moviesItem";

export const Movies = () => {
    const dispatch  = useDispatch();
    const {searchMovies,movies}= useSelector(state=>state.movies)
    useEffect(() => {
      dispatch(fetchMovies());
    },[searchMovies])
    return(
      <>
      <div className="movies">{movies.map((movie:IMoviesItem)=> movie.Title.toLowerCase().includes(searchMovies)?<MoviesItem key={movie.imdbID} {...movie}/>:console.log("no"))}</div> 
      </>
  
    )
}