import { Header } from "./components/header/header"
import { Tabs } from "./ui-components/tabs/tabs"
import { Footer } from "./components/footer/footer"
import { FiltersContext } from "./context/context"
import { useContext } from "react"
import "./Layout.scss"
import { Movies } from "./components/movies/movies"


export const Layout = () =>{
    const context = useContext(FiltersContext)
    return(
        <>
            <div className={context.isActive ? "layout active" : "layout"}>
                <Header/>
                <Tabs/>
            </div>
            {/* <Footer/> */}
        </>
    )
}