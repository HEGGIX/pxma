import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Layout } from "../../Layout";
import { IMoviesItem } from "../../types/types";
import "./favorites.scss"
import { Tabs } from "../../ui-components/tabs/tabs";

export const Favorites = () => {
    const navigate = useNavigate()
    const {favoriteMovies} =  useSelector(state=>state as {favorites:{favoriteMovies:IMoviesItem[]}}).favorites
    const favoriteMoviesWrap = favoriteMovies.map(({Poster, Title, Type, imdbID}) => {
        return(
            <div className = "movies-container" onClick={()=>navigate(`movie/${imdbID}`)}>
                <img className = "movies-poster" src={Poster} alt="#"/>
                <h2 className = "movies-name">{Title}</h2>
                <p className="movies-type">{Type.charAt(0).toUpperCase() + Type.slice(1)}</p>
            </div>
        )
    })
    return(
        <>
        <Layout/>
        <div className = "favorites-container">
            <Tabs/>
            <div>{favoriteMoviesWrap}</div>
        </div>
        </>
    )
}