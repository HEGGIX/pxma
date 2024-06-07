import { useContext, useEffect, useState } from "react";
import {fetchMovies,setSearchChange } from "../../store/moviesSlice";
import { useDispatch, useSelector } from "react-redux";
import { IMoviesItem, ISearchMovie } from "../../types/types";
import { MoviesItem } from "../moviesItem/moviesItem";
import "./movies.scss"
import { ThemeContext } from "../../context/context";
import { fetchSearchMovies } from "../../store/moviesSearchSlice";

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
