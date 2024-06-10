import "./home.scss"
import "../../Layout.scss"
import { useContext} from "react";
import { Filters } from "../../components/filters/filters";
import { Movies } from "../../components/movies/movies";
import { FiltersContext, ThemeContext } from "../../context/context";
import { Tabs } from "../../ui-components/tabs/tabs";
import { Header } from "../../components/header/header";

export const Home = () => {
    const context = useContext(FiltersContext)
    return(
        <>
        <div className={context.isActive ? "layout active" : "layout"}>
                <Header/>
                <div className="home-content">
                    <Tabs/>
                    <Movies/>
                </div>
            </div>
        <Filters/>
        </>
    )
}