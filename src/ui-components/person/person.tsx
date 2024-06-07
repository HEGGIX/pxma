import "./person.scss"
import {ReactComponent as Arrow} from "../../assets/person-arrow.svg"
import { useContext } from "react"
import { ThemeContext } from "../../context/context"
import { useSelector } from "react-redux"

export const Person = (props) => {
    const {username} = useSelector((state)=>state.user.user)||{username:'Your Name'}
    const themeContext = useContext(ThemeContext)
    return(
        <div className="person-btn__container">
            <div className="person-btn__laters">
                <p>{username.split(" ").map(word => /[a-zа-яё]/i.test(word[0]) ? word[0] : "").join("").toUpperCase()}</p>
            </div>
            <p className={themeContext.themeIsActive === false ? "person-btn__name" : "person-btn__name white"}>{username}</p>
            <button className = "person-btn"><Arrow/></button>
        </div>
    )
}