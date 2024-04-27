import "./header.scss"
import { Search } from "../../ui-components/search/search"
import { Person } from "../../ui-components/person/person"
import logo from "./pixema.png"

export const Header = () =>{
    return(
        <>
        <header className = "header">
            <div className = "header-container">
                <div className = "logo-container">
                    <img src = {logo}/>
                </div>
                <Search/>
                <Person userName = "Gleb ermakovich"/>
            </div>
        </header>
        </>
    )
}