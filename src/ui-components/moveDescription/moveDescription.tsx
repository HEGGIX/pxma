import { useParams } from "react-router-dom"
import { useState,useEffect, useContext } from "react"
import "./moveDescription.scss"
import { ThemeContext } from "../../context/context";

export const MoveDescription = () => {
    const{imdbID}=useParams();
    const themeContext = useContext(ThemeContext)
    const [movieDesc, setMovieDesc] = useState({
        Year:"",
        Actors: "",
        Released: "",
        BoxOffice:  "",
        Country:  "",
        Production:  "",
        Director:  "",
        Writer:  "",
    })
    const {Year,Actors,Released,BoxOffice,Country,Production,Director,Writer}=movieDesc
    useEffect(() => {
        fetch(`https://www.omdbapi.com/?apikey=b5364880&i=${imdbID}`)
          .then((responce) => responce.json())
          .then((data) =>setMovieDesc(data));
      }, [imdbID]);
    return(
        <>
        <div className = "movie-desc__list">
            <div className = "movie-desc__col">
                <span className = "movie-desc__title">Year</span>
                <span className = "movie-desc__title">Released</span>
                <span className = "movie-desc__title">BoxOffice</span>
                <span className = "movie-desc__title">Country</span>
                <span className = "movie-desc__title">Production</span>
                <span className = "movie-desc__title">Actors</span>
                <span className = "movie-desc__title">Director</span>
                <span className = "movie-desc__title">Writer</span>
            </div>
            <div className = "movie-desc__col">
                <span className = {themeContext.themeIsActive === false ? "movie-desc__text" : "movie-desc__text white"}>{Year}</span>
                <span className = {themeContext.themeIsActive === false ? "movie-desc__text" : "movie-desc__text white"}>{Released}</span>
                <span className = {themeContext.themeIsActive === false ? "movie-desc__text" : "movie-desc__text white"}>{BoxOffice}</span>
                <span className = {themeContext.themeIsActive === false ? "movie-desc__text" : "movie-desc__text white"}>{Country}</span>
                <span className = {themeContext.themeIsActive === false ? "movie-desc__text" : "movie-desc__text white"}>{Production}</span>
                <span className = {themeContext.themeIsActive === false ? "movie-desc__text" : "movie-desc__text white"}>{Actors}</span>
                <span className = {themeContext.themeIsActive === false ? "movie-desc__text" : "movie-desc__text white"}>{Director}</span>
                <span className = {themeContext.themeIsActive === false ? "movie-desc__text" : "movie-desc__text white"}>{Writer}</span>
            </div>
        </div>
        </>
    )
}
