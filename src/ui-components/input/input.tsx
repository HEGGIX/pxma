import "./input.scss"

export const Input = (props) => {
    return(
        <div>
            <h2 className="form-input__title">{props.title}</h2>
            <input type={props.type} placeholder={props.placeholder} className="form-input"/>
        </div>
    )
}