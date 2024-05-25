import "./filter.scss";
import { ReactComponent as Close } from "../../assets/close.svg";
import { Sort } from "../../ui-components/sort/sort";
import { MovieName } from "../../ui-components/movieName/movieName";
import { SortInput } from "../../ui-components/sortInput/sortInput";
import { Button } from "../../ui-components/button/button";
import { FiltersContext } from "../../context/context";
import { useContext } from "react";

export const Filters = () => {
    const context = useContext(FiltersContext)
    return(
        <>
            <div className= {context.isActive ? "filters active" : "filters"}>
                <div className="filters-wrapper">
                    <div className="filters-title__container">
                        <h2 className="filters-title">Filters</h2>
                        <button className="filters-title__btn" onClick={() => context?.setIsactive(!context.isActive)}><Close/></button>
                    </div>
                    <Sort/>
                    <MovieName/>
                    <div className="genre-container">
                        <form>
                            <h3 className="genre-title">Genre</h3>
                        </form>
                    </div>
                    <SortInput placeholderFrom="from" placeholderTo="to" title = "Years"/>
                    <SortInput placeholderFrom="from" placeholderTo="to" title = "Ratings"/>
                    <div className="filters-btn__container">
                        <Button text="Clear filter"/>
                        <Button text="Show results"/>
                    </div>
                </div>
            </div>
        </>
    )
}