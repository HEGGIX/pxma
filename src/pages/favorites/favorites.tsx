import "./favorites.scss"
import "./favoritesMedia.scss"
import "../../components/moviesItem/moviesItem.scss"
import { useDispatch,useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";
import { Layout } from "../../Layout";
import { IMoviesItem } from "../../types/types";
import { Tabs } from "../../ui-components/tabs/tabs";
import { ReactComponent as Empty } from "../../assets/empty.svg";
import { addStorage, removeFavoriteMovies } from "../../store/favoritesSlice";
import { useContext, useEffect } from "react";
import { ThemeContext } from "../../context/context";


export const Favorites = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const themeContext = useContext(ThemeContext)
    const favoriteMovies = useSelector(state => state.favorites.favoriteMovies);
    useEffect(() => {
        dispatch(addStorage)
    },[])
    const favoritesMoviesWrapp = favoriteMovies.map(({Poster, Title, Type, imdbID}:IMoviesItem) => {
        return(
            <>
            <div className="favorites-movies__container-wrapper">
                <div className = "favorites-movies__container" onClick={()=>navigate(`/${imdbID}`)}>
                    <img className = "movies-poster" src={Poster} alt="#"/>
                    <h2 className = {themeContext.themeIsActive === false ? "movies-name" : "movies-name white"}>{Title}</h2>
                    <p className="movies-type">{Type.charAt(0).toUpperCase() + Type.slice(1)}</p>
                </div>
                <button className= {themeContext.themeIsActive === false ? "favorites-remove__btn" : "favorites-remove__btn white"}onClick={() => {dispatch(removeFavoriteMovies({imdbID}))}}>Remove</button>
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
                        <div className="favorites-movie">{favoritesMoviesWrapp}</div>
                    </div>
                </div>
             </>
        }
        </>
    )
}
