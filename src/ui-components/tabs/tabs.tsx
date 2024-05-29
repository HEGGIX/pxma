import "./tabs.scss"
import {ReactComponent as Home} from "../../assets/home.svg"
import {ReactComponent as Trends} from "../../assets/trends.svg"
import {ReactComponent as Favorites} from "../../assets/favorites.svg"
import {ReactComponent as Settings} from "../../assets/settings.svg"
import { useNavigate,Link } from "react-router-dom";


export const Tabs = () => {
    const navigate = useNavigate()
    return(
        <>
        <div className = "tabs">
            <div className = "tabs-wrapper">
                <div className = "tabs-container home">
                    <Link to = "/" className = "tabs-link">
                        <Home className = "tabs-logo"/>
                        <span className = "tabs-text">Home</span>
                    </Link>
                </div>
                <div className = "tabs-container">
                    <Trends className = "tabs-logo"/>
                    <span className = "tabs-text">Trends</span>
                </div>
                <div className = "tabs-container">
                    <Link to = "/favorites" className = "tabs-link">
                        <Favorites className = "tabs-logo"/>
                        <span className = "tabs-text">Favorites</span>
                    </Link>
                </div>
                <div className = "tabs-container">
                    <Settings className = "tabs-logo"/>
                    <span className = "tabs-text">Settings</span>
                </div>
            </div>
        </div>
        </>
    )
}