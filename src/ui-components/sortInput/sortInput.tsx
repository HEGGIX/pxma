import "./sortInput.scss"

export const SortInput = ({placeholderFrom,placeholderTo,title}:{placeholderFrom:string,placeholderTo:string, title:string}) => {
    return(
        <>
            <div className="sort-input__container">
                <h3 className="sort-input__title">{title}</h3>
                <div className="sort-input__wrapper">
                    <input type="text" placeholder={placeholderFrom} className="sort-input"/>
                    <input type="text" placeholder={placeholderTo} className="sort-input"/>
                </div>
            </div>
        </>
    )
}