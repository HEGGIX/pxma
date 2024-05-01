import "./sortInput.scss"

export const SortInput = ({placeholderFrom,placeholderTo,title}:{placeholderFrom:string,placeholderTo:string, title:string}) => {
    return(
        <>
            <div className="sort-input__conatiner">
                <h3 className="sort-input__title">{title}</h3>
                <div className="sort-input__wrapper">
                    <input type="number" placeholder={placeholderFrom} className="sort-input"/>
                    <input type="number" placeholder={placeholderTo} className="sort-input"/>
                </div>
            </div>
        </>
    )
}