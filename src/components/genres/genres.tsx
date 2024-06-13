import "./genres.scss"
import { MoviesGenre } from "../../ui-components/moviesGenre/moviesGenre"

export const Genres = () => {
    return(
        <>
        <div className = "genres">
            <MoviesGenre text = {"Action"}/>
            <MoviesGenre text = {"Crime"}/>
            <MoviesGenre text = {"Drama"}/>
            <MoviesGenre text = {"Adventure"}/>
            <MoviesGenre text = {"Sci-fi"}/>
            <MoviesGenre text = {"Fantasy"}/>
        </div>
        </>
    )
}