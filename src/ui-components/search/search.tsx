import "./search.scss"
import { FiltersContext, ThemeContext } from "../../context/context"
import {ReactComponent as SearchImg} from "../../assets/search-img.svg"
import { useContext, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setSearchChange, setSearchMovies } from "../../store/moviesSlice"

export const Search = () =>{
    const [inputValue, setInputValue] = useState("")
    const {searchMovies} = useSelector(state => state.movies)
    const context = useContext(FiltersContext)
    const themeContext = useContext(ThemeContext)
    const dispatch = useDispatch()
    const handleSearchChange = (e) => {
        dispatch(setSearchMovies(e.target.value));
    };
    const handleSearchSubmit = (e) => {
        e.preventDefault();
    };
    return(
        <>
            <form className="search-container" onSubmit={handleSearchSubmit}>
                <input type="text" className = {themeContext.themeIsActive === false ? "search" : "search white"} placeholder = "Search" value={searchMovies} onChange={handleSearchChange}/>
                <button className= {themeContext.themeIsActive === false ? "search-btn" : "search-btn white"} onClick={() => context.setIsactive(!context.isActive)}><SearchImg/></button>
                <button onClick={()=>{dispatch(setSearchChange())}}>AAAA</button>
            </form>
        </>
    )
}
