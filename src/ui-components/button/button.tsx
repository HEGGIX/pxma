import "./button.scss"

export const Button = ({text,type}:{text:string}) => {
    return(
        <button className="button" type={type}>{text}</button>
    )
}