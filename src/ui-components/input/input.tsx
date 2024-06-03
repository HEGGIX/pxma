import { useContext } from "react"
import { ThemeContext } from "../../context/context"
import "./input.scss"

export const Input = (props) => {
    const themeContext = useContext(ThemeContext)
    return(
        <div className="form-input__container">
            <h2 className={themeContext.themeIsActive === false ? "form-input__title" : "form-input__title white"}>{props.title}</h2>
            <input type={props.type} placeholder={props.placeholder} className= {themeContext.themeIsActive === false ? "form-input" : "form-input white"}/>
        </div>
    )
}