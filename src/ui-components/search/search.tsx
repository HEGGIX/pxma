import "./search.scss"
import { FiltersContext } from "../../context/context"
import {ReactComponent as SearchImg} from "../../assets/search-img.svg"
import { useContext, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchMovies, setSearchMovies } from "../../store/moviesSlice"


export const Search = () =>{
    const [inputValue, setInputValue] = useState("")
    const context = useContext(FiltersContext)
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
                <input type="text" className = "search" placeholder = "Search" value={searchMovie} onChange={handlerSearch}/>
                <button className="serarch-btn" onClick={() => context.setIsactive(!context.isActive)}><SearchImg/></button>
            </form>
        </>
    )
}
