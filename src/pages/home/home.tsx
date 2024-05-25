import { useContext, useState } from "react";
import { Layout } from "../../Layout";
import { Filters } from "../../components/filters/filters";
import { Movies } from "../../components/movies/movies";
import { FiltersContext } from "../../context/context";
import "./home.scss"
import "../../Layout.scss"
import { Tabs } from "../../ui-components/tabs/tabs";

export const Home = () => {
    const [isActive, setIsactive] = useState(false);
    const context = useContext(FiltersContext)
    return(
        <>
        <FiltersContext.Provider value={{
          isActive: isActive, setIsactive: setIsactive 
        }}>
            <div className={context.isActive ? "layout active" : "layout"}>
                <Layout/>
                <div className="home-content">
                    <Tabs/>
                    <Movies/>
                </div>
            </div>
            <Filters/>
        </FiltersContext.Provider>
        </>
    )
}