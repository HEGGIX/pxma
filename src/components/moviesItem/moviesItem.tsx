import { useEffect, useState } from "react";
import "./moviesItem.scss"

export const Movies = () => {
    useEffect(() => {
        fetch("https://www.omdbapi.com/?i=tt3896198&apikey=b5364880")
            .then((response) => response.json())
            .then((json) => localStorage.setItem("movies",JSON.stringify(json)))
    },[])
    const moviesArr = JSON.parse(localStorage.getItem("movies"));
    console.log(moviesArr)
    return(
        <>
            <div className = "movies-container">
                <img className = "movies-poster" src={moviesArr.Poster} alt="#"/>
                <h2 className = "movies-name">{moviesArr.Title}</h2>
                <p className = "movies-genre">{moviesArr.Genre}</p>
            </div>
        </>
    )
}