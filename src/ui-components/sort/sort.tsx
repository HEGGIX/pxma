import "./sort.scss"

export const Sort = () => {
    return(
        <>
            <div className="sort-container">
                <h3 className="sort-title">Sort by</h3>
                <div className="sort-btn__container">
                    <button className="sort-btn rating-btn">Rating</button>
                    <button className="sort-btn year-btn">Year</button>
                </div>
            </div>
        </>
    )
}