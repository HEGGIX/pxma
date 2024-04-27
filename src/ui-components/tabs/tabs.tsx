import "./tabs.scss"
import {ReactComponent as Home} from "../../assets/home.svg"
import {ReactComponent as Trends} from "../../assets/trends.svg"
import {ReactComponent as Favorites} from "../../assets/favorites.svg"
import {ReactComponent as Settings} from "../../assets/settings.svg"

export const Tabs = () => {
    return(
        <>
        <div className = "tabs-wrapper">
            <div className = "tabs-container">
                <Home className = "tabs-logo"/>
                <span className = "tabs-text">Home</span>
            </div>
            <div className = "tabs-container">
                <Trends className = "tabs-logo"/>
                <span className = "tabs-text">Trends</span>
            </div>
            <div className = "tabs-container">
                <Favorites className = "tabs-logo"/>
                <span className = "tabs-text">Favorites</span>
            </div>
            <div className = "tabs-container">
                <Settings className = "tabs-logo"/>
                <span className = "tabs-text">Settings</span>
            </div>
        </div>
        </>
    )
}