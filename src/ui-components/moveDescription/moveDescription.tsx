import { useParams } from "react-router-dom"
import { useState,useEffect } from "react"
import "./moveDescription.scss"

export const MoveDescription = () => {
    const{imdbID}=useParams();
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
                <span className = "movie-desc__text">{Year}</span>
                <span className = "movie-desc__text">{Released}</span>
                <span className = "movie-desc__text">{BoxOffice}</span>
                <span className = "movie-desc__text">{Country}</span>
                <span className = "movie-desc__text">{Production}</span>
                <span className = "movie-desc__text">{Actors}</span>
                <span className = "movie-desc__text">{Director}</span>
                <span className = "movie-desc__text">{Writer}</span>
            </div>
        </div>
        </>
    )
}
