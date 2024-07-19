import "./tabs.scss"
import "./tabsMedia.scss"
import {ReactComponent as Home} from "../../assets/home.svg"
import {ReactComponent as Trends} from "../../assets/trends.svg"
import {ReactComponent as Favorites} from "../../assets/favorites.svg"
import {ReactComponent as Settings} from "../../assets/settings.svg"
import {Link } from "react-router-dom";
import { useDispatch} from "react-redux";
import { addTrendsMovies } from "../../store/trendsSlice"
import { useState } from "react"


export const Tabs = () => {
    const dispatch = useDispatch()
    const [activeTab, setActiveTab] = useState(false)
    const handleClick = () => {
        setActiveTab(true)
    }
    return(
        <>
        <div className = "tabs">
            <div className = "tabs-wrapper">
                <div className = {activeTab === true? "tabs-container active" : "tabs-container home"} onClick={() =>handleClick}>
                    <Link to = "/" className = "tabs-link">
                        <Home className = "tabs-logo"/>
                        <span className = "tabs-text">Home</span>
                    </Link>
                </div>
                <div className = {activeTab === true? "tabs-container active" : "tabs-container"} onClick={() => handleClick()}>
                    <Link to = "/trends" className = "tabs-link" onClick = {() =>{dispatch(addTrendsMovies())}}>
                        <Trends className = "tabs-logo"/>
                        <span className = "tabs-text">Trends</span>
                    </Link>
                </div>
                <div className = "tabs-container" onClick={() => toogleClass}>
                    <Link to = "/favorites" className = "tabs-link">
                        <Favorites className = "tabs-logo"/>
                        <span className = "tabs-text">Favorites</span>
                    </Link>
                </div>
                <div className = "tabs-container" onClick={() => toogleClass}>
                    <Link to = "/settings" className = "tabs-link">
                        <Settings className = "tabs-logo"/>
                        <span className = "tabs-text">Settings</span>
                    </Link>
                </div>
            </div>
        </div>
        </>
    )
}