import "./header.scss"
import { Search } from "../../ui-components/search/search"
import { Person } from "../../ui-components/person/person"
import logo from "./pixema.png"
import whiteLogo from "./white-logo.png"
import { useContext } from "react"
import { ThemeContext } from "../../context/context"

export const Header = () =>{
    const themeContext = useContext(ThemeContext)
    return(
        <>
        <header>
            <div className = "header-container">
                <div className = "logo-container">
                    <img src = {themeContext.themeIsActive === false ? logo : whiteLogo}/>
                </div>
                <Search/>
                <Person userName = ""/>
            </div>
        </header>
        </>
    )
}