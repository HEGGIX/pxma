import "./search.scss"
import { FiltersContext, ThemeContext } from "../../context/context"
import {ReactComponent as SearchImg} from "../../assets/search-img.svg"
import { useContext, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchMovies, setSearchMovies } from "../../store/moviesSlice"

export const Search = () =>{
    const [inputValue, setInputValue] = useState("")
    const context = useContext(FiltersContext)
    const themeContext = useContext(ThemeContext)
    const dispatch = useDispatch()
    const {searchMovie} = useSelector(state => (state.movies))
    const handlerSearch = (e) => {
        dispatch(setSearchMovies(e.target.value))
    }
    const handlerSearchSubmit = (e) => {
        e.preventDefault();
        useEffect(() => {
            dispatch(fetchMovies());
          }, [searchMovie]);
      };
    return(
        <>
            <form className="search-container" onSubmit={handlerSearchSubmit}>
                <input type="text" className = {themeContext.themeIsActive === false ? "search" : "search white"} placeholder = "Search" value={searchMovie} onChange={handlerSearch}/>
                <button className= {themeContext.themeIsActive === false ? "search-btn" : "search-btn white"} onClick={() => context.setIsactive(!context.isActive)}><SearchImg/></button>
            </form>
        </>
    )
}
