import "./moviesItem.scss"
import "./moviesItemMedia.scss"
import { IMoviesItem } from "../../types/types";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../context/context";

export const MoviesItem = ({Poster, Title, Type, imdbID} : IMoviesItem) => {
    const navigate = useNavigate()
    const themeContext = useContext(ThemeContext)
    return(
        <>
            <div className = "movies-container" onClick={()=>navigate(`/${imdbID}`)}>
                <img className = "movies-poster" src={Poster} alt="#"/>
                <h2 className = {themeContext.themeIsActive === false ? "movies-name" : "movies-name white"}>{Title}</h2>
                <p className="movies-type">{Type.charAt(0).toUpperCase() + Type.slice(1)}</p>
            </div>
        </>
    )
}