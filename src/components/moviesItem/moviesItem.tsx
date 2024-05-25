import { useEffect, useState } from "react";
import "./moviesItem.scss"
import { useDispatch } from "react-redux";
import { fetchMovies } from "../../store/moviesSlice";
import { IMoviesItem } from "../../types/types";

export const MoviesItem = ({Poster, Title, Type} : IMoviesItem) => {
    return(
        <>
            <div className = "movies-container">
                <img className = "movies-poster" src={Poster} alt="#"/>
                <h2 className = "movies-name">{Title}</h2>
                <p className="movies-type">{Type.charAt(0).toUpperCase() + Type.slice(1)}</p>
            </div>
        </>
    )
}

