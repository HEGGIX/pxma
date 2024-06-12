import { Header } from "./components/header/header"
import { FiltersContext } from "./context/context"
import { useContext} from "react"
import "./Layout.scss"


export const Layout = () =>{
    const context = useContext(FiltersContext)
    return(
        <>
            <div className={context.isActive ? "layout active" : "layout"}>
                <Header/>
            </div>
        </>
    )
}