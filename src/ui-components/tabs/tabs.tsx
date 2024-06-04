import "./tabs.scss"
import {ReactComponent as Home} from "../../assets/home.svg"
import {ReactComponent as Trends} from "../../assets/trends.svg"
import {ReactComponent as Favorites} from "../../assets/favorites.svg"
import {ReactComponent as Settings} from "../../assets/settings.svg"
import { useNavigate,Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addTrendsMovies } from "../../store/trendsSlice"


export const Tabs = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
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
                    <Link to = "/trends" className = "tabs-link" onClick = {() =>{dispatch(addTrendsMovies())}}>
                        <Trends className = "tabs-logo"/>
                        <span className = "tabs-text">Trends</span>
                    </Link>
                </div>
                <div className = "tabs-container">
                    <Link to = "/favorites" className = "tabs-link">
                        <Favorites className = "tabs-logo"/>
                        <span className = "tabs-text">Favorites</span>
                    </Link>
                </div>
                <div className = "tabs-container">
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