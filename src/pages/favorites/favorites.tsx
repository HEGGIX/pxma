import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Layout } from "../../Layout";
import { IMoviesItem } from "../../types/types";
import "./favorites.scss"
import { Tabs } from "../../ui-components/tabs/tabs";
import { ReactComponent as Empty } from "../../assets/empty.svg";
import { removeFavoriteMovies } from "../../store/favoritesSlice";

export const Favorites = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {favoriteMovies} =  useSelector(state=>state as {favorites:{favoriteMovies:IMoviesItem[]}}).favorites
    localStorage.setItem("movie", JSON.stringify(favoriteMovies))
    const favoriteMoviesStorage = JSON.parse(localStorage.getItem('movie'));
    const favoriteMoviesWrap = favoriteMoviesStorage.map(({Poster, Title, Type, imdbID}:IMoviesItem) => {
        return(
            <>
            <div className="favorites-movies__container-wrapper">
                <div className = "favorites-movies__container" onClick={()=>navigate(`/${imdbID}`)}>
                    <img className = "movies-poster" src={Poster} alt="#"/>
                    <h2 className = "movies-name">{Title}</h2>
                    <p className="movies-type">{Type.charAt(0).toUpperCase() + Type.slice(1)}</p>
                </div>
                <button className="favorites-remove__btn" onClick={() => {dispatch(removeFavoriteMovies({imdbID}))}}>Remove</button>
            </div>
            </>
        )
    })
    return(
        <>
        {
            favoriteMovies.length === 0 ? 
            <>
                <Layout/>
                <div className="empty-favorites__container">
                    <Tabs/>
                    <div className = "empty-favorites__wrapper">
                        <Empty/>
                        <p className = "empty-favorites__text">Add some movie</p>
                    </div>
                </div>
            </>
             :
             <>
                <Layout/>
                <div className = "favorites-container">
                    <Tabs/>
                    <div className = "favorites-movie__wrapper">
                        <div className="favorites-movie">{favoriteMoviesWrap}</div>
                    </div>
                </div>
             </>
        }
        </>
    )
}
