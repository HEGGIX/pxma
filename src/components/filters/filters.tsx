import "./filter.scss";
import "./filtersMedia.scss";
import { ReactComponent as Close } from "../../assets/close.svg";
import { Sort } from "../../ui-components/sort/sort";
import { MovieName } from "../../ui-components/movieName/movieName";
import { SortInput } from "../../ui-components/sortInput/sortInput";
import { FiltersContext } from "../../context/context";
import { useContext} from "react";
import { Genres } from "../genres/genres";

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
                    <div className="filters-genre__container">
                        <h3 className="filters-genre__title">Genres</h3>
                        <Genres/>
                    </div>
                    <SortInput placeholderFrom="from" placeholderTo="to" title = "Years"/>
                    <SortInput placeholderFrom="from" placeholderTo="to" title = "Ratings"/>
                    <div className="filters-btn__container">
                        <button className="filters-btn gray">Clear filter</button>
                        <button className="filters-btn purple">Show results</button>
                    </div>
                </div>
            </div>
        </>
    )
}