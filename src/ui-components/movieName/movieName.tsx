import "./movieName.scss";

export const MovieName = () => {
    return(
        <>
        <div className="movie-input__container">
            <h2 className="movie-input__title">Full or short movie name</h2>
            <input type="text" placeholder="Your text" className="movie-input"/>
        </div>
        </>
    )
}