import { useEffect } from "react";
import {fetchMovies } from "../../store/moviesSlice";
import { useDispatch, useSelector } from "react-redux";
import { IMoviesItem } from "../../types/types";
import { MoviesItem } from "../moviesItem/moviesItem";
import "./movies.scss"

export const Movies = () => {
    const dispatch  = useDispatch();
    useEffect(() => {
      dispatch(fetchMovies());
    }, []);
    const movies = useSelector(state=>(state as {movies:{movies:IMoviesItem[]}}).movies.movies)
    console.log(movies)
    return(
      <div className="movies">{movies.map((movie:IMoviesItem)=><MoviesItem key={movie.imdbID} {...movie}/>)}</div>
    )
}