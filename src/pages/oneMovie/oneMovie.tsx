import { useState,useEffect } from "react"
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom"
import {ReactComponent as Share} from "../../assets/movie-share.svg"
import {ReactComponent as Favorites} from "../../assets/favorites.svg"
import {ReactComponent as IMDB} from "../../assets/imdb-logo.svg"
import {Layout} from "../../Layout"
import { Tabs } from "../../ui-components/tabs/tabs";
import "./oneMovie.scss"
import { MoveDescription } from "../../ui-components/moveDescription/moveDescription";
import { addFavoriteMovies } from "../../store/favoritesSlice";
import { fetchOneMovie } from "../../store/moviesSlice";


export const OneMovie = () => {
    const{imdbID}=useParams();
    const [oneMovie, setOneMovie] = useState({
        Poster:"",
        Type:"",
        Title:"",
        Genre:"",
        imdbRating:  "",
        Runtime:  "",
        Plot:  ""
    })
    const navigate = useNavigate()
    const dispatch = useDispatch()
    useEffect(() => {
        fetch(`https://www.omdbapi.com/?apikey=b5364880&i=${imdbID}`)
          .then((responce) => responce.json())
          .then((data) =>setOneMovie(data));
      }, [imdbID]);
    const {Poster,Title,Genre,imdbRating,Runtime,Plot}=oneMovie
    return(
        <>
        <Layout/>
        <div className = "oneMovie">
            <Tabs/>
            <div className = "oneMovie__poster-container">
                <img className = "oneMovie-poster" src={Poster} alt="movie" />
                <div className = "oneMovie__btn-container">
                    <button className = "oneMovie-btn left" onClick = {() => dispatch(addFavoriteMovies({oneMovie}))}><Favorites/></button>
                    <button className = "oneMovie-btn right"><Share/></button>
                </div>
            </div>
            <div className = "oneMovie__desc-container">
                <span className = "oneMovie__desc-genre">{Genre}</span>
                <h2 className = "oneMovie__desc-title">{Title}</h2>
                <div className = "oneMovie__desc-subtitle">
                    <div className = {imdbRating > 7 ? "oneMovie__desc-rating__container good": "oneMovie__desc-rating__container normal"}>
                        <span className = "oneMovie__desc-rating">{imdbRating}</span>
                    </div>
                    <div className = "oneMovie__desc-imdbRating__container">
                        <IMDB/>
                        <span className = "oneMovie__desc-imdbRating">{imdbRating}</span>
                    </div>
                    <div className = "oneMovie__desc-time__container">
                        <span className = "oneMovie__desc-time">{Runtime}</span>
                    </div>
                </div>
                <p className = "oneMovie__desc-text">{Plot}</p>
                <MoveDescription/>
            </div>
        </div>
        </>
    )
}