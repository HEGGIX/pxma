import "./header.scss"
import { Search } from "../../ui-components/search/search"
import { Person } from "../../ui-components/person/person"
import logo from "./pixema.png"
import whiteLogo from "./white-logo.png"
import { useContext, useState } from "react"
import { ExitContext, ThemeContext } from "../../context/context"
import { ExitTab } from "../exitTab/exitTab"

export const Header = () =>{
    const themeContext = useContext(ThemeContext)
    const [exitMenu,setExitMenu] = useState(false)
    return(
        <>
        <ExitContext.Provider value={{exitMenu:exitMenu, setExitMenu:setExitMenu}}>
            <header>
                <div className = "header-container">
                    <div className = "logo-container">
                        <img src = {themeContext.themeIsActive === false ? logo : whiteLogo}/>
                    </div>
                    <Search/>
                    <Person userName = ""/>
                    <ExitTab/>
                </div>
            </header>
        </ExitContext.Provider>
        </>
    )
}