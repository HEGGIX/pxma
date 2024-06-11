import "./moviesGenre.scss"
import {ReactComponent as Delete} from "../../assets/delete-genre.svg"

export const MoviesGenre = (props) => {
    return(
        <>
        <div className = "moviesGenre">
            <span className = "moviesGenre-text">{props.tsxt}</span>
            <button className = "moviesGenre-btn"><Delete/></button>
        </div>
        </>
    )
}