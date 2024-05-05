import "./search.scss"
import {ReactComponent as SearchImg} from "../../assets/search-img.svg"
import { useState } from "react"

export const Search = () =>{
    const [showFilters, setShowFilters] = useState(false);
    return(
        <>
            <div className="search-container">
                <input type="text" className = "search" placeholder = "Search" />
                <button className="serarch-btn" onClick={() => setShowFilters(!showFilters)}><SearchImg/></button>
            </div>
        </>
    )
}