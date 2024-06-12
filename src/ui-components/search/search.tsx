import "./search.scss"
import "./searchMedia.scss"
import { FiltersContext, ThemeContext } from "../../context/context"
import {ReactComponent as SearchImg} from "../../assets/search-img.svg"
import { useContext} from "react"
import { useDispatch, useSelector } from "react-redux"
import { setSearchMovies } from "../../store/moviesSlice"
// import debounce from "debounce"

export const Search = () =>{
    const {searchMovies} = useSelector(state => state.movies)
    const context = useContext(FiltersContext)
    const themeContext = useContext(ThemeContext)
    const dispatch = useDispatch()
    const handleSearchChange = (e) => {
        dispatch(setSearchMovies(e.target.value))
    };
    // const debounceSearch = () => {
    //     return debounce(handleSearchChange,500)
    // }
    const handleSearchSubmit = (e) => {
        e.preventDefault();
    };
    return(
        <>
            <form className="search-container" onSubmit={handleSearchSubmit}>
                <input type="text" name="search" className = {themeContext.themeIsActive === false ? "search" : "search white"} placeholder = "Search" value={searchMovies.toLowerCase()} onChange={handleSearchChange}/>
                <button className= {themeContext.themeIsActive === false ? "search-btn" : "search-btn white"} onClick={() => context.setIsactive(!context.isActive)}><SearchImg/></button>
            </form>
        </>
    )
}
