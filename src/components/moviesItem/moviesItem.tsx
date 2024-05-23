import { useEffect, useState } from "react";
import "./moviesItem.scss"
import { useDispatch } from "react-redux";
import { fetchMovies } from "../../store/moviesSlice";
import { IMoviesItem } from "../../types/types";

export const MoviesItem = ({poster, title} : IMoviesItem) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchMovies())
    },[])
    return(
        <>
            <div className = "movies-container">
                <img className = "movies-poster" src={poster} alt="#"/>
                <h2 className = "movies-name">{title}</h2>
            </div>
        </>
    )
}