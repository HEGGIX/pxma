import "./person.scss"
import {ReactComponent as Arrow} from "../../assets/person-arrow.svg"
import { useContext } from "react"
import { ThemeContext } from "../../context/context"

export const Person = (props) => {
    const themeContext = useContext(ThemeContext)
    return(
        <div className="person-btn__container">
            <div className="person-btn__laters">
                <p>{props.userName.split(" ").map(word => /[a-zа-яё]/i.test(word[0]) ? word[0] : "").join("").toUpperCase()}</p>
            </div>
            <p className={themeContext.themeIsActive === false ? "person-btn__name" : "person-btn__name white"}>{props.userName}</p>
            <button className = "person-btn"><Arrow/></button>
        </div>
    )
}