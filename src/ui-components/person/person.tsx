import "./person.scss"
import arrow from "./person-arrow.png"

export const Person = (props) => {
    return(
        <div className="person-btn__container">
            <div className="person-btn__laters">
                <p>{props.userName.split(" ").map(word => /[a-zа-яё]/i.test(word[0]) ? word[0] : "").join("").toUpperCase()}</p>
            </div>
            <p className="person-btn__name">{props.userName}</p>
            <button className = "person-btn"><img src={arrow} alt="arrow" className = "person-btn__arrow"/></button>
        </div>
    )
}