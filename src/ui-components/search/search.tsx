import "./search.scss"
import { FiltersContext } from "../../context/context"
import {ReactComponent as SearchImg} from "../../assets/search-img.svg"
import { useContext } from "react"

export const Search = () =>{
    const context = useContext(FiltersContext)
    return(
        <>
            <div className="search-container">
                <input type="text" className = "search" placeholder = "Search" />
                <button className="serarch-btn" onClick={() => context.setIsactive(!context.isActive)}><SearchImg/></button>
            </div>
        </>
    )
}